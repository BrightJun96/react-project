import User from '../../models/user';

/*
회원가입
POST /api/auth/register
{
    username:"jev",
    password : "jev96"
}

*/
export const register = async (ctx) => {
  const { username, password } = ctx.request.body;
  const user = new User({ username });

  await user.setPassword(password);
  await user.save();

  ctx.body = user.serialize();
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
