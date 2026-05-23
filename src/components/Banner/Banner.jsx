import bookImg from "../../assets/Banner Book.png";

const Banner = () => {
  return (
    <div className="ml-auto my-5 flex flex-col-reverse md:flex-row justify-around items-center bg-[#f3f3f3] rounded-2xl py-10 md:py-15 px-6 md:px-10 shadow-lg">
      <div className="text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-snug">
          Books to freshen up <br /> your bookshelf
        </h1>
        <button className="mt-8 btn bg-green-600 text-white px-6 py-4 text-[14px]">
          View The List
        </button>
      </div>

      <div className="w-48 sm:w-64 md:w-auto">
        <img src={bookImg} alt="" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Banner;