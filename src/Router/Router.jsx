import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import Home from "../Layout/AllPages/Home/Home";
import SeeAllPets from "../Layout/FrontSections/PetCategory/SeeAllPets/SeeAllPets";
import SinglePetCategory from "../Layout/FrontSections/PetCategory/SinglePetCategory/SinglePetCategory";
import Login from "../Layout/Authentication/Login/Login";
import Register from "../Layout/Authentication/Registration/Register";


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
    {
      path:'/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    }
  ]);

  export default router