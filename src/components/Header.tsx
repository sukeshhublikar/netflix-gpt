import { useEffect } from "react";
import Img from "../common/Img";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "@/utils/firebase";
import { addUser, removeUser } from "@/store/userSlice";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "@/lib/constant";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        dispatch(addUser(user));
        navigate("/browse");
        // ...
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="flex absolute  px-8 py-2 bg-gradient-to-b from-black w-full items-center">
      <div className="w-44 left-10 ">
        <Img src={NETFLIX_LOGO} />
      </div>
    </div>
  );
}
