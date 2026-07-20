import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/signup", {
        name,
        email,
        password,
      });

      alert(res.data.message);

      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
      alert(err.message);
      alert("Signup Failed");
    }
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "60px auto",
        textAlign: "center",
      }}
    >
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
