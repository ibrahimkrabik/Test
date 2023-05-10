/* eslint-disable no-undef */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Showposts(prop: any) {
  const [isLike, setIsLIke] = useState(true);

  const deletePost = (id: any) => {
    fetch(" http://localhost:4000/posts/" + id, {
      method: "Delete",
    });
  };

  const addFav = (id: any) => {
    fetch(" http://localhost:4000/posts/" + id, {
      method: "PATCH",
      body: JSON.stringify({ fav: true }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };
  const addLike = (id: any, like: any, user: any) => {
    if (isLike) {
      fetch(" http://localhost:4000/posts/" + id, {
        method: "PATCH",
        body: JSON.stringify({ like: like + 1 }),
        headers: {
          "Content-type": "application/json",
        },
      });
      setIsLIke(false);
    } else {
      fetch(" http://localhost:4000/posts/" + id, {
        method: "PATCH",
        body: JSON.stringify({ like: like - 1 }),
        headers: {
          "Content-type": "application/json",
        },
      });
      setIsLIke(true);
    }
  };

  return (
    <div className="">
      <div
        key={prop.prop.id}
        className="card mt-3 border border-primary"
        style={{ width: "28rem" }}
      >
        <div className="card-body">
          <FontAwesomeIcon
            onClick={() => deletePost(prop.prop.id)}
            className="me-1 btn text-danger"
            icon={faTrash}
          />

          <Link to={"/update"}>
            {" "}
            <FontAwesomeIcon className=" text-primary" icon={faPenNib} />
          </Link>
          <FontAwesomeIcon
            onClick={() => addFav(prop.prop.id)}
            className="position-absolute top-2 end-0 btn text-success"
            icon={faStar}
          />

          <h5 className="card-title mt-3">{prop.prop.user.id}</h5>
          <p className="card-text">{prop.prop.content}</p>
          <div className="d-flex justify-content-end">
            <FontAwesomeIcon className="me-1 btn btn-danger" icon={faComment} />
            <FontAwesomeIcon
              className=" btn btn-primary"
              icon={faThumbsUp}
              onClick={() =>
                addLike(prop.prop.id, prop.prop.like, prop.prop.user.id)
              }
            />{" "}
            <span className="ms-2 mt-1 fw-bold text-primary-emphasis">
              {prop.prop.like}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showposts;
