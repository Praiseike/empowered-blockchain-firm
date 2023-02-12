import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
import Dropdown from "../dropdown/dropdown";

function MenuItem({ title, route, submenu }) {
  // text-gray-700
  return (
    <li className="menu-item relative leading-none">
      {submenu ? (
        <>
          <Link
            role="button"
            aria-expanded="false"
            to={`${route}`}
            className="flex items-center gap-1 text-[.93rem] text-blue-dark font-medium hover:text-blue-900 ease-in duration-300"
          >
            {title}
            <AiOutlineCaretDown className="text-xss mt-0.5 fill-gray-700" />
          </Link>

          {/* Dropdown */}
          <Dropdown items={submenu} />
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
