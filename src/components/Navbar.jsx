import listIcon from "../assets/list.svg";
import shopBasket2 from "../assets/basket2-fill.svg";
import { useState } from "react";
import { div, tr } from "framer-motion/client";

export default function Navbar() {
  return (
    <>
      <div className=" flex justify-between mx-auto mt-7 px-5">
        <div className=" flex items-center">
          <FlyoutLink FlyoutContent={PricingContent}>دسته بندی کالا</FlyoutLink>
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
    </>
  );
}

const FlyoutLink = ({ children, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative flex  gap-1 "
    >
      <img src={listIcon} alt="" className="flex" />
      <a href="#" className="cursor-pointer relative font-bold block w-full">
        {children}
      </a>
      <span
        style={{
          transform: open ? "scaleX(1)" : "scaleX(0)",
        }}
        className="absolute bottom-[-5px] left-0 h-[3px] w-full bg-red-600 origin-right rounded-t-lg transition-transform duration-300 ease-out"
      />
      {open && (
        <div className=" absolute translate-x-0 translate-y-0.5 top-7 ">
          <div className=" absolute -top-2 left-0 right-0 h-6 bg bg-transparent" />
          <FlyoutContent />
        </div>
      )}
    </li>
  );
};

const PricingContent = () => {
  return (
    <div className=" w-64 h-full bg-gray-100 shadow-xl">
      <ul className="">
        {categories.map((category, index) => (
          <li key={index} className="w-full px-2 py-3 hover:bg-white cursor-pointer">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};


const categories = [
    "موبایل",
    "کالای دیجیتال",
    "خانه و آشپزخانه",
    "آرایشی و بهداشتی",
    "خودرو و موتورسیکلت",
    "ابزار و تجهیزات",
    "مد و پوشاک",
    "ساعت و زیورآلات",
    "ورزش و سفر",
    "کتاب، لوازم تحریر و هنر",
    "کارت هدیه",
    "محصولات بومی و محلی",
    "حیوانات خانگی",
    "خوردنی و آشامیدنی",
    "اسباب بازی، کودک و نوزاد",
  ];
  // Do other Categories From the API

   function fall() {
    
  }