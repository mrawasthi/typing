import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register"; 
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chats",
    element: <Chat/>,
  },
  {
    path: "/chats",
    element: <Chat/>,
  },
]);
