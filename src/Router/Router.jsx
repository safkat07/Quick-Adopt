import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import Home from "../Layout/AllPages/Home/Home";
import SeeAllPets from "../Layout/FrontSections/PetCategory/SeeAllPets/SeeAllPets";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/seeallpets',
          element: <SeeAllPets></SeeAllPets>
        }
      ]
    },
  ]);

  export default router