import { useRouter } from "next/router";
import React from "react";
function Navbar(props) {
   const [showMobileMenu, setShowMobileMenu] = React.useState(false);
   const router=useRouter();
   const setrouter=(e)=>{
      e.preventDefault();
      router.push(e.target.value);
   }
   return (
      <div class="bg-black w-full xl:grid xl:place-items-center fixed">
         <nav class="bg-black text-slate-200 lg:flex xl:container">
            <div class="flex mr-auto">
               <a class="m-4" href="#home">VJTI MESS</a>
               <button class="px-2 ml-auto  rounded hover:bg-slate-800 hover:text-white lg:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>Menu</button>
            </div>
            <ul class={(showMobileMenu ? "" : "hidden") + ` lg:ml-2 lg:flex `}>
               <li class="py-2 grid place-items-center lg:mx-2"><a href='/' class="p-2 w-1/2 lg:w-28 text-center rounded font-bold hover:bg-slate-800 hover:text-white">Dashboard</a></li>
               <li class="py-2 grid place-items-center lg:mx-2"><a href='home' class="p-2 w-1/2 lg:w-28 text-center rounded font-bold hover:bg-slate-800 hover:text-white">Inventory</a></li>
               <li class="py-2 grid place-items-center lg:mx-2">
                  <select class="p-2   text-center rounded font-bold bg-black hover:bg-slate-800 hover:text-white" onChange={(e)=>setrouter(e)}>
                     <option value='/' class="p-2   text-center rounded font-bold  bg-black hover:text-white" ><li class="py-2 grid place-items-center lg:mx-2">Notification</li></option>
                     <option  class="p-2   text-center rounded font-bold  bg-black hover:text-white" selected><li class="py-2 grid place-items-center lg:mx-2" selected>Select</li></option>
                     <option value='/' class="p-2   text-center rounded font-bold  bg-black hover:text-white" ><li class="py-2 grid place-items-center lg:mx-2"><a href='home' class="p-2 w-1/2 lg:w-28 text-center rounded font-bold hover:bg-slate-800 hover:text-white">Announcement</a></li></option>
                     <option value='/' class="p-2   text-center rounded font-bold  bg-black hover:text-white"><li class="py-2 grid place-items-center lg:mx-2"><a href='home' class="p-2 w-1/2 lg:w-28 text-center rounded font-bold hover:bg-slate-800 hover:text-white">Verification</a></li></option>
                  </select>
               </li>
               <li class="py-2 grid place-items-center lg:mx-2"><a href='home' class="p-2 w-1/2 lg:w-28 text-center rounded font-bold hover:bg-slate-800 hover:text-white">MessMenu</a></li>
               <li class="py-2 grid place-items-center lg:mx-2"><a href='home' class="p-2 w-1/2 lg:w-28 text-center rounded font-bold hover:bg-slate-800 hover:text-white">Reminder</a></li>
               <li class="py-2 grid place-items-center lg:mx-2"><a href='home' class="p-2 w-1/2 lg:w-28 text-center rounded font-bold hover:bg-slate-800 hover:text-white">QRScanner</a></li>
               <li class="py-2 grid place-items-center lg:mx-2"><a href='home' class="p-2 w-1/2 lg:w-28 text-center rounded font-bold hover:bg-slate-800 hover:text-white">AllStudents</a></li>

            </ul>
         </nav>
      </div>
   );
}

function NavLink(props) {
   return <li class="py-2 grid place-items-center lg:mx-2"><a href={`#${props.text.toLowerCase()}`} class="p-2 w-1/2 lg:w-28 text-center rounded font-bold hover:bg-slate-800 hover:text-white">{props.text}</a></li>
}

/*
  Create Your Nabvar in myNavBar:
  - @links - Array of strings representing nav links.
           - Each <a> link item will have a href of #str.toLowerCase() for page navigation.
  - @ctaText - string to be displayed for call to action link.
*/


export default Navbar;