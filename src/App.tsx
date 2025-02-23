import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Browse from "./pages/Browse";
import Login from "./pages/Login";
import NotFoundPage from "./common/NotFoundPage";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
