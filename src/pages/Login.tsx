import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { validateLoginData, validateSignUpData } from "../utils/validate";
import _ from "lodash";
import { createUser, loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { addUser } from "@/store/userSlice";
import { useDispatch } from "react-redux";
import { EyeOffIcon, EyeOnIcon } from "@/common/Icons";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [isLogin, setLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleLoginStatus = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setLogin(!isLogin);
    setErrorMsg(null);
  };

  const validateData = () => {
    const name = nameRef?.current?.value || "";
    const password = passwordRef?.current?.value || "";
    const email = emailRef?.current?.value || "";
    if (isLogin) {
      return validateLoginData(email, password);
    } else {
      return validateSignUpData(name, email, password);
    }
  };

  const signUp = async () => {
    try {
      const resp = await createUser({
        name: nameRef.current?.value || "",
        email: emailRef?.current?.value || "",
        password: passwordRef?.current?.value || "",
      });
      dispatch(addUser(resp));
    } catch (e: any) {
      console.log(e);
      setErrorMsg(_.get(e, "message"));
    }
  };

  const login = async () => {
    try {
      await loginUser({
        email: emailRef?.current?.value || "",
        password: passwordRef?.current?.value || "",
      });
    } catch (e: any) {
      setErrorMsg(_.get(e, "message"));
      console.log(e);
    }
  };

  const onSubmit = () => {
    let errorMessage: string | null = validateData();
    setErrorMsg(errorMessage);
    if (!_.isNil(errorMessage)) return;
    if (isLogin) {
      login();
    } else {
      signUp();
    }
  };

  return (
    <div className="landing-container">
      <Header />
      <img
        className="h-full w-full"
        alt="logo"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg"
      />
      <div className="bg-[#000000b3] left-0 right-0 w-[30%] m-auto top-0 bottom-0 h-[580px] absolute py-12 px-16 text-white rounded">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="pb-4 font-bold mb-7 text-3xl ">
            {isLogin ? "Sign In" : "Sign Up"}
          </div>
          <div className="flex flex-col gap-5">
            {!isLogin ? (
              <input
                ref={nameRef}
                type="text"
                placeholder="Full Name"
                className="pt-3 pb-3 px-4 border border-[#5F5F5F] bg-transparent focus:outline-none rounded"
              />
            ) : null}

            <input
              ref={emailRef}
              type="text"
              placeholder="Email or mobile number"
              className="pt-3 pb-3 px-4 border border-[#5F5F5F] bg-transparent focus:outline-none rounded"
            />

            <div className="relative items-center justify-center flex">
              <input
                ref={passwordRef}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pt-3 pb-3 pl-4 pr-8 border border-[#5F5F5F] bg-transparent focus:outline-none rounded"
              />
              <button
                className="absolute right-2 "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon /> : <EyeOnIcon />}
              </button>
            </div>
          </div>
          <div className="text-red-500 text-sm mt-2">{errorMsg}</div>
          <div className="flex flex-col items-center gap-4 mt-4">
            <button
              className="rounded bg-[#e50914] text-brown-50 py-1.5  px-4 w-full"
              onClick={onSubmit}
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
            <div className="text-[#80808066]">OR</div>
            <button className="rounded py-1.5  px-4 bg-[#333333] w-full">
              Use a Sign-in code
            </button>
            {isLogin ? (
              <button className="text-base  px-4">Forgot password?</button>
            ) : null}
            {isLogin ? (
              <div className="text-[#ffffffb3]">
                New to Netflix ?
                <button
                  className="text-white underline pl-1"
                  onClick={toggleLoginStatus}
                >
                  Sign up now.
                </button>
              </div>
            ) : (
              <div className=" flex text-[#ffffffb3] items-center w-full whitespace-nowrap">
                Already registered ?
                <button
                  className="text-white underline flex w-full pl-1"
                  onClick={toggleLoginStatus}
                >
                  Sign In now...
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
