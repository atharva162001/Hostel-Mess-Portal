import React from "react";
function Navbar(props) {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    return(
      <div class="bg-black w-full xl:grid xl:place-items-center">
        <nav class="bg-black text-slate-200 lg:flex xl:container">
          <div class="flex">
            <a class="m-4 text-2xl font-bold " href="#home">YourName</a>
            <button class="px-4 my-2 mx-4 ml-auto font-bold rounded hover:bg-slate-800 hover:text-white lg:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>Menu</button>
          </div>
          <ul class={(showMobileMenu ? "" : "hidden") + ` lg:ml-auto lg:flex`}>
            {props && props.links.map(str => <NavLink text={str} key={str} />)}
            <li class="py-2 grid place-items-center lg:mx-5"><a href="#" class="p-2 w-1/2 lg:w-28 text-center rounded font-bold hover:bg-teal-200 bg-teal-300 text-black">{props.ctaText ?? "Contact"}</a></li>
          </ul>
        </nav>
      </div>
    );
  }
  
  function NavLink(props) {
    return <li class="py-2 grid place-items-center lg:mx-5"><a href={`#${props.text.toLowerCase()}`} class="p-2 w-1/2 lg:w-28 text-center rounded font-bold hover:bg-slate-800 hover:text-white">{props.text}</a></li>
  }
  
  /*
    Create Your Nabvar in myNavBar:
    - @links - Array of strings representing nav links.
             - Each <a> link item will have a href of #str.toLowerCase() for page navigation.
    - @ctaText - string to be displayed for call to action link.
  */
  
  
export default Navbar;