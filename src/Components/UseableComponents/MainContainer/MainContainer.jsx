import React from 'react';

const MainContainer = ({children}) => {
    return (
        <div className='max-w-[1380px]  mx-auto lg:my-10 my-5'>
            {children}
        </div>
    );
};

export default MainContainer