import logoImg from "../assets/Digikala-Logo.svg";
import topGif from "../assets/gif.webp";
import searchIcon from "../assets/search.svg";
import boxArrowIn from "../assets/box-arrow-in-left.svg";
import shopBasket from "../assets/shop-basket.svg";
import listIcon from "../assets/list.svg";
import percentIcon from "../assets/percent.svg";
import shopBasket2 from "../assets/basket2-fill.svg";

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
          <div className=" flex justify-between mx-auto mt-7 px-5">
            <div className=" flex justify-start items-center">
              <ul>
                <li className="flex justify-center font-bold gap-1">
                  <img src={listIcon} alt="" />
                  <a href="" className=" cursor-pointer ">
                    دسته بندی کالاها
                  </a>
                </li>
              </ul>

              <span className=" mx-2 text-gray-300 text-lg">|</span>

              <ul className=" flex items-center ">
                <li className=" flex mx-2 flex-col after:w-0 after:bg-red-600 after:h-[3px] hover:after:w-full after:rounded-t-lg hover:after:transition-all after:transition-all ">
                  <div className=" flex justify-center gap-1 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-percent"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>{" "}
                    <a href="">شگفت‌ انگیزها</a>
                  </div>
                </li>
                <li className="flex mx-2 gap-1">
                  <img src={shopBasket2} alt="" />
                  <a href="">سوپرمارکت</a>
                </li>
                <li className="flex mx-2 gap-1 items-center justify-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
                  </svg>
                  <a href="" className=" items-center inline-flex space-x-2">
                    طلای دیجیتال
                  </a>
                </li>
                <li className="flex mx-2 gap-1">
                  <img src={shopBasket2} alt="" />
                  <a href="">پرفروش‌ترین‌ها</a>
                </li>
                <li className="flex mx-2 gap-1 items-center justify-center text-center">
                  <img src={shopBasket2} alt="" />
                  <a href="">خرید کالای کارکرده</a>
                </li>

                <span className=" items-center justify-center text-center mx-2 text-gray-300 text-lg">
                  |
                </span>

                <li className=" items-center justify-center text-center ml-4 gap-1">
                  <a href="">سوالی دارید ؟</a>
                </li>
                <li className="flex items-center justify-center text-center gap-1">
                  <a href="">در دیجیکالا بفروشید</a>
                </li>
              </ul>
            </div>
            {/* Nesfeye dovome navbar */}
            <div className=" flex justify-end items-center">
              <ul>
                <li className="flex items-center gap-1 cursor-pointer text-yellow-600 border border-yellow-500  bg-yellow-300/20 rounded-3xl px-2 py-1 ">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                    <a href="#">شهر خود را انتخاب کنید</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
