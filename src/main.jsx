// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NewPost from "./pages/NewPost.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/homepage",
        element: <HomePage />,
        // http://localhost:5173/homepage
      },
      {
        path: "/newpost",
        element: <NewPost />,
        // http://localhost:5173/newpost
      },
    ],
  },
  {
    path: "/signup",
    element: <SignupPage />,
    //http://localhost:5173/signup
  },
  {
    path: "/login",
    element: <LoginPage />,
    // http://localhost:5173/login
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
