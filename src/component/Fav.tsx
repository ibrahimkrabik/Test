import React, { useState } from "react";
import Navs from "./Navs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function Fav() {
  const [cards, setCards] = useState([]);

  fetch(" http://localhost:4000/posts/?fav=true")
    .then((res) => res.json())
    .then((data) => {
      setCards(data);
    });
  const removeFav = (id: any) => {
    fetch(" http://localhost:4000/posts/" + id, {
      method: "PATCH",
      body: JSON.stringify({ fav: false }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };
  return (
    <div>
      <Navs />
      <div className="container text-success">
        <h1 className="mt-3">Favorite Posts</h1>
        {cards.map((card: any) => (
          <div
            key={card.id}
            className="card mt-3 border border-primary"
            style={{ width: "30rem" }}
          >
            <div className="card-body">
              <Link to={"/update"}>
                {" "}
                <FontAwesomeIcon className=" text-primary" icon={faPenNib} />
              </Link>
              <FontAwesomeIcon
                onClick={() => removeFav(card.id)}
                className="position-absolute top-2 end-0 btn text-success"
                icon={faStar}
              />

              <h5 className="card-title">{card.user.id}</h5>
              <p className="card-text">{card.content}</p>
              <div className="d-flex justify-content-end">
                <FontAwesomeIcon
                  className="me-1 btn btn-danger"
                  icon={faComment}
                />
                <FontAwesomeIcon
                  className=" btn btn-primary"
                  icon={faThumbsUp}
                />
                <span className="ms-2 mt-1 fw-bold text-primary-emphasis">
                  {card.like}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fav;
