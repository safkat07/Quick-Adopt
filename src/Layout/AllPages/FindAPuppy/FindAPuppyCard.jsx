import React from 'react';
import MainContainer from '../../../Components/UseableComponents/MainContainer/MainContainer';

const FindAPuppyCard = ({ PetName,
    PetAge,
    PetCategory,
    PetGender,
    PetLocation,
    PetImage,
    PetShortDescription,
    PetOwnerName,
    PetOwnerEmail, }) => {
    return (
        <MainContainer>
            <div className='w-96 h-96 text-center text-2xl bg-[#EBF1EE]'>
                <img className='w-1/2 mx-auto' src={PetImage} alt="" />
                <p>Name: {PetName}</p>
                <p>Age: {PetAge}</p>
                <p>Gender: {PetGender}</p>
                <p>Category: {PetCategory}</p>
                <p>Owner: {PetOwnerName}</p>
            </div>
        </MainContainer>
    );
};

export default FindAPuppyCard;