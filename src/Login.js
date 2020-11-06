import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { Button } from "@material-ui/core";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <h2>Welcome to Keshav's Discord</h2>
      <div className="loging_logo">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
