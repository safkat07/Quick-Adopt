import React, { useEffect, useState } from 'react';
import UseAxiosBaseURL from './UseAxiosBaseUrl';

const UseCategory = () => {
    const Axiosbaseurl = UseAxiosBaseURL()
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        Axiosbaseurl.get('api/v1/allpetcategory')
        .then(data => {
            setCategories(data.data)
            setIsLoading(false)
        })
    }, [Axiosbaseurl, categories])
    return [categories, isLoading]
};

export default UseCategory;