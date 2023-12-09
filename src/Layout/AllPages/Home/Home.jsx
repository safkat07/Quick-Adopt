import { Helmet, HelmetProvider } from "react-helmet-async";
import FAQsection from "../../FrontSections/FAQsection/FAQsection";
import FindPuppy from "../../FrontSections/FindPuppy/FindPuppy";
import MeetTeam from "../../FrontSections/MeetTeam/MeetTeam";
import OurBLog from "../../FrontSections/OurBLog/OurBLog";
import PetCategory from "../../FrontSections/PetCategory/PetCategory";
import Services from "../../FrontSections/Services/Services";
import WeLove from "../../FrontSections/WeLove/WeLove";
import WhyUs from "../../FrontSections/WhyUs/WhyUs";
import Banner from "../Header/Banner/Banner";
import CatsDogs from "../../FrontSections/CatsDogs/CatsDogs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainTitle from "../../../Components/UseableComponents/Title/MainTitle";
AOS.init();
const Home = () => {

    return (
        <HelmetProvider>
            <div >

                <Helmet>
                    <title>Quick Adopt | Home</title>
                </Helmet>
                {/* <Banner></Banner>
                <FindPuppy></FindPuppy> */}
                {/* <WeLove></WeLove> */}
                {/* <CatsDogs></CatsDogs> */}
                {/* <PetCategory></PetCategory> */}
                <WhyUs></WhyUs>
                {/* <OurBLog></OurBLog> */}
                {/* <MeetTeam></MeetTeam> */}
                {/* <FAQsection></FAQsection> */}
                {/* <Services></Services> */}
                {/* <MainTitle></MainTitle> */}
            </div>
        </HelmetProvider>
    );
};

export default Home;