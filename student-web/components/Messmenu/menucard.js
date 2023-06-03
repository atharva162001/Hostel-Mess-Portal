import React, { useState } from "react";



const Menucard = (props) => {
  return (
    <div className="">
      <div class="min-[1401px]:h-80 min-[767px]:h-96 max-[768px]:mx-8  px-6 py-4 my-4 dark:bg-gray-500 bg-gray-100 rounded-lg shadow-lg">
        {/* <h1>{props.Day}</h1> */}
        <div className="font-bold text-xl mb-2 dark:text-black text-[#27272a] text-center pb-2 border-b-4">{props.Day}</div>
        <p className="my-6">
          <div><span className="font-bold text-md mb-2 dark:text-black text-gray-900 font-serif">Breakfast: </span><span className="text-gray-700 dark:text-white">{props.Breakfast}</span></div>
        </p>
        <p className="my-6">
        <div><span className="font-bold text-md mb-2 dark:text-black text-gray-900 font-serif">Lunch: </span><span className="text-gray-700 dark:text-white ">{props.Lunch}</span></div>
        </p>
        <p className="my-6">
        <div><span className="font-bold text-md mb-2 dark:text-black text-gray-900 font-serif">Dinner: </span><span className="text-gray-700 dark:text-white">{props.Dinner}</span></div>
        </p>
      </div>
    </div>
  );
};

export default Menucard;
