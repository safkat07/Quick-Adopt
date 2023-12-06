import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import Home from "../Layout/AllPages/Home/Home";
import SeeAllPets from "../Layout/FrontSections/PetCategory/SeeAllPets/SeeAllPets";
import SinglePetCategory from "../Layout/FrontSections/PetCategory/SinglePetCategory/SinglePetCategory";


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
        },
        {
          path: '/singlepetcategory/:id',
          element: <SinglePetCategory></SinglePetCategory>,
          loader: ({params}) => fetch(`http://localhost:5000/api/v1/allpetcategory/${params.id}`)
        }
      ]
    },
  ]);

  export default router