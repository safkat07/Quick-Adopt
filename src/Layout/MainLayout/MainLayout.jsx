
import { Outlet } from 'react-router-dom';
import Navbar from '../AllPages/Header/Navbar/Navbar';
import Footer from '../AllPages/Footer/Footer';

const MainLayout = () => {
    return (
        <section>
            <Navbar></Navbar>
            <div className='min-h-[50vh]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default MainLayout;