import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Feed from "./Components/Feed";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Connections from "./Components/Connections";
import Requests from "./Components/Requests";
const App = () => {
  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body></Body>}>
          <Route path="/" element={<Feed></Feed>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/connections" element={<Connections></Connections>}></Route>
          <Route path="/requests" element={<Requests></Requests>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </> 
  );
};

export default App;
