import { useState } from "react";
import MainContainer from "../../../../Components/UseableComponents/MainContainer/MainContainer";
import UseAxiosBaseURL from "../../../../Hooks/UseAxiosBaseUrl";
import UseCategory from "../../../../Hooks/UseCategory";
import LoadingSpinner from "../../../../Components/UseableComponents/Loader/LoadingSpinner";
import PetCategoryCard from "../PetCategoryCard";


const SeeAllPets = () => {
    const [categories, isLoading] = UseCategory()
    return (
        <MainContainer>
            <h2 className="text-5xl font-maven underline font-medium text-center">Collection Of Our All Pets</h2>
            <div>
                {
                    isLoading ? <div className="flex justify-center h-screen items-center">
                        <LoadingSpinner></LoadingSpinner>
                    </div>
                        :
                        <div className="grid grid-cols-4 justify-center items-center  pt-16 space-y-10">
                            {
                                categories.map(category => <PetCategoryCard key={category._id} {...category} ></PetCategoryCard>)
                            }
                        </div>
                }
            </div>
        </MainContainer>
    );
};

export default SeeAllPets;