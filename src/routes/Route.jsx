import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AddMovie from "../pages/AddMovie";
import FavMovie from "../pages/FavMovie";
import Movies from "../pages/Movies";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetails from "../pages/MovieDeteils";
import PrivateRoute from "./PraivetRoute";
import UpdateMovie from "../pages/UpdateMovie";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-movie",
        element: (
          <PrivateRoute>
            <AddMovie />,
          </PrivateRoute>
        ),
      },
      {
        path: "/fav-movie",
        element: (
          <PrivateRoute>
            <FavMovie />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-movie",
        element: <Movies />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/movieDetails/:id",
        element: (
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b10-a10-server-side-rimasultana.vercel.app/movie/${params.id}`
          ),
      },
      {
        path: "/updateMovie/:id",
        element: <UpdateMovie />,
      },
    ],
  },
]);

export default router;
