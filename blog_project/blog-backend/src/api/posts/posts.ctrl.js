import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from 'joi';
const { ObjectId } = mongoose.Types;

export const getPostById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; //Bad Request
    return;
  }

  try {
    const post = await Post.findById(id);
    if (!post) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.state.post = post;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
  return next();
};

export const checkOwnPost = (ctx, next) => {
  const { user, post } = ctx.state;
  if (post.user._id.toString() !== user._id) {
    ctx.status = 403;
    return;
  }
  return next();
};

/*
POST /api/posts
{
    title : '제목',
    body : '내용',
    tags : ['태그1','태그2']
}
*/

export const write = async (ctx) => {
  const schema = Joi.object().keys({
    title: Joi.string().required().min(2), //최소 2글자이상 입력해야함.
    body: Joi.string().required().min(2), //최소 2글자이상 입력해야함.
    tags: Joi.array().items(Joi.string().min(2)).required(), //최소 2글자이상 입력해야함.
  });

  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  const post = new Post({ title, body, tags, user: ctx.state.user }); // 인스턴스
  try {
    await post.save();
    // 인스턴스 데이터베이스에 저장
    // 해당 함수의 반환값은 Promise여서 async / await사용
    // 그리하여 데이터베이스에 저장할 때까지 기다릴 수 있게 await사용
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
GET /api/posts
*/
export const list = async (ctx) => {
  // query는 문자열이기 때문에 숫자로 변환해 주어야 한다.
  // 값이 주어지지 않았다면 1을 기본으로 사용한다.
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { tag, username } = ctx.query;
  //tag,username값이 유효하면 객체 안에 넣고 , 그렇지 않으면 넣지 않음.
  const query = {
    ...(username ? { 'user.username': username } : {}), // undefined는 mongoose에서 데이터 조회를 할 수 없게함.
    ...(tag ? { tags: tag } : {}),
  };

  try {
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const postCount = await Post.countDocuments(query).exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10));
    ctx.body = posts.map((post) => ({
      ...post,
      body: post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}`,
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
GET /api/posts/:id
*/

export const read = (ctx) => {
  ctx.body = ctx.status.post;
};

/*
DELETE /api/posts/:id
*/

export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
PATCH /api/posts/:id
*/
export const update = async (ctx) => {
  const { id } = ctx.params;

  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
