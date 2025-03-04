import Img from "../common/Img";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { auth } from "@/utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "@/store/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { NETFLIX_LOGO, USER_AVATAR } from "@/lib/constant";
import GPTSearchButton from "./GPTSearchButton";
import LanguageSelection from "./LanguageSelection";

export default function BrosweHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        dispatch(addUser(user));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };

  return (
    <div className="flex px-8  w-full items-center browser-header fixed flex-row z-30 max-sm:flex-col max-sm:py-2 ">
      <div className="w-40 left-10 max-sm:w-32">
        <Img src={NETFLIX_LOGO} />
      </div>

      <div className="ml-auto rounded-md relative justify-center flex gap-4 items-center max-sm:m-auto">
        <GPTSearchButton />
        <LanguageSelection />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>
              <img
                className="rounded-md cursor-pointer"
                src={USER_AVATAR}
                alt=""
              ></img>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44 mt-4 bg-black">
            <DropdownMenuLabel
              className="text-white items-center justify-center flex cursor-pointer"
              onClick={() => handleSignout()}
            >
              Sign out of Netflix
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
