import React, { useEffect, useState } from 'react';
import UseAxiosBaseURL from '../../../../Hooks/UseAxiosBaseUrl';
import UseAuth from '../../../../Hooks/UseAuth';
import MainTitle from '../../../../Components/UseableComponents/Title/MainTitle';
import LoadingSpinner from '../../../../Components/UseableComponents/Loader/LoadingSpinner';
import { Link } from 'react-router-dom';

const RequestedPets = () => {
    const { user } = UseAuth()
    const recentUserName = user?.displayName
    const recentUserEmail = user?.email
    const baseURL = UseAxiosBaseURL()
    const [isLoading, setIsLoading] = useState(true)
    const [requestedPet, setRequestedPet] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await baseURL.get(`/api/v1/allpets?PetOwnerEmail=${recentUserEmail}`)
                const data = response.data
                const request = data.filter(req => req.PetStatus == "Requested")
                setRequestedPet(request)
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
    return (
        <section>
            <MainTitle maintitle={"Pet Adaption Request"}></MainTitle>
            <div>
                {
                    isLoading ? <div className='flex justify-center items-center h-[80vh]'>
                        <LoadingSpinner></LoadingSpinner>
                    </div>
                        :
                        <div>
                            {
                                requestedPet?.length == 0 ? <MainTitle maintitle={"Please add some pet to Favourites"}></MainTitle>
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
                                                    <th>Pet Status</th>
                                                    
                                                    <th></th>
                                                </tr>
                                            </thead>

                                            {
                                                requestedPet.map(pet => <tbody>

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
                                                        <td>{pet.PetStatus}</td>
                                                        <td><button  className='text-2xl cursor-pointer  border-none bg-red-500 text-white py-1 hover:py-2 px-2 hover:bg-green-500 transition-all duration-500 rounded-md'>Accept</button></td>
                                                        <td><Link  className='text-2xl no-underline cursor-pointer  border-none bg-green-500 text-white px-2 hover:bg-red-500 transition-all duration-500 py-1 hover:py-2 rounded-md'>Decline</Link></td>


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

export default RequestedPets;