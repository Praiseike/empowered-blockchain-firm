import React from "react";
import PropTypes from "prop-types";

function Button({
  children,
  type = "button",
  role = "button",
  variant = "",
  styles = "",
  onClick = (f) => f,
}) {
  let classname =
    "text-gray-800 text-[.98rem] py-1.5 px-5 rounded ease-in duration-300 ";

  if (variant === "transparent")
    classname += "bg-transparent hover:text-blue hover:bg-gray-100";
  else if (variant === "main")
    classname +=
      "bg-gradient-to-r from-blue to-blue-700 text-white shadow shadow-inner border hover:shadow-none";
  else classname += "bg-gray-300 hover:bg-gray-400";

  return (
    <button
      type={type}
      role={role}
      className={`btn ${classname} ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  styles: PropTypes.string,
  type: PropTypes.string,
  role: PropTypes.string,
};

export default Button;
