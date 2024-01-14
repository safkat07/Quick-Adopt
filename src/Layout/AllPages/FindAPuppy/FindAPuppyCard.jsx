import React from 'react';
import MainContainer from '../../../Components/UseableComponents/MainContainer/MainContainer';
import { IoLocationSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAuth from '../../../Hooks/UseAuth';
import UseAxiosBaseURL from '../../../Hooks/UseAxiosBaseUrl';

const FindAPuppyCard = ({ PetName,
    PetAge,
    PetCategory,
    PetGender,
    PetLocation,
    PetStatus,
    PetImage,
    _id,
    PetShortDescription,
    PetOwnerName,
    PetOwnerEmail, }) => {
    const { user } = UseAuth()
    const baseURL = UseAxiosBaseURL()
    const favUserEmail = user?.email
    const favntUserName = user?.displayName
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
            PetStatus,
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
            console.error('Error:', error);

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
            <div className='w-[500px] rounded-xl font-maven h-[600px] bg-[#EBF1EE]'>
                <div className='relative h-1/2'>
                    <img className='w-full h-[95%]  rounded-t-xl' src={PetImage} alt="" />
                    {
                        PetStatus == "Adopted" && <div className='absolute ml-2 mt-2 px-3 rounded-md font-semibold bg-yellow-300 text-3xl top-0'>
                            {PetStatus}
                        </div> 
                        
                    }
                </div>
                <div className='w-11/12 mx-auto'>
                    <p className='text-white text-xl bg-gray-500 w-1/6 text-center rounded-xl'>{PetCategory}</p>
                    <p className='font-maven text-3xl mt-2 uppercase'>{PetName}</p>
                    <div className='flex text-2xl gap-2 w-full justify-start items-center'>
                        <IoLocationSharp></IoLocationSharp>
                        <p className='font-maven text-2xl '>{PetLocation}</p>
                    </div>
                    <div className='flex text-xl mt-2 justify-between'>
                        <p><span className='font-black'>Gender:</span>{PetGender}</p>
                        <p><span className='font-black'>Age:</span>{PetAge}</p>
                    </div>
                    <div className='flex text-xl mt-2 justify-between'>
                        <p><span className='font-black'>Status:</span>{PetStatus}</p>
                        <p><span className='font-black'>Pet Owner:</span>{PetOwnerName}</p>
                    </div>
                    <div className='flex justify-between items-center mt-5'>
                        <div>
                            <button onClick={handleAddtoFavourite} className='border-none cursor-pointer text-white transition-all duration-500 hover:px-3 rounded-lg flex items-center text-center font-maven text-xl px-2 bg-[#F39C12]'><FaHeart></FaHeart>Add to Favorite</button>
                        </div>
                        <div>
                            <Link to={`/petdetails/${_id}`} className='border-none no-underline text-white transition-all duration-500 hover:px-3  flex items-center rounded-lg text-center font-maven text-xl px-2 bg-[#3498db]'><TbListDetails></TbListDetails>View Pet Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default FindAPuppyCard;