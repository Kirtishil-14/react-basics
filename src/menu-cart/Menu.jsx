import React, { useState, useEffect } from "react";
import Main from "../routes/Main";
import MenuApi from "./MenuApi";

const uniqueList = [
  ...new Set(
    MenuApi.map((elem) => {
      return elem.category;
    })
  ),
  "All",
];

const Menu = () => {
  const [menuData, setMenuData] = useState(MenuApi);

  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(MenuApi);
      return;
    }
    const updateList = MenuApi.filter((elem) => {
      return elem.category === category;
    });
    setMenuData(updateList);
  };

  return (
    <>
      <Main />
      <nav className="navbar">
        <div>
          {menuList.map((elem, i) => {
            return (
              <button
                key={i}
                type="button"
                className="btn btn-primary m-1"
                onClick={() => filterItem(elem)}
              >
                {elem}
              </button>
            );
          })}
        </div>
      </nav>
      <div className="container d-flex">
        {menuData.map((menu) => {
          const { id, name, category, price, description } = menu;
          return (
            <div className="card  m-2" style={{ width: "18rem" }} key={id}>
              <div className="card-body">
                <h5 className="card-title">
                  {name} - {price}
                </h5>
                <p className="card-text">
                  {category} {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
