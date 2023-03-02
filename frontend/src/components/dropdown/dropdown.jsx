import React from "react";
import { useNavigate } from 'react-router-dom';
import './dropdown.css';

function Dropdown({ items,setDropDown }) {
  const navigate = useNavigate();
  const onListClick = (route)=> {
    setDropDown(false);
    navigate(route)
  }
  const listItems = items.map((item,index) => {
    return <li onClick={() => onListClick(item.route)}className="py-4 block px-4" key={index}>{item.name}</li>
  });
  return (
    <div className="dropdown divide-y divide-grey-100 w-44 shadow p-24">
      <ul className="dropdown-list">
        {listItems}
      </ul>      
    </div>
  );
}

export default Dropdown;
