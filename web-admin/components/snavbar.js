import React from "react";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Link from 'next/link'
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
                     <Link className="s-sidebar__nav-link" href='/'>
                        <i className="fa fa-home"></i><em>Dashboard</em>
                     </Link>
                  </li>
                  <li>
                     <Link className="s-sidebar__nav-link" href="/admin/notifications">
                        <i className="fa fa-bell"></i><em>Notifications</em>
                     </Link>
                  </li>
                  <li>
                     <Link className="s-sidebar__nav-link" href="/admin/announcements">
                        <i className="fa fa-bullhorn"></i><em>Announcements</em>
                     </Link>
                  </li>
                  <li>
                     <Link className="s-sidebar__nav-link" href="/admin/messmenu">
                        <i className="fa fa-cutlery"></i><em>Mess Menu</em>
                     </Link>
                  </li>
                  <li>
                     <Link className="s-sidebar__nav-link" href="/admin/verification">
                        <i class="fa fa-check" aria-hidden="true"></i><em>Verification</em>
                     </Link>
                  </li>
                  <li>
                     <Link className="s-sidebar__nav-link" href="/admin/allstudents">
                        <i className="fa fa-male"></i><em>Students</em>
                     </Link>
                  </li>
                  <li>
                     <Link className="s-sidebar__nav-link" href="/admin/reminder">
                        <i className="fa fa-male"></i><em>Reminder</em>
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   )
}

export default SideNavbar;