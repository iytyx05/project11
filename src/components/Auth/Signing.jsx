import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { set } from "firebase/database";
import { Button, TextField } from "@mui/material";
import "../Auth/signIn.css";

const Signing = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  function login(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => console.log(error));
    setError("мы не могли найти ваш аккаунт");
  }
  return (
    <div>
      <div className="section1">
        <form className="auth-form">
          <h2>Login</h2>
          <TextField
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
          <TextField
            className="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <Button onClick={login}>Login</Button>
          {error ? <p style={{ color: "red" }}>{error}</p> : ""}
        </form>
      </div>
    </div>
  );
};

export default Signing;
