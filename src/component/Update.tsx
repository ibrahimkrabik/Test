import React from "react";
import Navs from "./Navs";
import { useState } from "react";

function Update() {
  let [content, setcontent] = useState("");

  const ProceedPost = (e: any) => {
    e.preventDefault();

    let regobj = { content };

    fetch(" http://localhost:4000/posts/8", {
      method: "PATCH",
      body: JSON.stringify(regobj),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  return (
    <div>
      <Navs />
      <div className="container w-50 mt-4">
        <form onSubmit={ProceedPost}>
          <div className="mb-1">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label fs-3 text"
            >
              Content post
            </label>
            <textarea
              value={content}
              onChange={(e) => setcontent(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <input
              type="file"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Upload post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
