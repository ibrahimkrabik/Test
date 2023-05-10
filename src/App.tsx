/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./component/Home";
import Fav from "./component/Fav";
import Posts from "./component/Posts";
import Login from "./component/Login";
import Update from "./component/Update";
import React, { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.localStorage.getItem("tasks")) {
      navigate("/posts");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/fav" element={<Fav />}></Route>
        <Route path="/posts" element={<Posts />}></Route>

        <Route path="/update" element={<Update />}></Route>
      </Routes>
    </div>
  );
}

export default App;
