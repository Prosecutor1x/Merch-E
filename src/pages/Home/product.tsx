import React from "react";
import { HeartOutlined } from "@ant-design/icons";
import data from "../../assets/data/products";

const Products = () => {
  // eslint-disable-next-line
  const [items, setItems] = React.useState(data);

  return (
    <>
      <h1 className="pt-10 text-center font-bold text-4xl">
        Featured Products
      </h1>

      <section className="p-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:px-20">
        {items.map((item) => {
          const { id, image, title, desc, category, type, price } = item;

          return (
            <div key={id} className=" flex p-10 items-center justify-center rounded-xl bg-pink-500">
              <div className="w-screen cursor-default flex-col overflow-hidden rounded-xl shadow-lg bg-pink-100">
                <div className="m-6 mb-2 h-50 relative overflow-hidden ">
                  <img
                    className="h-50 object-cover"
                    src={image}
                    alt={title}
                  />
                  <button className="absolute top-0 right-0 group border-[#fff] rounded-full p-[5px] m-1 bg-[#fff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#E74040"
                      className="w-4 h-4 group-hover:fill-[#E74040]  group-focus:fill-[#E74040] "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </button>
                  <div className="absolute top-0 left-0 border border-[#E74040] m-2 text-[10px]  px-2 text-[white] font-semibold bg-[#E74040] rounded-sm">
                    Sale
                  </div>
                </div>
                <div className="mx-4 mb-4 mt-2 flex-col ">
                  <div className="m-1 ml-2 mb-5 text-[25px] font-sans text-base tracking-wide font-normal">
                    <h1 className= "font-bold  mt-5" >{title}</h1>
                  </div>
                  <div className="text-[15px] m-1 ml-2 mb-2 text-[#737373] font-medium">
                    <p>
                      By{" "}
                      <a href="#JaneCooper" className="text-[#1855CB]">
                        Jane Cooper
                      </a>{" "}
                      in Tech , Products
                    </p>
                    <p >{desc}</p>
                    <small className="bg-green-500  rounded-full px-2 text-white tracking-widest mr-3">
                  {category}
                </small>
                <small className="bg-green-500  rounded-full px-2 text-white tracking-widest mr-3">
                  {type}
                </small>
                  </div>
                  <div className="m-1 ml-2 mb-2 flex">
                    <div className="flex flex-wrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#E77C40"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#E77C40"
                        className="w-4 h-4 mx-[0.1rem]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#E77C40"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#E77C40"
                        className="w-4 h-4 mx-[0.1rem]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#E77C40"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#E77C40"
                        className="w-4 h-4 mx-[0.1rem]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#E77C40"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#E77C40"
                        className="w-4 h-4 mx-[0.1rem]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#E77C40"
                        className="w-4 h-4 mx-[0.1rem]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </div>
                    <div className="text-[15px]  font-medium text-[#737373]">
                      <p>10 Reviews</p>
                    </div>
                  </div>
                  <div className="m-1 ml-2 mb-2">
                    <div className="border m-1 border-[#acacac] text-xl  font-bold w-fit px-2 py-1 rounded">
                      <p>  ₹ {price}</p>
                    </div>
                  </div>
                  <div className="m-1 ml-2 mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="gray"
                      className="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    <div className="mx-1 text-[11px] text-[#737373]">
                      <p>15 Sales</p>
                    </div>
                  </div>
                  <div className="m-1 ml-2 mb-2 flex">
                    <button className="hover:bg-[#bdbdbd] hover:text-[#fff] focus:bg-[#bdbdbd] focus:text-[#fff] border border-[#acacac] m-1 text-[11px] p-1 px-4 py-3 text-[#737373] font-bold text-xl">
                      XL
                    </button>
                    <button className="hover:bg-[#bdbdbd] hover:text-[#fff] focus:bg-[#bdbdbd] focus:text-[#fff] border border-[#acacac] m-1 text-[11px] p-1 px-4 py-3 text-[#737373] font-bold text-xl">
                      L
                    </button>
                    <button className="hover:bg-[#bdbdbd] hover:text-[#fff] focus:bg-[#bdbdbd] focus:text-[#fff] border border-[#acacac] m-1 text-[11px] p-1 px-4 py-3 text-[#737373] font-bold text-xl">
                      M
                    </button>
                    <button className="hover:bg-[#bdbdbd] hover:text-[#fff] focus:bg-[#bdbdbd] focus:text-[#fff] border border-[#acacac] m-1 text-[11px] p-1 px-4 py-3  text-[#737373] text-xl  font-bold">
                      S
                    </button>
                  </div>
                  <button className=" text-[30px] mb-2 text-white p-2 rounded bg-[#1855CB] hover:bg-[#1854cbea] flex w-full content-center justify-center">
                    Select Option
                  </button>
                  <div className="flex text-[#737373] group hover:text-[#535353] font-medium font-serif text-[10px] m-1 mt-2 justify-center content-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="gray"
                      className="w-4 h-4 group-hover:fill-[#737373] group-hover:stroke-[#fff]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="mx-1">Quick View</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Products;
