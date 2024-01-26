import React from "react";
import * as OAuth from "firebase/auth";
import {auth} from "./firebaseCore";
import _ from "lodash";

const existsAuth = () => {
  return !_.isEmpty(auth);
}

const Login = async (email, password) => {
  const xhr = await OAuth.signInWithEmailAndPassword(auth, email, password);
  return xhr.user;
};

const Register = async (email, password) => {
  const xhr = await OAuth.createUserWithEmailAndPassword(auth, email, password);
  return xhr.user;
};

const AuthGmail = async () => {
  return _SignInWithProvider(new OAuth.GoogleAuthProvider());
}

const _SignInWithProvider = async (provider) => {
  const xhr = await OAuth.signInWithPopup(auth, provider);
  return xhr.user;
}

const Logout = async () => {
  return await OAuth.signOut(auth);
}

export {
  existsAuth,
  Login,
  AuthGmail,
  Logout,
  Register,
};
