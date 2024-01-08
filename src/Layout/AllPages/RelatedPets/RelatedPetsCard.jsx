import React from 'react';

const RelatedPetsCard = (
    { PetName,
        PetAge,
        PetCategory,
        PetGender,
        PetLocation,
        PetStatus,
        PetImage,
        _id,
        PetShortDescription,
        PetOwnerName,
        PetOwnerEmail, }
) => {
    return (
        <div>
            {PetName}
        </div>
    );
};

export default RelatedPetsCard;