import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { LOGO } from "../utils/constants";
import { USER_ICON } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        // navigate("/error")
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, diplayName } = user;
        dispatch(addUser({ uid: uid, email: email, diplayName: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className=" absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className=" w-44" alt="logo" src={LOGO} />
      {user ? (
        <div className="flex flex-row my-auto p-2">
          <svg
            class="h-7 w-7 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />{" "}
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>

          <img
            src={USER_ICON}
            alt="userIcon"
            className=" w-6 h-7  mx-2 "
          />
          {user?.email}

          <svg
            class="h-8 w-8 text-red-500 mx-4 cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={handleSignOut}
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
            <path d="M7 12h14l-3 -3m0 6l3 -3" />
          </svg>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
