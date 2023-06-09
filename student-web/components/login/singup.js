import React from 'react'
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc } from "@firebase/firestore";
function Signup() {
    const router = useRouter();
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [regno, setregno] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [gender, setgender] = useState("");
    const [contectno, setcontactno] = useState("");
    const [year, setyear] = useState("");
    const [imagedrive, setimagedrive] = useState("");
    const userCollectionRef = collection(db, "allstudents");
    const studentCollectionRef = collection(db, "studententry");
    const handleSubmit = async (event) => {
        event.preventDefault();
        await addDoc(userCollectionRef, {
            firstname: firstname,
            lastname: lastname,
            regno: regno,
            password: password,
            email: email,
            address: address,
            city: city,
            gender: gender,
            contactno: contectno,
            year: year,
            imagedrive: imagedrive,

        });
        await addDoc(studentCollectionRef, {
            username: regno,
            password: password,
            name: firstname,
        });
        setTimeout(function () {
            router.push('/')
        }, 1000);
    };
    return (
        <div className='py-20'>
            <div class="text-center  content-center">
                <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                    Student <span class="text-indigo-600">Signup</span>
                </h3>
            </div>
            <div class="py-12 flex items-center justify-center">
                <div class="container  mx-auto">
                    <div>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                    <div class="text-gray-600">
                                        <p class="font-medium text-lg">Personal Details</p>
                                        <p>Please fill out all the fields.</p>
                                    </div>
                                    <div class="lg:col-span-2">
                                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div class="md:col-span-3">
                                                <label for="first_name">First Name</label>
                                                <input type="text" name="first_name" id="first_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={firstname} placeholder="Jon" onChange={(e) => setfirstname(e.target.value)} required />
                                            </div>

                                            <div class="md:col-span-2">
                                                <label for="last_name">Last Name</label>
                                                <input type="text" name="last_name" id="last_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={lastname} placeholder="Wick" onChange={(e) => setlastname(e.target.value)} required />
                                            </div>
                                            <div class="md:col-span-3">
                                                <label for="regno">Reg Number</label>
                                                <input type="text" name="regno" id="regno" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={regno} placeholder="12345678" onChange={(e) => setregno(e.target.value)} required />
                                            </div>
                                            <div class="md:col-span-2">
                                                <label for="password">Password</label>
                                                <input type="text" name="password" id="password" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={password} placeholder="123" onChange={(e) => setpassword(e.target.value)} required />
                                            </div>

                                            <div class="md:col-span-5">
                                                <label for="email">Email Address</label>
                                                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={email} placeholder="email@domain.com" onChange={(e) => setemail(e.target.value)} required />
                                            </div>

                                            <div class="md:col-span-3">
                                                <label for="address">Address / Street</label>
                                                <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={address} placeholder="VJTI" onChange={(e) => setaddress(e.target.value)} required />
                                            </div>

                                            <div class="md:col-span-2">
                                                <label for="city">City</label>
                                                <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={city} placeholder="Kolhapur" onChange={(e) => setcity(e.target.value)} required />
                                            </div>

                                            <div class="md:col-span-2">
                                                <label for="gender">Gender</label>
                                                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input name="gender" id="gender" placeholder="Male" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value={gender} onChange={(e) => setgender(e.target.value)} required />
                                                    {/* <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                    </svg>
    </button>
                                                <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
</button> */}
                                                </div>
                                            </div>

                                            <div class="md:col-span-2">
                                                <label for="contact_no">Contact No</label>
                                                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input name="contact_no" id="contact_no" placeholder="1234567890" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value={contectno} onChange={(e) => setcontactno(e.target.value)} required />
                                                    {/* <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                                <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
</button>
                                            <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
</button> */}
                                                </div>
                                            </div>

                                            <div class="md:col-span-1">
                                                <label for="year">Year</label>
                                                <input type="text" name="year" id="year" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="TY" value={year} onChange={(e) => setyear(e.target.value)} required />
                                            </div>
                                            <div class="md:col-span-5">
                                                <label for="imagedrive">Drive Link of Photo</label>
                                                <input type="text" name="imagedrive" id="imagedrive" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value={imagedrive} onChange={(e) => setimagedrive(e.target.value)} required />
                                            </div>

                                            {/*  <div class="md:col-span-5">
                                            <div class="inline-flex items-center">
                                                <input type="checkbox" name="billing_same" id="billing_same" class="form-checkbox" />
                                                <label for="billing_same" class="ml-2">My billing address is different than above.</label>
                                            </div>
                                        </div>

                                        <div class="md:col-span-2">
                                            <label for="soda">How many soda pops?</label>
                                            <div class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                    </svg>
                                                </button>
                                                <input name="soda" id="soda" placeholder="0" class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value="0" />
                                                <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
*/}
                                            <div class="md:col-span-5 text-right">
                                                <div class="inline-flex items-end">
                                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Signup