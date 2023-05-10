/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../node_modules/sweetalert2/dist/sweetalert2.css";

function Login() {
  const [username, userupdate] = useState("");
  const [password, passwordupdate] = useState("");
  const navigate = useNavigate();

  const ProceedLogin = (e: any) => {
    e.preventDefault();
    if (validate()) {
      fetch(" http://localhost:4000/users/" + username)
        .then((res) => res.json())
        .then((data) => {
          if (data.password === password) {
            navigate("/posts");
            window.localStorage.setItem("tasks", JSON.stringify(data));
          }
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
    }
    if (password === "" || password === null) {
      result = false;
    }
    return result;
  };
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card" style={{ width: "28rem" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4 text-primary">Login</h3>
          <form onSubmit={ProceedLogin}>
            <div className="mb-3">
              <label htmlFor="exampleeInputEmail1" className="form-label">
                User Name
              </label>
              <input
                value={username}
                onChange={(e) => userupdate(e.target.value)}
                type="text"
                className="form-control"
                id="exampleeInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleeInputPassword1" className="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => passwordupdate(e.target.value)}
                type="password"
                className="form-control"
                id="exampleeInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary w-auto me-2">
              Submit
            </button>
            <Link className="btn btn-success w-auto" to={"/home"}>
              New User
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
