import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "red" : "black",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <>
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <br />
      <NavLink style={navLinkStyles} to="/HooksOld">
        HooksOld
      </NavLink>
      <br />
      <NavLink style={navLinkStyles} to="/Hooks">
        Hooks
      </NavLink>
      <br />
      <NavLink style={navLinkStyles} to="/Todo">
        Todo
      </NavLink>
      <br />
      <NavLink style={navLinkStyles} to="/Menu">
        Menu
      </NavLink>
      <br />
      <NavLink style={navLinkStyles} to="/Form">
        Form
      </NavLink>
      <br />

      <button onClick={() => navigate("/HooksOld")}>Hooks 1</button>
      <button onClick={() => navigate("/Hooks")}>Hooks 2</button>
      <button onClick={() => navigate("/Todo")}>Todo</button>
      <button onClick={() => navigate("/Menu")}>Menu</button>
      <button onClick={() => navigate("/Form")}>Form</button>
    </>
  );
};

export default Main;
