

const MainButton = ({ btnText }) => {
    return (
        <button className="no-underline uppercase text-2xl font-maven bg-white border-none px-3 hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-7 transition-all duration-700 text-black">{btnText}</button>
    );
};

export default MainButton;