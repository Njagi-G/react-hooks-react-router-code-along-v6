import Home from "./pages/Home";
//Step 4: Import About and Login pages
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile/:id",
    element: <UserProfile />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
