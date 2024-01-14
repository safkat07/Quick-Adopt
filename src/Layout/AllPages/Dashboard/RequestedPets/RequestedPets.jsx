import React, { useEffect, useState } from 'react';
import UseAxiosBaseURL from '../../../../Hooks/UseAxiosBaseUrl';
import UseAuth from '../../../../Hooks/UseAuth';
import MainTitle from '../../../../Components/UseableComponents/Title/MainTitle';
import LoadingSpinner from '../../../../Components/UseableComponents/Loader/LoadingSpinner';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseRequestedPets from '../../../../Hooks/UseRequestedPets';

const RequestedPets = () => {
    const { user } = UseAuth()
    const recentUserName = user?.displayName
    const recentUserEmail = user?.email
    const baseURL = UseAxiosBaseURL()
    const [allRequestedPets, isLoading] = UseRequestedPets()
    //accpet adaption request
    const handleAccept = (_id) => {
        // console.log("accept ", _id);
        const updatePetStatus = {
            PetStatus: "Adopted",
        }
        baseURL.patch(`/api/v1/allpets/${_id}`, updatePetStatus)
            .then(res => {
                console.log('data updateRequest succes', res.data);
                const fn = res.data
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Adaption Requested Accepted Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    //decline adaption request
    const handleDecline = (_id) => {
        const updatePetStatus = {
            PetStatus: "Not Adopted",
        }
        baseURL.patch(`/api/v1/allpets/${_id}`, updatePetStatus)
            .then(res => {
                console.log('data updateRequest succes', res.data);
                const fn = res.data
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Adaption Requested Declined Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
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
                                allRequestedPets?.length == 0 ? <MainTitle maintitle={"No Request Found"}></MainTitle>
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
                                                allRequestedPets.map(pet => <tbody>

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
                                                        <td><button onClick={() => handleAccept(pet._id)} className='text-2xl cursor-pointer  border-none bg-red-500 text-white py-1 hover:py-2 px-2 hover:bg-green-500 transition-all duration-500 rounded-md'>Accept</button></td>
                                                        <td><button onClick={() => handleDecline(pet._id)} className='text-2xl no-underline cursor-pointer  border-none bg-green-500 text-white px-2 hover:bg-red-500 transition-all duration-500 py-1 hover:py-2 rounded-md'>Decline</button></td>


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