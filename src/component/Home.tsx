/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [country, setcountry] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  const navigate = useNavigate();

  const handlesubmit = (e: any) => {
    let regobj = { id, name, password, country, email, phone };
    e.preventDefault();
    if (validate()) {
      fetch(" http://localhost:4000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regobj),
      }).then((res) => {
        navigate("/posts");
      });
    }
  };
  const validate = () => {
    let result = true;
    if (
      id === "" ||
      id === null ||
      name === "" ||
      name === null ||
      email === "" ||
      email === null ||
      phone === "" ||
      phone === null ||
      country === "" ||
      country === null
    ) {
      result = false;
    }
    return result;
  };
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card" style={{ width: "28rem" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4 text-primary">Register</h3>
          <form onSubmit={handlesubmit}>
            <div className="row">
              <div className="col mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Name
                </label>
                <input
                  value={id}
                  onChange={(e) => setid(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <div className="col mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  User name
                </label>
                <input
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
            <div className="row">
              <div className="col mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="col mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Country
                </label>
                <input
                  value={country}
                  onChange={(e) => setcountry(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>

            <div className="row">
              <div className="col mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email address
                </label>
                <input
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="col mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Phone
                </label>
                <input
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  type="tel"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>

            <div className="row ms-1">
              <button
                type="submit"
                className="btn btn-primary d-flex w-auto me-2"
              >
                Sign up
              </button>
              <Link to={"/"} className="btn btn-danger d-flex w-auto">
                back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
