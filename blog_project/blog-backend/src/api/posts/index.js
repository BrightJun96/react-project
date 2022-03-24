import Router from 'koa-router';
import {
  list,
  write,
  read,
  remove,
  update,
  checkOwnPost,
  getPostById,
} from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';
const posts = new Router();

posts.get('/', list);
posts.post('/', checkLoggedIn, write);

// !!!!!!!!오타주의!!!!!!!!!!!!!!!!!!
const post = new Router();

post.get('/', read);
post.delete('/', checkLoggedIn, checkOwnPost, remove);
post.patch('/', checkLoggedIn, checkOwnPost, update);

posts.use('/:id', getPostById, post.routes());

export default posts;
