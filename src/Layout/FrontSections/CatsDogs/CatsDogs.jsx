import MainTitle from '../../../Components/UseableComponents/Title/MainTitle';
import img from '../../../assets/dogs-cats-img.png'
import { motion } from 'framer-motion';
const CatsDogs = () => {
    return (
        <div className='mt-20 bg-white'>
            <div>
                <MainTitle maintitle={"We Love All Pets"}></MainTitle>
                <motion.p
                // animate={{color: '#ff2', x:100, y:-100,}}
                className='md:max-w-7xl  max-w-sm font-maven  md:text-2xl text-xl pt-2 pb-8 mx-auto text-center '>Be it a fluffy bunny, a giant hound or a hairy tarantula, you name it! Fizgig introduces a first-of-its-kind, all-inclusive pet sitting app that matches your pet with the right pet
                    sitter. So even if you've got an out-of-the-ordinary pet to take care of, Fizgig has your back!</motion.p>
                <img className='w-full' src={img} alt="" />
            </div>
        </div>
    );
};

export default CatsDogs;