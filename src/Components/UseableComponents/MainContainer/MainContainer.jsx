import React from 'react';

const MainContainer = ({children}) => {
    return (
        <div className='max-w-[1380px]  mx-auto my-20'>
            {children}
        </div>
    );
};

export default MainContainer