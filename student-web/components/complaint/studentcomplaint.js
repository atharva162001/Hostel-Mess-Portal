import React from 'react'
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc } from "@firebase/firestore";
function Studentcomplaint() {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");
    const userCollectionRef = collection(db, "complaints");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const currentDate = new Date();
        const options = { year: "numeric", month: "long", day: "numeric" };
        const dateString = currentDate.toLocaleDateString("en-US", options);
        console.log(dateString);
        await addDoc(userCollectionRef, {
            postdate: dateString,
            usersubject: subject,
            usermessage: message,
            username:name,
            useremail:email,

        });
        setsubject("");
        setmessage("");
        setname("");
        setemail("");
        setTimeout(function () {
            location.reload();
        }, 1000);
    };
    return (
        <div className='p-20'>

            <div class="announcement-body max-w-screen-md mx-auto p-5">
                <div class="text-center mb-16">

                    <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                        Complaint <span class="text-indigo-600">Box</span>
                    </h3>
                </div>

                <form class="w-full" onSubmit={(event) => handleSubmit(event)}>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="Enter Name" onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Enter Email" onChange={(e) => setemail(e.target.value)} />
                        </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="Subject of Announcement" onChange={(e) => setsubject(e.target.value)} />
                        </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Message
                            </label>
                            <textarea rows="10" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e) => setmessage(e.target.value)}>

                            </textarea>
                        </div>
                        <button class="mx-auto shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                            Submit
                        </button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Studentcomplaint