import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const AllRoutes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
    private: false,
  },
  {
    name: "Signup",
    path: "/register",
    component: <Signup />,
    private: false,
  },
  {
    name: "Login",
    path: "/login",
    component: <Login />,
    private: false,
  },
];

export default AllRoutes;
