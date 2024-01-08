import React, { useEffect, useState } from 'react';
import UseAuth from '../../../../Hooks/UseAuth';
import UseAxiosBaseURL from '../../../../Hooks/UseAxiosBaseUrl';
import MainTitle from '../../../../Components/UseableComponents/Title/MainTitle';
import LoadingSpinner from '../../../../Components/UseableComponents/Loader/LoadingSpinner';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const AddedPets = () => {
    const { user } = UseAuth()
    const recentUserName = user?.displayName
    const recentUserEmail = user?.email
    const baseURL = UseAxiosBaseURL()
    const [isLoading, setIsLoading] = useState(true)
    const [myAllPets, setMyAllPets] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await baseURL.get(`/api/v1/allpets?PetOwnerEmail=${recentUserEmail}`)
                const data = response.data
                setMyAllPets(data)
            }
            catch (error) {
                console.error(error)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [recentUserName, baseURL])

    //delete a pet
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
                    const response = await baseURL.delete(`/api/v1/allpets/${_id}`, {
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
    //update the pet
    const handleUpdatePet = (_id) => {
        console.log(_id);
    }
    return (
        <section>
            <MainTitle maintitle={"Pet Added by You"}></MainTitle>
            <div>
                {
                    isLoading ? <div className='flex justify-center items-center h-[80vh]'>
                        <LoadingSpinner></LoadingSpinner>
                    </div>
                        :
                        <div>
                            {
                                myAllPets?.length == 0 ? <MainTitle maintitle={"Please add some pet to Favourites"}></MainTitle>
                                    :
                                    <div className="overflow-x-auto font-maven">
                                        <table className="table ">

                                            <thead className='text-2xl'>
                                                <tr>
                                                    <th>

                                                    </th>
                                                    <th>Pet Name</th>
                                                    <th>Pet Age</th>
                                                    <th>Pet Category</th>
                                                    <th>Pet Gender</th>
                                                    <th>Pet Owner</th>
                                                    <th>Delete Pet</th>
                                                    <th>Update Pet</th>
                                                    <th></th>
                                                </tr>
                                            </thead>

                                            {
                                                myAllPets.map(pet => <tbody>

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
                                                        <td><button onClick={() => handleDelete(pet._id)} className='text-2xl cursor-pointer  border-none bg-red-500 text-white py-1 hover:py-2 px-2 hover:bg-green-500 transition-all duration-500 rounded-md'>Delete</button></td>
                                                        <td><Link to={`/dashboard/updatepet/${pet._id}`} className='text-2xl no-underline cursor-pointer  border-none bg-green-500 text-white px-2 hover:bg-red-500 transition-all duration-500 py-1 hover:py-2 rounded-md'>Update</Link></td>


                                                    </tr>
                                                </tbody>)
                                            }


                                        </table>
                                    </div>
                            }
                        </div>
                }
            </div>
        </section>
    );
};

export default AddedPets;