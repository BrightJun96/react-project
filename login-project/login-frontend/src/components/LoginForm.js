import React, { useCallback, useState } from "react";

const LoginForm = () => {
  const [loginIdValue, setLoginIdValue] = useState("");
  const [loginPwValue, setLoginPwValue] = useState("");
  console.log("login-render");

  // 함수를 첫 렌더링때만 생성하고 이후에 처음 생성한 함수를 재사용함.
  // 주의!! useCallback을 썼다고 리렌더링이 안되는 것이 아님.
  // 단지 함수를 재사용하지 않는 것일뿐!

  const memoizedLoginIdValueChange = useCallback((e) => {
    setLoginIdValue(e.target.value);
  }, []);
  return (
    <form action="/protected">
      <div>
        <label>
          ID
          <input
            value={loginIdValue}
            placeholder="Input your id"
            onChange={memoizedLoginIdValueChange}
            name="loginId"
          />
        </label>
      </div>
      <div>
        <label>
          PW
          <input
            value={loginPwValue}
            type="password"
            placeholder="Input your pw"
            onChange={(e) => setLoginPwValue(e.target.value)}
            name="loginpw"
          />
        </label>
      </div>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
