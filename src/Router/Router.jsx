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
import PetDetails from "../Layout/AllPages/PetDetails/PetDetails";
import UserProfile from "../Layout/AllPages/UserProfile/UserProfile";
import FavouritesPets from "../Layout/AllPages/FavouritesPets/FavouritesPets";
import UpdatePet from "../Layout/AllPages/Dashboard/UpdatePet/UpdatePet";
import PrivateRoute from "../Components/Providers/PrivateRoute/PrivateRoute";


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
        // path: '/singlepetcategory/:id',
        path: '/singlepetcategory',
        element: <SinglePetCategory></SinglePetCategory>,
        // loader: ({params}) => fetch(`http://localhost:5000/api/v1/allpetcategory/${params.id}`)
      },
      {
        path: '/petdetails/:id',
        element: <PrivateRoute>
          <PetDetails></PetDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/api/v1/allpets/${params.id}`)
      },
      {
        path: '/findapuppy',
        element: <FindAPuppy></FindAPuppy>
      },
      {
        path: '/stories',
        element: <Stories></Stories>
      },
      {
        path: '/favourites',
        element: <FavouritesPets></FavouritesPets>
      },
      {
        path: '/userprofile',
        element: <UserProfile></UserProfile>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }, {
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

      },
      {
        path: '/dashboard/updatepet/:id',
        element: <UpdatePet></UpdatePet>,
        loader: ({ params }) => fetch(`http://localhost:5000/api/v1/allpets/${params.id}`)

      }
    ]
  }
]);

export default router