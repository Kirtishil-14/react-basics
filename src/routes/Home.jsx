import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./Main";
import Hooks from "./Hooks";
import Todo from "../todo/Todo";
import Menu from "../menu-cart/Menu";
import Form from "../form/Form";
import HooksOld from "./HooksOld";

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/HooksOld" element={<HooksOld />}></Route>
        <Route path="/Hooks" element={<Hooks />}></Route>
        <Route path="/Todo" element={<Todo />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/Form" element={<Form />}></Route>
      </Routes>
    </Router>
  );
};

export default Home;
