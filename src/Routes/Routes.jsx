import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home.jsx";
import Login from "../Pages/Login/Login.jsx";
import SignUp from "../Pages/SignUp/SignUp.jsx";
import BookService from "../Pages/BookService/BookService.jsx";
import Bookings from "../Pages/Bookings/Bookings.jsx";
import PrivateRoute from "./PrivateRoutes.jsx";
import ErrorPage from "./../ErrorPage/ErrorPage";
import About from "../About/About.jsx";
import Rooms from "./../Rooms/Rooms";
import Contact from "./../Contact/Contact";
import Payment from "../payment/Payment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
        loader: () =>
          fetch("https://assingment-11-server-kappa.vercel.app/services"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "book/:id",
        element: <BookService />,
        loader: ({ params }) =>
          fetch(
            `https://assingment-11-server-kappa.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
