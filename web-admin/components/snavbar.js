import React from "react";
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { Disclosure } from "@headlessui/react";
// import {
//   MdOutlineSpaceDashboard,
//   MdOutlineAnalytics,
//   MdOutlineIntegrationInstructions,
//   MdOutlineMoreHoriz,
//   MdOutlineSettings,
//   MdOutlineLogout,
//   MdNotificationsNone,
//   MdOutlinePayment
// } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
// import { FaRegComments } from "react-icons/fa";
// import { BiMessageSquareDots } from "react-icons/bi";
// import Link from "next/link";

function SideNavbar() {
   return (
      <div className="s-layout">
         {/* <!-- Sidebar --> */}
         <div className="s-layout__sidebar">
            <a className="s-sidebar__trigger" href="#0">
               <i className="fa fa-bars"></i>
            </a>

            <nav className="s-sidebar__nav">
               <ul>
                  <li>
                     <a className="s-sidebar__nav-link" href="/admin">
                        <i className="fa fa-home"></i><em>Dashboard</em>
                     </a>
                  </li>
                  <li>
                     <a className="s-sidebar__nav-link" href="/admin/notifications">
                        <i className="fa fa-bell"></i><em>Notifications</em>
                     </a>
                  </li>
                  <li>
                     <a className="s-sidebar__nav-link" href="/admin/announcements">
                        <i className="fa fa-camera"></i><em>Announcements</em>
                     </a>
                  </li>
                  <li>
                     <a className="s-sidebar__nav-link" href="/admin/messmenu">
                        <i className="fa-regular fa-pizza-slice"></i><em>Mess Menu</em>
                     </a>
                  </li>
                  <li>
                     <a className="s-sidebar__nav-link" href="/admin/verification">
                        <i className="fa fa-bell"></i><em>Verification</em>
                     </a>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   )
}

export default SideNavbar;