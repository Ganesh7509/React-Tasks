import React, { useContext, useState } from "react";
import { Usercontext } from "./context/Usercontext";
import { Productcontext } from "./context/Productcontext";

function Task3() {
  const data=useContext(Usercontext)
  const pdata=useContext(Productcontext)
  console.log(pdata)
  console.log(data)
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submithandler(e) {
    e.preventDefault();
    let formdata = {
      firstname: firstname,
      email: email,
      password: password,
    };
    console.log(formdata);
    alert("Form successfully submitted!");
    setFirstname("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="task3">
      <h1>Form Handling in React</h1>
      <form onSubmit={submithandler} className="form-container">
        <input
          type="text"
          placeholder="Enter your name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Task3;
