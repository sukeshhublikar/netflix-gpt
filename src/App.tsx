import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Browse from "./pages/Browse";
import Login from "./pages/Login";
import NotFoundPage from "./common/NotFoundPage";
import Error from "./pages/Error";

// import { useDispatch } from "react-redux";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./utils/firebase";
// import { addUser, removeUser } from "./store/userSlice";
// import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  // {
  //   path: "/error",
  //   element: <Error />,
  // },
  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  // },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
