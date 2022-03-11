import User from '../../models/user';
import Joi from 'joi';
/*
회원가입
POST /api/auth/register
{
    username:"jev",
    password : "jev96"
}
*/
export const register = async (ctx) => {
  //Request body 검증하기
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });

  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { username, password } = ctx.request.body;

  try {
    // username이 이미 존재하는지 확인
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }

    const user = new User({ username });
    await user.setPassword(password); // setPassword는 promise를 반환
    await user.save(); //save도 promise이기 때문에 register함수는 비동기함수

    ctx.body = user.serialize();
  } catch (e) {
    throw (500, e);
  }
};

//로그인
export const login = async (ctx) => {
  const { username, password } = ctx.request.body;
  const user = await User.findByUsername(username);

  if (!user) {
    ctx.status = 401;
    return;
  }

  const valid = await user.checkPassword(password);
  if (!valid) {
    ctx.status = 401;
    return;
  }

  ctx.body = user.serialize();
};

export const check = async (ctx) => {
  // 로그인 상태 확인
};

export const logout = async (ctx) => {
  // 로그아웃
};
