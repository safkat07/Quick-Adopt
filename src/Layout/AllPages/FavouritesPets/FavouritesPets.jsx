import React, { useEffect, useState } from 'react';
import UseAxiosBaseURL from '../../../Hooks/UseAxiosBaseUrl';
import UseAuth from '../../../Hooks/UseAuth';
import MainContainer from '../../../Components/UseableComponents/MainContainer/MainContainer';
import { GiCrossMark } from "react-icons/gi";
import LoadingSpinner from '../../../Components/UseableComponents/Loader/LoadingSpinner';
import MainTitle from '../../../Components/UseableComponents/Title/MainTitle';
import Swal from 'sweetalert2';

const FavouritesPets = () => {
    const baseURL = UseAxiosBaseURL()
    const { user } = UseAuth()
    const recentUserEmail = user?.email
    const [favPets, setFavPets] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await baseURL.get('/api/v1/favorites')
                const allData = response.data
                const filterData = allData?.filter(data => data.favUserEmail == recentUserEmail)
                setFavPets(filterData)
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
            finally {
                setIsLoading(false)

            }
        }
        fetchData()
    }, [recentUserEmail, baseURL])
    const handleDelete = async (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // Make a DELETE request using Axios
                    const response = await baseURL.delete(`/api/v1/favorites/${_id}`, {
                        headers: {
                            'Content-Type': 'application/json',
                            // Include any necessary headers, such as an authorization token
                        }
                    });

                    // Assuming the response contains a 'data' property
                    const responseData = response.data;

                    console.log(responseData);

                    // Check if deletion was successful based on your server response
                    if (responseData && responseData.deletedCount) {
                        console.log('Successfully deleted one document.');
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your file has been deleted.',
                            icon: 'success'
                        });
                        window.location.reload();
                    } else {
                        console.log('Deletion unsuccessful or no matching document found.');
                        Swal.fire({
                            title: 'Error!',
                            text: 'Failed to delete the file.',
                            icon: 'error'
                        });
                    }
                } catch (error) {
                    console.error('Error deleting favorite:', error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed to delete the file.',
                        icon: 'error'
                    });
                }
            }
        });
    };
    return (
        <MainContainer>

            {
                isLoading ? <div className='flex justify-center items-center h-[30vh]'>
                    <LoadingSpinner></LoadingSpinner>
                </div>
                    :
                    <div>
                        {
                            favPets.length == 0 ? <MainTitle maintitle={"Please add some pet to Favourites"}></MainTitle> :

                                <div className="overflow-x-auto font-maven">
                                    <table className="table ">
                                        {/* head */}
                                        <thead className='text-2xl'>
                                            <tr>
                                                <th>

                                                </th>
                                                <th>Pet Name</th>
                                                <th>Pet Age</th>
                                                <th>Pet Category</th>
                                                <th>Pet Gender</th>
                                                <th>Pet Owner</th>
                                                <th>Action</th>
                                                <th></th>
                                            </tr>
                                        </thead>

                                        {
                                            favPets.map(pet => <tbody>

                                                <tr key={pet._id} className='text-2xl'>
                                                    <th>
                                                        <label>
                                                            <input type="checkbox" className="checkbox" />
                                                        </label>
                                                    </th>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={pet.PetImage} alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{pet.PetName}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {pet.PetAge}

                                                    </td>
                                                    <td>{pet.PetCategory}</td>
                                                    <td>{pet.PetGender}</td>
                                                    <td>{pet.PetOwnerName}</td>
                                                    <td><button onClick={() => handleDelete(pet._id)} className='text-2xl cursor-pointer  border-none bg-red-500 text-white px-2 hover:bg-green-500 transition-all duration-500 rounded-md'>Delete Pet</button></td>


                                                </tr>

                                            </tbody>)
                                        }


                                    </table>
                                </div>
                        }
                    </div>
            }


        </MainContainer>
    );
};

export default FavouritesPets;