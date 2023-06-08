// import Switch from "./themeswitch/switch"
import React,{useEffect, useState} from "react";
import Link from "next/link";
function Navbar() {
   const [userName,setUserName]=useState("");
   const [showMobileMenu, setShowMobileMenu] = useState(false);
  //  useEffect(()=>{
  //     setUserName(localStorage.getItem("username"));
  //  },[]);
   return (
      <div className="dark:bg-gray-900 bg-[#64748b] z-10 w-full xl:grid xl:place-items-center fixed">
         <nav className="dark:bg-gray-900 bg- text-slate-200 xl:flex xl:container ">
            <div className="flex">
               <img className="mt-4 pb-4" src="/logo.png"/>
               <Link className="m-4 text-lg text-black dark:text-white hover:text-white font-bold " href="/">VJTI MESS</Link>
               <button className="px-2 pb-1 ml-auto mr-16 font-bold rounded text-black hover:rounded  dark:text-white hover:bg-blue-700 hover:text-white xl:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>Menu</button>
            </div>
            <ul className={(showMobileMenu ? "" : "hidden") + ` xl:ml-2 xl:flex pb-2 xl:gap-0  `}>
               <li className="py-2 grid place-items-center xl:mx-2"><Link href={'/dashboard'} className="p-2  text-black dark:text-white text-center  rounded font-bold hover:bg-blue-700 hover:text-white">Dashboard</Link></li>
               <li className="py-2 grid place-items-center xl:mx-2"><a href={'/notifications'} className="p-2  text-black dark:text-white text-center rounded font-bold hover:bg-blue-700 hover:text-white">Notifications</a></li>
               <li className="py-2 grid place-items-center xl:mx-2"><a href={'/complaintbox'} className="p-2  text-black dark:text-white text-center rounded font-bold hover:bg-blue-700 hover:text-white">ComplaintBox</a></li>
               <li className="py-2 grid place-items-center xl:mx-2"><a href={'/messmenu'} className="p-2  text-black dark:text-white text-center rounded font-bold hover:bg-blue-700 hover:text-white">MessMenu</a></li>
               <li className="py-2 grid place-items-center xl:mx-2"><a href={'/qrcode'} className="p-2  text-black dark:text-white text-center rounded font-bold hover:bg-blue-700 hover:text-white">QrCode</a></li>
               <li className="py-2 grid place-items-center xl:mx-2"><a href={'/payment'} className="p-2  text-black dark:text-white text-center rounded font-bold hover:bg-blue-700 hover:text-white">Payment</a></li>
               <li className="py-2 grid place-items-center xl:mx-2"><a href={'/profile'} className="p-2  text-black dark:text-white text-center rounded font-bold hover:bg-blue-700 hover:text-white">Profile</a></li>

               


            </ul>
            {/* <Switch></Switch> */}
         </nav>
      </div>
   );
}


export default Navbar;