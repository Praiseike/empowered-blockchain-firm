import React, { useState } from "react";
import axiosClient from '../../../services/axios';

import { SignInSignUpContainer, SEO, FormInput } from "../../../components";
// import axios from '../../../api/axios';


function Signup() {
  const [errors, setErrors] = useState({});
  const [userForm, setUserForm] = useState({
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  });

  function handleChange({ target }) {
    const { name, value } = target;

    // Validate username
    if (name === "username") {
      if (!value)
        setErrors({ ...errors, [name]: "Please fill in the username field" });
      else setErrors({ ...errors, [name]: "" });
    }

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

    // Validate username
    if (name === "password_confirmation") {
      if (!value) setErrors({ ...errors, [name]: "Confirm your password" });
      else if (userForm.password !== value)
        setErrors({ ...errors, [name]: "Password does not match" });
      else setErrors({ ...errors, [name]: "" });
    }

    // Set Values
    setUserForm({ ...userForm, [name]: value });
  }

  function submitForm() {
    console.log(userForm);
    const config = {
      headers: {
        accept:'application/json'
      }
    }

    axiosClient.post('/api/register',userForm,config)
      .then(response => {
        console.log(response);
      })
  }

  return (
    <>
      <SEO
        title="Register | Empowered Blockchain"
        description="Create an account"
        type="article"
      />

      <SignInSignUpContainer
        heading="Sign up"
        subHeading="Sign up to get access to the best courses in tech, cryrto and others"
        buttonText="Sign up"
        option={{
          text: "Already have an account?",
          routeName: "Log in",
          route: "/login",
        }}
        submitForm={submitForm}
      >
        <FormInput
          type="text"
          name="username"
          label="username"
          onChange={handleChange}
          value={userForm.username}
          error={errors?.username}
        />

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

        <FormInput
          type="password"
          name="password_confirmation"
          label="confirm password"
          onChange={handleChange}
          value={userForm.password_confirmation}
          error={errors?.password_confirmation}
        />
      </SignInSignUpContainer>
    </>
  );
}

export default Signup;
