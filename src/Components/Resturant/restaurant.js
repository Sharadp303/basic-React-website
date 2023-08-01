import React, { useState } from "react";
import "./style.css";
import Navbar from "./navBar";
import MenuCard from "./menuCard";

import Menu from "./menuAPI";

const updatedList = [
  ...new Set(
    Menu.map((currEle) => {
      return currEle.category;
    })
  ),
  "ALL",
];
console.log("updated", updatedList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(updatedList);
  // console.log(menuData)
  const filterItem = (category) => {
    if (category === "ALL") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curEle) => {
      return curEle.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <h1 className="head"> Welcome to SP restaurant</h1>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
