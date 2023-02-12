import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  BsFillExclamationCircleFill,
  BsFillEyeFill,
  BsFillEyeSlashFill,
} from "react-icons/bs";

function FormInput({
  label = "",
  error = "",
  onChange = (f) => f,
  ...otherProps
}) {
  let inputIcon;
  const [passwordType, setPasswordType] = useState("password");
  const floatLabelClass = otherProps.value
    ? `top-[6%] left-4 text-[.76rem] opacity-0`
    : `${error ? "top-[17%]" : "top-[23%]"} left-4 text-[.92rem] text-gray-800`;

  if (otherProps.type === "email" && error)
    inputIcon = (
      <BsFillExclamationCircleFill className="absolute top-[20.5%] right-3 fill-red text-[1.12rem]" />
    );

  if (otherProps.type === "password" && otherProps.value) {
    let passwordIcon;

    // Toggle password icon
    if (passwordType === "password")
      passwordIcon = <BsFillEyeFill className="fill-gray-700" />;
    else passwordIcon = <BsFillEyeSlashFill className="fill-gray-700" />;

    inputIcon = (
      <span
        className={`absolute ${
          error ? "top-[16.5%]" : "top-[23%]"
        } right-2 inline py-1 px-1 cursor-pointer`}
        onClick={togglePasswordType}
      >
        {passwordIcon}
      </span>
    );
  }

  // Toggle Password Type
  function togglePasswordType() {
    if (passwordType === "password") setPasswordType("text");
    else setPasswordType("password");
  }

  return (
    <div className="form-group flex flex-col gap-x-2 relative" role="group">
      {/* Form Label */}
      {label && (
        <label
          className={`form-label capitalize mb-1 absolute ${floatLabelClass} transition-all duration-500 motion-reduce:transition-none motion-reduce:hover:transform-none ease-out`}
          htmlFor={`${otherProps.name}-input`}
        >
          {label}
        </label>
      )}

      <input
        {...otherProps}
        type={otherProps.type === "password" ? passwordType : otherProps.type}
        onChange={onChange}
        id={`${otherProps.name}-input`}
        className={`appearance-none border shadow-sm rounded w-full py-3 px-4 pr-10 text-gray-700 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-50 focus:border-transparent ${
          error
            ? "border-red-600 focus:ring-red hover:border-red-700"
            : "focus:ring-blue-600 hover:border-blue-600"
        } transition-all duration-200 ease-in`}
      />

      {/* Input Error */}
      {inputIcon}

      {/* Form Error */}
      {error && <span className="text-red text-[.9rem] mt-1">{error}</span>}
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  otherProps: PropTypes.object,
};

export default FormInput;
