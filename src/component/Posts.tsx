import React, { useEffect, useState } from "react";
import Navs from "./Navs";
import Showposts from "./Showposts";

function Posts() {
  let [content, setcontent] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:4000/posts")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  });

  const usus: any = window.localStorage.getItem("tasks");
  const user: any = JSON.parse(usus);

  const ProceedPost = (e: any) => {
    e.preventDefault();

    let regobj = { content, user, like: 0, fav: false };

    fetch(" http://localhost:4000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(regobj),
    });
  };

  return (
    <div>
      <Navs />
      <div className="container mt-4">
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
              className="form-control w-50"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <input
              type="file"
              className="form-control w-50"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Upload post
          </button>
        </form>
        <div>
          {cards.map((card: any) => (
            <Showposts prop={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
