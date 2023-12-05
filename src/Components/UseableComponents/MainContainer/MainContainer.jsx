import React from 'react';

const MainContainer = ({children}) => {
    return (
        <div className='max-w-[1440px]  mx-auto my-20'>
            {children}
        </div>
    );
};

export default MainContainer;