const MenuPage = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center sm:items-stretch sm:justify-normal overflow-hidden">
      <div className="sm:h-full cursor-pointer text-white text-3xl p-4 w-full sm:w-[300%] sm:text-[80px] flex items-center px-20 sm:border-b-4 border-white transition-all duration-500 ease-in bg-size-200  bg-left hover:bg-right bg-gradient-to-r from-black from-30% via-green-600 to-green-400">
        <button>EXPERIENCE</button>
      </div>
      <div className="sm:h-full cursor-pointer text-white text-3xl p-4 w-full sm:w-[300%] sm:text-[80px] flex items-center px-20 sm:border-b-4 border-white transition-all duration-500 ease-in bg-size-200  bg-left hover:bg-right bg-gradient-to-r from-black from-30% via-green-600 to-green-400">
        <button>PROJECTS</button>
      </div>
      <div className="sm:h-full cursor-pointer text-white text-3xl p-4 w-full sm:w-[300%] sm:text-[80px] flex items-center px-20 transition-all duration-500 ease-in bg-size-200  bg-left hover:bg-right bg-gradient-to-r from-black from-30% via-green-600 to-green-400">
        <button>CONTACT</button>
      </div>
    </div>
  );
};

export default MenuPage;
