import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import LoadingSpinner from '../../UseableComponents/Loader/LoadingSpinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = UseAuth()
    const location = useLocation()


    if (loading) {
        return (
            <div className='flex justify-center  h-[80vh]'>
                <LoadingSpinner></LoadingSpinner>
            </div>
        )
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;