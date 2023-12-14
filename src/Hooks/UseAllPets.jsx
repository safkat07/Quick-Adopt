import { useEffect, useState } from "react";
import UseAxiosBaseURL from "./UseAxiosBaseUrl";


const UseAllPets = () => {
    const baseURL = UseAxiosBaseURL()
    const [allPets, setAllPets] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        baseURL.get('api/v1/allpets')
            .then(data => {
                setAllPets(data.data)
                setIsLoading(false)
            })
    }, [])
    return [allPets, isLoading]
};

export default UseAllPets;