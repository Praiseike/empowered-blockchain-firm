import React, { useState } from "react";
import { Link } from "react-router-dom";
import GlobalStyles from "../../../globalStyles/globalStyles";
import { SignInSignUpContainer, SEO, FormInput } from "../../../components";

function Signin() {
  const [errors, setErrors] = useState({});
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  function handleChange({ target }) {
    const { name, value } = target;

    // Validate Email
    if (name === "email") {
      if (!value) setErrors({ ...errors, [name]: "Email can't be empty" });
      else if (
        !/^[^\d][\w]+@[a-zA-Z]{3,8}\.[a-zA-Z]{2,5}(\.[a-zA-Z]{2,4})?$/.exec(
          value
        )
      )
        setErrors({ ...errors, [name]: "Email is invalid" });
      else setErrors({ ...errors, [name]: "" });
    }

    // Validate Password
    if (name === "password") {
      if (!value) setErrors({ ...errors, [name]: "Password can't be empty" });
      else if (value.length < 6)
        setErrors({ ...errors, [name]: "Password strength is weak" });
      else setErrors({ ...errors, [name]: "" });
    }

    // Set Values
    setUserForm({ ...userForm, [name]: value });
  }

  function submitForm() {
    console.log(userForm);
  }

  return (
    <>
      <SEO
        title="Login | Empowered Blockchain"
        description="Gain access to our unlimited courses"
        type="article"
      />

      <SignInSignUpContainer
        heading="Sign in"
        subHeading="Sign in using the same email address you use for Empowered Blockchain"
        buttonText="Sign in"
        option={{
          text: "Not a member yet?",
          routeName: "Sign up for free",
          route: "/register",
        }}
        submitForm={submitForm}
      >
        <FormInput
          type="email"
          name="email"
          label="email"
          onChange={handleChange}
          value={userForm.email}
          error={errors?.email}
        />

        <FormInput
          type="password"
          name="password"
          label="password"
          onChange={handleChange}
          value={userForm.password}
          error={errors?.password}
        />

        <Link
          to="/forgot-password"
          className={`forgot-password -mt-3.5 mb-1 text-end font-medium text-[.93rem] ${GlobalStyles.gradientText.main}`}
        >
          Forgot Password?
        </Link>
      </SignInSignUpContainer>
    </>
  );
}

export default Signin;
