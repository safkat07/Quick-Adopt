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
import Dashboard from "../Layout/AllPages/Dashboard/Dashboard";
import AddNewPet from "../Layout/AllPages/Dashboard/AddNewPet/AddNewPet";
import AddedPets from "../Layout/AllPages/Dashboard/AddedPets/AddedPets";
import ShowMyAddedPets from "../Layout/AllPages/Dashboard/ShowMyAddedPets/ShowMyAddedPets";
import FindAPuppy from "../Layout/AllPages/FindAPuppy/FindAPuppy";
import Stories from "../Layout/AllPages/Stories/Stories";
import AddSuccesStories from "../Layout/AllPages/Dashboard/AddSuccesStories/AddSuccesStories";


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
          loader: ({params}) => fetch(`https://quick-adopt-server-side.vercel.app/api/v1/allpetcategory/${params.id}`)
        },
        {
          path: '/findapuppy',
          element: <FindAPuppy></FindAPuppy>
        },
        {
          path: '/stories',
          element: <Stories></Stories>
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
    },{
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: '/dashboard/addnewpet',
          element: <AddNewPet></AddNewPet>
        },
        {
          path: '/dashboard/addedpets',
          element: <AddedPets></AddedPets>
        },
        {
          path: '/dashboard/myaddedpets',
          element: <ShowMyAddedPets></ShowMyAddedPets>
        },
        {
          path: '/dashboard/successtories',
          element: <AddSuccesStories></AddSuccesStories>

        }
      ]
    }
  ]);

  export default router