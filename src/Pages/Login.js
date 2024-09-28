import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/userSlice";
import { BG_URL, USER_ICON } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState("true");
  const [errosMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSigninForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        name.current.value,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className=" absolute">
        <img className="w-screen h-screen" src={BG_URL} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/3 mx-auto  xl:ml-[35%] absolute p-12  h-[95vh] lg:h-[100%] bg-black mt-[5%] xl:mt-[7%] text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl mx-auto py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {/* {!isSignIn ? (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full bg-gray-700"
          />
        ) : null} */}
        <input
          ref={email}
          type="text"
          placeholder="Email Adress"
          className="p-4 m-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full  bg-gray-700"
        />
        {errosMessage ? (
          <p className="px-4  text-red-800">{errosMessage}</p>
        ) : null}
        <button
          className="p-4 mx-2  my-6 w-full bg-red-700 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-4 cursor-pointer" onClick={toggleSigninForm}>
          {isSignIn
            ? "New to Netflix? Sign up Now."
            : "Already registered. Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
