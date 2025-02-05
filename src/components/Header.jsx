import logoImg from "../assets/Digikala-Logo.svg";
import topGif from "../assets/gif.webp";
import searchIcon from "../assets/search.svg";
import boxArrowIn from "../assets/box-arrow-in-left.svg";
import shopBasket from "../assets/shop-basket.svg";
import Navbar from "./Navbar";


export default function Header() {
  return (
    <>
      <div className=" w-full h-[60px]">
        <img
          src={topGif}
          alt="Top page Gif"
          className=" w-full h-full object-cover"
        />
      </div>

      <header dir="rtl" className=" border shadow-sm  shadow-orange-200 ">
        <div className=" w-full pt-4 ">
          <div className=" w-full bg-white flex items-center px-5">
            <div className=" w-1/2 flex">
              <img src={logoImg} alt="Digikala Logo" className=" lg:w-48" />
              <div className=" bg-gray-200 flex-grow rounded-md py-1 px-2 flex relative mr-3">
                <img
                  src={searchIcon}
                  alt=""
                  className=" opacity-40 w-5 h-5 absolute transform right-3 top-3 mr-2 "
                />
                <input
                  type="text"
                  placeholder="جستجو"
                  className=" flex-grow w-full outline-none bg-transparent py-1 px-11 flex"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className=" w-1/2 flex justify-end items-center px-8">
              <div className=" border border-gray-300 flex justify-center items-center py-2 px-3 rounded-lg font-bold text-sm gap-1 cursor-pointer">
                <img src={boxArrowIn} className=" ml-2 w-5 " alt="" />
                <span>ورود</span>
                <span>|</span>
                <span>ثبت نام</span>
              </div>
              <span className=" mx-4 text-gray-300 text-lg">|</span>
              <img src={shopBasket} className="scale-x-[-1] w-5" alt="" />
            </div>
          </div>
          {/* Navbar */}
          <Navbar/>
        </div>
      </header>
    </>
  );
}
