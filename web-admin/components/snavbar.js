import Switch from "./themeswitch/switch"
import React,{useEffect, useState} from "react";
import Link from "next/link";
function Navbar() {
   const [userName,setUserName]=useState("");
   const [showMobileMenu, setShowMobileMenu] = useState(false);
   useEffect(()=>{
      setUserName(localStorage.getItem("username"));
   },[]);
   return (
      <div className="dark:bg-gray-900 bg-[#64748b] z-10 w-full xl:grid xl:place-items-center fixed">
         <nav className="dark:bg-gray-900 bg- text-slate-200 xl:flex xl:container ">
            <div className="flex">
               <img className="mt-4 pb-4" src="/logo.png"/>
               <Link className="m-4 text-lg text-black dark:text-white hover:text-white font-bold " href="/">VJTI MESS</Link>
               <button className="px-2 pb-1 ml-auto mr-16 font-bold rounded text-black hover:rounded  dark:text-white hover:bg-blue-700 hover:text-white xl:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>Menu</button>
            </div>
            <ul className={(showMobileMenu ? "" : "hidden") + ` xl:ml-2 xl:flex pb-2 xl:gap-0  `}>
               <li className="py-2 grid place-items-center xl:mx-2"><Link href={`/${userName}`} className="p-2  text-black dark:text-white text-center  rounded font-bold hover:bg-blue-700 hover:text-white">Dashboard</Link></li>
               <li className="py-2 grid place-items-center xl:mx-2"><a href={`/${userName}/inventory`} className="p-2  text-black dark:text-white text-center rounded font-bold hover:bg-blue-700 hover:text-white">Inventory</a></li>
               <li className="py-2 grid place-items-center xl:mx-2"><a href={`/${userName}/notifications`} className="p-2  text-black dark:text-white text-center rounded font-bold hover:bg-blue-700 hover:text-white">Notifications</a></li>
               <li className="py-2 grid place-items-center xl:mx-2"><a href={`/${userName}/announcements`} className="p-2  text-black dark:text-white text-center rounded font-bold hover:bg-blue-700 hover:text-white">Announcements</a></li>
               <li className="py-2 grid place-items-center xl:mx-2"><a href={`/${userName}/verification`} className="p-2  text-black dark:text-white text-center rounded font-bold hover:bg-blue-700 hover:text-white">Verification</a></li>
               <li className="py-2 grid place-items-center xl:mx-2"><a href={`/${userName}/messmenu`} className="p-2  text-black dark:text-white text-center rounded font-bold hover:bg-blue-700 hover:text-white">MessMenu</a></li>
               <li className="py-2 grid place-items-center xl:mx-2"><a href={`/${userName}/reminder`} className="p-2  text-black dark:text-white text-center rounded font-bold hover:bg-blue-700 hover:text-white">Reminder</a></li>
               <li className="py-2 grid place-items-center xl:mx-2"><a href={`/${userName}/scanqr`} className="p-2  text-black dark:text-white text-center rounded font-bold hover:bg-blue-700 hover:text-white">QRScanner</a></li>
               <li className="py-2 grid place-items-center xl:mx-2"><a href={`/${userName}/allstudents`} className="p-2  text-black dark:text-white text-center rounded font-bold hover:bg-blue-700 hover:text-white">AllStudents</a></li>

            </ul>
            <Switch></Switch>
         </nav>
      </div>
   );
}


export default Navbar;