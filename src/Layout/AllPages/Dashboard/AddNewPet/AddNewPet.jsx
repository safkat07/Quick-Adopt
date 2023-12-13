import React from 'react';
import MainTitle from '../../../../Components/UseableComponents/Title/MainTitle';

const AddNewPet = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const PetName = form.petName.value
        const PetAge = form.petAge.value
        const PetLocation = form.petLocation.value
        const PetCategory = form.petCategory.value
        const newPet = {
            PetName,
            PetAge,
            PetLocation,
            PetCategory
        }
        console.log(newPet);
    }
    return (
        <section>
            <MainTitle maintitle={"Add Your New Pet"}></MainTitle>
            <form onSubmit={handleFormSubmit} className='max-w-6xl mx-auto'>
                {/* 1st column */}
                <div className='flex justify-center gap-x-8 items-center   w-3/4 mx-auto '>
                    <div className='w-1/2'>
                        <p className='text-xl font-maven'>Enter Your Pet Name</p>
                        <input name='petName' className=' py-3 0  rounded-lg text-center border-none mx-auto w-full' type="text" placeholder='pet name' />
                    </div>
                    <div className='w-1/2'>
                        <p className='text-xl font-maven'>Enter Your Pet Category</p>

                        <select className=' py-3 rounded-lg border-none text-center mx-auto w-full' type="text" name="petCategory">
                            <option className='text-xl' value="dog">Dog</option>
                            <option className='text-xl' value="cat">Cat</option>
                            <option className='text-xl' value="fish">Fish</option>
                            <option className='text-xl' value="bird">Bird</option>
                            <option className='text-xl' value="hamster">Hamster</option>
                            <option className='text-xl' value="reptile">Reptile</option>
                            <option className='text-xl' value="guinea pig">Guinea Pig</option>
                            <option className='text-xl' value="turtle">Turtle</option>
                            <option className='text-xl' value="horse">Horse</option>
                            <option className='text-xl' value="ferret">Ferret</option>
                            <option className='text-xl' value="spider">Spider</option>
                            <option className='text-xl' value="pig">Pig</option>
                            <option className='text-xl' value="chinchill">Chinchill</option>

                        </select>
                    </div>
                </div>
                <div className='flex justify-center my-5 gap-x-8 items-center   w-3/4 mx-auto '>
                    <div className='w-1/2'>
                        <p className='text-xl font-maven'>Enter Your Pet Age</p>
                        <input name='petAge' className=' py-3 rounded-lg text-center border-none mx-auto w-full' type="text" placeholder='pet age' />
                    </div>
                    <div className='w-1/2'>
                        <p className='text-xl font-maven'>Enter Your Pet Location</p>
                        <input name='petLocation' className=' py-3 rounded-lg border-none text-center mx-auto w-full' type="text" placeholder='pet location' />
                    </div>

                </div>
                <div className='flex justify-center w-full '>
                    <div className='w-3/4'>
                        <p className='text-xl font-maven'>Enter Your Pet Age</p>
                        <input className=' py-3 bg-cyan-600 text-black rounded-lg text-center border-none w-[95%] px-6' type="file" placeholder='pet age' />
                    </div>
                </div>
                <div className='flex justify-center my-5 gap-x-8 items-center   w-3/4 mx-auto '>
                    <div className='w-full'>
                        <button className='  rounded-lg text-white bg-red-400 border-none text-center mx-auto w-full'>
                            <input className=' py-3 cursor-pointer rounded-lg text-white bg-red-400 border-none text-center mx-auto w-full' type="submit" placeholder='pet location' />
                        </button>

                    </div>

                </div>
            </form>
        </section>
    );
};

export default AddNewPet;