import React, { useEffect, useState } from 'react';
import UseAxiosBaseURL from './UseAxiosBaseUrl';
import UseAuth from './UseAuth';

const UseUserRequest = () => {
    const baseURL = UseAxiosBaseURL()
    const { user } = UseAuth()
    const recentUserEmail = user?.email
    const [userReq, setuserReq] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await baseURL.get(`/api/v1/allreqpets?Requestby=${recentUserEmail}`)
                const data = response.data
                const request = data.filter(req => req.PetStatus == "Requested")
                setuserReq(request)
            }
            catch (error) {
                console.error(error)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    },)
    return [userReq, isLoading]
};

export default UseUserRequest;