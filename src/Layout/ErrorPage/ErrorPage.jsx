
import errorImg from '../../assets/error.svg'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={errorImg} alt="" />
            <Link to='/'>
                <button className='px-5 cursor-pointer mt-5 py-2 border-none text-white hover:bg-emerald-600 font-maven transition duration-1000 bg-cyan-700'>Back Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;