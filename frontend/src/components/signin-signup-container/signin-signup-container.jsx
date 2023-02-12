import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../button/button";
import GlobalStyles from "../../globalStyles/globalStyles";
import Logo from "../logo/logo";

function SignInSignUpContainer({
  children,
  heading = "",
  subHeading = "",
  submitForm = (f) => f,
  buttonText = "",
  option = {},
}) {
  const { text, routeName, route } = option;

  function postRequest(e) {
    e.preventDefault();

    submitForm();
  }

  return (
    <>
      {/* Navigation */}
      <nav className="py-6 px-6 w-[93%] mx-auto">
        <Link to="/" className="text-3xl font-bold leading-none">
          {/* added logo component*/}
          <Logo/>

        </Link>
      </nav>

      <section className="pt-10 flex justify-center">
        <div className="w-form p-4">
          {/* Form Heading */}
          <div className="heading text-center mb-7">
            <h1 className="text-blue-dark mb-1.5 text-3xl font-bold">
              {heading}
            </h1>
            <p className="text-blue-dark font-normal px-[2.25rem]">
              {subHeading}
            </p>
          </div>

          {/* Form Container */}
          <form
            className="w-full h-70 flex flex-col gap-y-5"
            onSubmit={postRequest}
          >
            {children}

            <Button
              type="submit"
              role="submit"
              variant="main"
              styles="w-full py-2.5"
            >
              {buttonText}
            </Button>
          </form>

          {/* Suggestion */}
          <div className="mt-4">
            <p className="flex justify-center items-center gap-x-2">
              {text}
              <Link
                to={`${route}`}
                className={`${GlobalStyles.gradientText.main}`}
              >
                {routeName}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

SignInSignUpContainer.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  option: PropTypes.objectOf(PropTypes.string),
};

export default SignInSignUpContainer;
