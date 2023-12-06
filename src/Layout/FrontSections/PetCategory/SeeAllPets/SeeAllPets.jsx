import { useState } from "react";
import MainContainer from "../../../../Components/UseableComponents/MainContainer/MainContainer";
import UseAxiosBaseURL from "../../../../Hooks/UseAxiosBaseUrl";


const SeeAllPets = () => {
    const baseUrl = UseAxiosBaseURL()
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    baseUrl.get('api/v1/allpetcategory')
        .then(data => {
            setCategories(data.data)
        })
    return (
        <MainContainer>
            <h2 className="text-5xl font-maven underline font-medium text-center">Collection Of Our All Pets</h2>
            <div>

            </div>
        </MainContainer>
    );
};

export default SeeAllPets;