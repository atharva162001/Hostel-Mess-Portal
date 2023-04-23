import React, { useState, useEffect } from "react";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Link from 'next/link'
import Switch from "./themeswitch/switch";
// import { GiHamburgerMenu } from "react-icons/gi";


function SideNavbar() {
   const [username, setUsername] = useState("");

   useEffect(() => {
      // checking login
      setUsername(localStorage.getItem("username"));
   }, []);
   return (
      <div>
         <div className="flex items-center justify-evenly  bg-gray-600 dark:bg-gray-900 py-6">

            <div className="flex items-center flex-shrink-0 text-white mr-6">
               <img className="fill-current h-8 w-8 mr-2" alt="Messlogo" src="/logo.png" />
               {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg> */}
               <span className="font-bold text-xl tracking-tight">VJTI Mess</span>
            </div>

            <div className="w-full block flex-grow font-semibold lg:flex lg:items-center lg:w-auto">
               <div className="text-sm lg:flex-grow">
                  <a href={`/${username}`} className="block mt-4 lg:inline-block lg:mt-0  dark:text-white mr-4">
                     Dashboard
                  </a>
                  <a href={`/${username}/announcements`} class="block mt-4 lg:inline-block lg:mt-0  dark:text-white mr-4">
                     Announcements
                  </a>
                  <a href={`/${username}/notifications`} class="block mt-4 lg:inline-block lg:mt-0  dark:text-white mr-4">
                     Notifications
                  </a>
                  <a href={`/${username}/reminder`} className="block mt-4 lg:inline-block lg:mt-0  dark:text-white mr-4">
                     Reminders
                  </a>
                  <a href={`/${username}/scanqr`} className="block mt-4 lg:inline-block lg:mt-0  dark:text-white mr-4">
                     QR Scanner
                  </a>
                  <a href={`/${username}/verification`} className="block mt-4 lg:inline-block lg:mt-0  dark:text-white mr-4">
                     Verifications
                  </a>
                  <a href={`/${username}/messmenu`} className="block mt-4 lg:inline-block lg:mt-0  dark:text-white mr-4">
                     Mess Menu
                  </a>
                  <a href={`/${username}/inventory`} className="block mt-4 lg:inline-block lg:mt-0  dark:text-white mr-4">
                     Inventory
                  </a>
                  <a href={`/${username}/allstudents`} className="block mt-4 lg:inline-block lg:mt-0  dark:text-white mr-4">
                     All Students
                  </a>
                  <Switch />
               </div>
            </div>
         </div>
      </div>
   )
}

export default SideNavbar;