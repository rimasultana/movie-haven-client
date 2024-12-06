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
        element: <AddMovie />,
      },
      {
        path: "/fav-movie",
        element: <FavMovie />,
      },
      {
        path: "/all-movie",
        element: <Movies />,
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
        element: <MovieDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/movie/${params.id}`),
      },
    ],
  },
]);

export default router;
