import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { LOGO } from "../utils/constants";
import { USER_ICON } from "../utils/constants";
import { toggleGptSearchView } from "../utils/redux/GPTSlice";
import { changeLanguage } from "../utils/redux/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch=useSelector(store=>store.gpt.showGptSearch)

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

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange =(e)=>{
dispatch( changeLanguage(e.target.value))
  }

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
    <div className=" absolute w-full px-8 md:bg-gradient-to-b from-black bg-black z-10 flex flex-col justify-between text-white md:flex-row">
      <img className="w-44 mx-auto md:mx-0" alt="logo" src={LOGO} />
      {user ? (
        <div className="flex  flex-col md:flex-row my-auto  p-2 ">
          <div className=" flex-row mx-auto md:mx-0 mb-6 justify-between">
          {showGPTSearch? <select className="p-2 mx-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="ar">Հայերեն</option>
            <option value="ru">Русский</option>
          </select> :null}
         
          <button
            className="px-4  mx-2 py-1 bg-purple-800 text-white rounded-md"
            onClick={handleGPTSearch}
          >
             {showGPTSearch? "Homepage":"GPT Search"}
          </button>
          </div>
          <div className="flex flex-row mx-auto md:mx-0">
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

          <img src={USER_ICON} alt="userIcon" className=" w-6 h-7  mx-2 " />
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
        </div>
      ) : null}
    </div>
  );
};

export default Header;
