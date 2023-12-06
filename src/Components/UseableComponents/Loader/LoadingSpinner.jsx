import {  Grid } from 'react-loader-spinner'
const LoadingSpinner = () => {
    return (
        <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    );
};

export default LoadingSpinner;