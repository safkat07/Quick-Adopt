import MainTitle from '../../../Components/UseableComponents/Title/MainTitle';
import img from '../../../assets/dogs-cats-img.png'

const CatsDogs = () => {
    return (
        <div className='mt-20'>
            <div>
                <MainTitle maintitle={"We Love All Pets"}></MainTitle>
                <p className='max-w-7xl font-maven  text-2xl pt-2 pb-8 mx-auto text-center '>Be it a fluffy bunny, a giant hound or a hairy tarantula, you name it! Fizgig introduces a first-of-its-kind, all-inclusive pet sitting app that matches your pet with the right pet
                    sitter. So even if you've got an out-of-the-ordinary pet to take care of, Fizgig has your back!</p>
                    <img className='w-full' src={img} alt="" />
            </div>
        </div>
    );
};

export default CatsDogs;