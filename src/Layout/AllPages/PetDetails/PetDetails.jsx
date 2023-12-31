import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MainContainer from '../../../Components/UseableComponents/MainContainer/MainContainer';
import { IoLocationSharp } from 'react-icons/io5';
import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import RelatedPets from '../RelatedPets/RelatedPets';
import UseAuth from '../../../Hooks/UseAuth';
import UseAxiosBaseURL from '../../../Hooks/UseAxiosBaseUrl';
import Swal from 'sweetalert2';

const PetDetails = () => {
    const { user } = UseAuth()
    const favUserEmail = user?.email
    const favntUserName = user?.displayName
    // console.log(recentUserEmail, recentUserName);
    const baseURL = UseAxiosBaseURL()
    const petData = useLoaderData()
    const {
        PetName,
        PetAge,
        PetCategory,
        PetGender,
        PetLocation,
        PetStatus,
        PetImage,
        _id,
        PetShortDescription,
        PetOwnerName,
        PetOwnerEmail,
    } = petData
    const handleAddtoFavourite = async () => {
        // console.log('hi re brooo')
        const favoritePets = {
            PetName,
            PetAge,
            PetCategory,
            PetGender,
            PetImage,
            PetLocation,
            PetOwnerName,
            PetOwnerEmail,
            favUserEmail,
            favntUserName
        }
        try {
            const res = await baseURL.post('/api/v1/favorites', favoritePets);
            console.log('data send success', res.data);

            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Added To Favorite Collection",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            // Handle the error
            console.error('Error:', error);

            // You can also show an error message to the user using Swal or another UI component
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "An error occurred",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
    return (
        <MainContainer>
            <div className='flex font-maven justify-between     '>
                <div className='w-1/2'>
                    <div>
                        <p className='text-white text-xl bg-gray-500 w-1/6 text-center rounded-xl'>{PetCategory}</p>
                        <p className='text-3xl mt-3'>{PetName} Puppy Available for free Adaption</p>
                        <div className='flex  text-xl mt-3 gap-2 w-full justify-start items-center'>
                            <IoLocationSharp></IoLocationSharp>
                            <p className='font-maven text-xl '>{PetLocation}</p>
                        </div>
                        <div className='flex mt-5 mb-3 justify-between'>
                            <p className=' text-2xl underline'>Details</p>
                            <button onClick={handleAddtoFavourite} className=' text-2xl cursor-pointer flex items-center bg-transparent border-none'><FaRegHeart></FaRegHeart>Add to Favorites</button>
                        </div>
                        <img className='w-full mt-2 h-full' src={PetImage} alt="" />
                        <div className='flex text-xl mt-2 justify-between'>
                            <p><span className='font-black'>Gender:</span>{PetGender}</p>
                            <p><span className='font-black'>Age:</span>{PetAge}</p>
                        </div>
                        <div className='flex text-xl mt-2 justify-between'>
                            <p><span className='font-black'>Status:</span>{PetStatus}</p>
                            <p><span className='font-black'>Pet Owner:</span>{PetOwnerName}</p>
                        </div>
                    </div>

                </div>
                <div className='font-maven'>
                    <div className='bg-zinc-300 text-3xl font-semibold rounded-lg text-center w-80 h-10'>
                        {PetCategory}
                    </div>
                    <button className='bg-zinc-300 mt-7 cursor-pointer border-none text-2xl flex justify-center items-center font-semibold rounded-lg text-center w-80 h-12'>
                        Request To Adopt
                    </button>
                    <div className='mt-10'>
                        <div className='w-80 h-64 shadow-xl border-4 bg-stone-200 rounded-md border-[#FDFDFE]'>
                            <div className='flex  flex-col justify-center items-center h-3/4 text-9xl'>
                                <FaRegUserCircle></FaRegUserCircle>
                                <Link to='/userprofile' state={{ PetOwnerName: PetOwnerName }} className='no-underline'>
                                    <p className='text-3xl'>{PetOwnerName}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <p className='font-maven text-4xl font-semibold underline'>Related Pets</p>
                <RelatedPets PetCategory={PetCategory}></RelatedPets>
            </div>
        </MainContainer>
    );
};

export default PetDetails;