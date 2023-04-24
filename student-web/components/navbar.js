import React from "react";

const Navbar = () => {
  return (
    <nav class="nav flex flex-wrap items-center justify-between px-4">
      <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
        <svg
          class="fill-current h-8 mr-2 w-8"
          xmlns="http://www.w3.org/2000/svg"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="1.5"
          clip-rule="evenodd"
          viewBox="0 0 716 895"
        >
          <path d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885"></path>
          <path
            class="text-white fill-current"
            d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"
          ></path>
          <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722"></path>
        </svg>
        <span class="font-semibold text-xl tracking-tight">Luke Bennett</span>
      </div>

      <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
        for="menu-btn"
      >
        <span class="navicon bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
        <li class="border-t md:border-none">
          <a
            href="/"
            class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
          >
            Home
          </a>
        </li>

        <li class="border-t md:border-none">
          <a
            href="/about/"
            class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
          >
            About
          </a>
        </li>

        <li class="border-t md:border-none">
          <a
            href="/blog/"
            class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
