import React from 'react'

function UserProfile() {
  return (
    <div className='font-mono text-2xl text-gray-800 '>
      <div class="wrapper pt-20">
        <img src="https://media.licdn.com/dms/image/D4D03AQH4RE-pheqtkg/profile-displayphoto-shrink_800_800/0/1669533852695?e=1691625600&v=beta&t=MoOdO-37au2xXgiv3EgplM6W027ReSGwqkiREsySjiE" class="image--cover" />

      </div>
      <div class="text-center mt-4 content-center">
        <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Samarth <span class="text-indigo-600">Langote</span>
        </h3>
      </div>
      <div class="bg-white pt-4 pl-8 pr-8 shadow rounded-sm">
        <div class="flex items-center space-x-2 font-mono text-2xl text-gray-800 leading-8">
          <span class="text-green-500">
            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
          <span class="tracking-wide">About</span>
        </div>
        <div class="font-mono text-2xl text-gray-800">
          <div class="grid md:grid-cols-2 text-sm">
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-bold  text-xl text-black-600 ">First Name</div>
              <div class="px-4 py-2 text-lg text-gray-500 font-semibold">Jane</div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-bold text-xl text-black-600">Last Name</div>
              <div class="px-4 py-2 text-lg text-gray-500 font-semibold">Doe</div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-bold text-xl  text-black-600">Gender</div>
              <div class="px-4 py-2 text-lg text-gray-500 font-semibold">Female</div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-bold text-xl  text-black-600">Contact No.</div>
              <div class="px-4 py-2 text-lg text-gray-500 font-semibold">+11 998001001</div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-bold text-xl  text-black-600">Current Address</div>
              <div class="px-4 py-2 text-lg text-gray-500 font-semibold">Beech Creek, PA, Pennsylvania</div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-bold text-xl  text-black-600">Permanent Address</div>
              <div class="px-4 py-2 text-lg text-gray-500 font-semibold">Arlington Heights, IL, Illinois</div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-bold text-xl  text-black-600">Email</div>
              <div class="px-4 py-2">
                <a class="text-blue-800 text-lg font-semibold" href="mailto:jane@example.com">jane@example.com</a>
              </div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-bold text-xl  text-black-600">Birthday</div>
              <div class="px-4 py-2 text-lg text-gray-500 font-semibold">Feb 06, 1998</div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 bg-white pt-4 pl-8 pr-8 shadow rounded-sm">
       {/* <div>
          <div class="flex items-center space-x-2 font-mono text-2xl text-gray-800  leading-8 mb-3">
            <span clas="text-green-500">
              <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            <span class="tracking-wide">Experience</span>
          </div>
          <ul class="list-inside space-y-2">
            <li>
              <div class="text-teal-600">Owner at Her Company Inc.</div>
              <div class="text-gray-500 text-xs">March 2020 - Now</div>
            </li>
            <li>
              <div class="text-teal-600">Owner at Her Company Inc.</div>
              <div class="text-gray-500 text-xs">March 2020 - Now</div>
            </li>
          </ul>
  </div> */}
        <div>
          <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
            <span clas="text-green-500">
              <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path fill="#fff"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </span>
            <span class="tracking-wide">Education</span>
          </div>
          <ul class="list-inside space-y-2">
            <li>
              <div class="text-teal-700">Third Year</div>
              <div class="text-gray-500 text-xl">June 2022-June 2023</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserProfile