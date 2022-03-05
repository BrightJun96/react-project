import React, { useState } from "react";

const SignupForm = () => {
  const [signupIdValue, setSignupIdValue] = useState("");
  const [signupPwValue, setSignupPwValue] = useState("");
  return (
    <form action="/">
      <div>
        <label>
          ID
          <input
            value={signupIdValue}
            placeholder="Input your id"
            onChange={(e) => setSignupIdValue(e.target.value)}
            name="signupId"
          />
        </label>
      </div>
      <div>
        <label>
          PW
          <input
            value={signupPwValue}
            type="password"
            placeholder="Input your pw"
            onChange={(e) => setSignupPwValue(e.target.value)}
            name="signuppw"
          />
        </label>
      </div>
      <button>Sign-up</button>
    </form>
  );
};

export default SignupForm;
