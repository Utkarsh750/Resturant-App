import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from "./MenuCard"
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(
        Menu.map((currElem) => {
            return currElem.category
        })
    ),
    "All",
];

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setmenuList] = useState(uniqueList)

    const filterItem = (category) => {
        if(category === "All"){
            setMenuData(Menu);
            return;
        }
        const upatedList = Menu.filter((currElem) => {
            return currElem.category === category;
        });
        setMenuData(upatedList)
    }
  return (
    <>
    <Navbar filterItem={ filterItem } menuList={menuList} />
    <MenuCard  menuData={menuData}/>
    </>
  );
}

export default Resturant;