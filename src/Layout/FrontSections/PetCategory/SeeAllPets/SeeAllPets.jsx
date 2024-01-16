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
            <h2 className="md:text-5xl text-2xl font-maven underline font-medium text-center">Collection Of Our All Pets</h2>
            <div>
                {
                    isLoading ? <div className="flex justify-center h-[50vh] items-center">
                        <LoadingSpinner></LoadingSpinner>
                    </div>
                        :
                        <div className="xl:grid flex flex-row flex-wrap gap-8 xl:grid-cols-4 justify-center items-center  pt-16  md:space-y-10">
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