import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { AuthContext } from "../context/authContext";

const SIGNUP_MUTATION = gql`
  mutation Signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
  });
  const [login, { loading: loginLoading, error: loginError }] = useMutation(
    LOGIN_MUTATION,
    {
      variables: {
        email: formState.email,
        password: formState.password,
      },
      onCompleted: ({ login }) => {
        context.login(login);
        navigate("/");
      },
    }
  );

  const [signup, { loading: signupLoading, error: signupError }] = useMutation(
    SIGNUP_MUTATION,
    {
      variables: {
        email: formState.email,
        password: formState.password,
      },
      onCompleted: ({ signup }) => {
        context.login(signup);
        navigate("/");
      },
    }
  );

  if (loginLoading || signupLoading) return "Submitting...";
  if (loginError || signupError)
    return `Submission error! ${
      loginError ? loginError.message : signupError.message
    }`;

  return (
    <div>
      <h4 className="mv3">{formState.login ? "Login" : "Sign Up"}</h4>
      <div className="flex flex-column">
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value,
            })
          }
          type="text"
          placeholder="Your email address"
        />
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value,
            })
          }
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
        <button
          className="pointer mr2 button"
          onClick={formState.login ? login : signup}
        >
          {formState.login ? "login" : "create account"}
        </button>
        <button
          className="pointer button"
          onClick={(e) =>
            setFormState({
              ...formState,
              login: !formState.login,
            })
          }
        >
          {formState.login
            ? "need to create an account?"
            : "already have an account?"}
        </button>
      </div>
    </div>
  );
};

export default Login;
