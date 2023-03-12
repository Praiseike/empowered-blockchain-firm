import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useState } from 'react';
import Dropdown from "../dropdown/dropdown";

function MenuItem({ title, route, submenu }) {
  const [ dropDown, setDropDown ] = useState(false)
  const showSubMenu = () => {
    setDropDown(!dropDown)
  }
  return (
    <li className="menu-item relative block leading-none">
      {submenu ? (
        <>
          <Link
            role="button"
            aria-expanded="false"
            className="flex items-center gap-1 text-[.93rem] text-blue-dark font-medium hover:text-blue-900 ease-in duration-300"
            onClick={showSubMenu}
          >
            {title}
            <AiOutlineCaretDown className="text-xss mt-0.5 fill-gray-700" />
          </Link>

          {/* Dropdown */}
          {dropDown ? <Dropdown items={submenu} setDropDown={setDropDown}/> : null}

        </>
      ) : (
        <Link
          role="link"
          to={`${route}`}
          className="text-[.93rem] text-blue-dark font-medium hover:text-blue-900 ease-in duration-300"
        >
          {title}
        </Link>
      )}
    </li>
  );
}

export default MenuItem;
