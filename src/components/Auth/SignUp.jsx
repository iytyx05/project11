import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import "../Auth/signUp.css";
import { auth } from "../../firebase";
import { set } from "firebase/database";
import { Button, TextField } from "@mui/material";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");
  function register(e) {
    e.preventDefault();
    if (copyPassword !== password) {
      setError("Пароли не совпадают");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setCopyPassword("");
        setPassword("");
      })
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <div className="section1">
        <form className="auth-form" onSubmit={register}>
          <h2>Create an account</h2>
          <TextField
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
          <TextField
            className="password1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <TextField
            className="password2"
            value={copyPassword}
            onChange={(e) => setCopyPassword(e.target.value)}
            type="password"
            placeholder="password again"
          />
          <Button>Create</Button>
          {error ? <p style={{ color: "red" }}>{error}</p> : ""}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
