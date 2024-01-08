import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MainTitle from '../../../../Components/UseableComponents/Title/MainTitle';
import UseAuth from '../../../../Hooks/UseAuth';
import UseAxiosBaseURL from '../../../../Hooks/UseAxiosBaseUrl';
import Swal from 'sweetalert2';

const UpdatePet = () => {
    const loaderData = useLoaderData()
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
    } = loaderData
    const { user } = UseAuth()
    const [loading, SetLoading] = useState(true)
    const baseURL = UseAxiosBaseURL()
    const recentOwnerEmail = user?.email
    const recentOwnerName = user?.displayName

    //update the pet information
    const handleUpdateForm = async (e) => {
        e.preventDefault()
        const form = e.target
        const PetName = form.petName.value
        const PetAge = form.petAge.value
        const PetLocation = form.petLocation.value
        const PetCategory = form.petCategory.value
        const PetShortDescription = form.petShortDescription.value
        const PetGender = form.petGender.value
        const updatePet = {
            PetName,
            PetAge,
            PetCategory,
            PetGender,
            PetImage,
            PetStatus: 'Not Adapted',
            PetLocation,
            PetShortDescription,
            PetOwnerName,
            PetOwnerEmail,
        }
        // console.log(updatePet);

        baseURL.put(`/api/v1/allpets/${_id}`, updatePet)
            .then(res => {
                console.log('data send succes', res.data);
                const fn = res.data
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Pet Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <section>
            <MainTitle maintitle={"Update Your  Pet"}></MainTitle>
            <div className='flex  justify-center my-5 '>
                <img className=' w-1/6  ' src={PetImage} alt="" />
            </div>
            <form onSubmit={handleUpdateForm} className='max-w-6xl mx-auto'>
                {/* 1st column */}
                <div className='flex justify-center gap-x-8 items-center   w-3/4 mx-auto '>
                    <div className='w-1/2'>
                        <p className='text-xl font-maven'>Enter Your Pet Name</p>
                        <input defaultValue={PetName} name='petName' className=' py-3 0  rounded-lg text-center border-none mx-auto w-full' type="text" placeholder='pet name' />
                    </div>
                    <div className='w-1/2'>
                        <p className='text-xl font-maven'>Pet Owner name</p>
                        <input disabled defaultValue={recentOwnerName} className=' py-3 0 cursor-not-allowed  rounded-lg text-center  border mx-auto w-full' type="text" placeholder='pet name' />
                    </div>

                </div>
                <div className='flex my-5 justify-center gap-x-8 items-center   w-3/4 mx-auto '>

                    <div className='w-1/2'>
                        <p className='text-xl font-maven'>Enter Your Pet Category</p>

                        <select defaultValue={PetCategory} className=' py-3 rounded-lg border-none text-center mx-auto w-full' type="text" name="petCategory">
                            <option className='text-xl' value="Dog">Dog</option>
                            <option className='text-xl' value="Cat">Cat</option>
                            <option className='text-xl' value="Fish">Fish</option>
                            <option className='text-xl' value="Bird">Bird</option>
                            <option className='text-xl' value="Hamster">Hamster</option>
                            <option className='text-xl' value="Reptile">Reptile</option>
                            <option className='text-xl' value="Guinea Pig">Guinea Pig</option>
                            <option className='text-xl' value="Turtle">Turtle</option>
                            <option className='text-xl' value="Horse">Horse</option>
                            <option className='text-xl' value="Ferret">Ferret</option>
                            <option className='text-xl' value="Spider">Spider</option>
                            <option className='text-xl' value="Pig">Pig</option>
                            <option className='text-xl' value="Chinchill">Chinchill</option>

                        </select>
                    </div>
                    <div className='w-1/2'>
                        <p className='text-xl font-maven'>Enter Your Pet Gender</p>

                        <select defaultValue={PetGender} className=' py-3 rounded-lg border-none text-center mx-auto w-full' type="text" name="petGender">
                            <option className='text-xl' value="Male">Male</option>
                            <option className='text-xl' value="Female">Female</option>


                        </select>
                    </div>
                </div>
                <div className='flex justify-center my-5 gap-x-8 items-center   w-3/4 mx-auto '>
                    <div className='w-1/2'>
                        <p className='text-xl font-maven'>Enter Your Pet Age</p>
                        <input defaultValue={PetAge} name='petAge' className=' py-3 rounded-lg text-center border-none mx-auto w-full' type="text" placeholder='pet age' />
                    </div>
                    <div className='w-1/2'>
                        <p className='text-xl font-maven'>Enter Your Pet Location</p>
                        <input defaultValue={PetLocation} name='petLocation' className=' py-3 rounded-lg border-none text-center mx-auto w-full' type="text" placeholder='pet location' />
                    </div>

                </div>
                <div className='flex justify-center w-full '>
                    {/* <div className='w-3/4'>
                        <p className='text-xl font-maven'>Enter Your Pet Age</p>
                        <input name='petImage' className=' py-3 bg-cyan-600 text-black rounded-lg text-center border-none w-[95%] px-6' type="file" placeholder='pet age' />
                    </div> */}
                    {/* <div className='w-3/4'>
                        <p className='text-xl font-maven'>Enter Your Pet Image Link</p>
                        <input defaultValue={PetImage} onChange={(e) => setImage(e.target.files[0])} name='petImage' className=' py-3 rounded-lg border cursor-pointer text-center mx-auto w-full' type="file" placeholder='pet image link' />
                    </div> */}
                </div>
                <div className='flex  my-5 justify-center w-full '>
                    {/* <div className='w-3/4'>
                        <p className='text-xl font-maven'>Enter Your Pet Age</p>
                        <input name='petImage' className=' py-3 bg-cyan-600 text-black rounded-lg text-center border-none w-[95%] px-6' type="file" placeholder='pet age' />
                    </div> */}
                    <div className='w-3/4'>
                        <p className='text-xl  font-maven'>Enter Your Pet Short Description</p>

                        <textarea defaultValue={PetShortDescription} name="petShortDescription" id="" className=' py-3 rounded-lg border-none text-center mx-auto w-full' cols="20" rows="10"></textarea>
                    </div>
                </div>
                <div className='flex justify-center my-5 gap-x-8 items-center   w-3/4 mx-auto '>
                    <div className='w-full'>
                        <button className='  rounded-lg text-white bg-red-400 border-none text-center mx-auto w-full'>
                            <input className=' py-3 cursor-pointer rounded-lg text-white bg-red-400 border-none text-center mx-auto w-full' type="submit" />
                        </button>

                    </div>

                </div>
            </form>
        </section>
    );
};

export default UpdatePet;