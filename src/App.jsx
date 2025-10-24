import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Feed from "./Components/Feed";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body></Body>}>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/feed" element={<Feed></Feed>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default App;
