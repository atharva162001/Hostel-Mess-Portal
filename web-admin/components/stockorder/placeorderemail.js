import { React, useRef } from 'react'
import emailjs from '@emailjs/browser';
import Router, { useRouter } from 'next/router';
import { useState } from 'react';
import { db } from "../../firebase-config";
import { updateDoc, doc,getDoc } from "@firebase/firestore";
const Placeorderemail = (props) => {
    const [showPlaceorder, setShowPlaceorder] = useState(false);
    const [oriContent,setContent]=useState(0);
    const handleClick = () => {
        setShowPlaceorder(true);
    };
    const router = useRouter();
    const form = useRef();
    const sendEmail = async(e) => {
        e.preventDefault();
        console.log(props.currUrl);
        emailjs.sendForm('service_4b5zq3z', 'template_qvv1hk8', form.current, '4m6M5EEuQnuRtxYzK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        const updateMenu = async (id) => {
                const currDoc = doc(db, "inventory", props.id);
                const docSnap = await getDoc(currDoc);
                const prev=docSnap.data().content;
                const fin = Number(prev) + Number(oriContent)
                console.log(fin);
                const newfields1 = { content: fin };
                await updateDoc(currDoc, newfields1);
        };
        await updateMenu();
        setShowPlaceorder(false);
        location.reload();
    };
    return (

        <div>
            {
                !showPlaceorder ? (<div className=" mb-4 rounded overflow-hidden shadow-lg flex mx-4 w-30%">
                    <div class="sm:flex sm:justify-between sm:gap-4 sm:w-50%">
                        <div className="p-4">
                            <div>
                                <h3 class="text-lg text-gray-900 sm:text-xl">
                                    Order {props.name}
                                </h3>
                                <p >
                                    Current content {props.content}{props.symbol}
                                </p>
                                <p class="mt-1 text-sm font-medium text-gray-600">Only {props.content}{props.symbol} is remaining in the stock, please order the necessary supplies.</p>
                                <button class="inline-block px-4 py-2 text-gray-500 font-semibold border-2 border-gray-500 rounded-md hover:bg-gray-700 hover:text-white hover:border-gray-700 focus:outline-none focus:ring focus:ring-green-100 m-4" onClick={() => setShowPlaceorder(true)}>
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>) : (
                    <form ref={form} onSubmit={(e) => sendEmail(e)} >
                        <div className="mb-4 rounded overflow-hidden shadow-lg flex mx-4 w-30%">
                            <div className="sm:flex sm:justify-between sm:gap-4 sm:w-50%">
                                <div className="p-4">
                                    <label htmlFor="user_name" className="text-lg text-gray-900 sm:text-xl">
                                        Stock Name :
                                    </label>
                                    <input
                                        className="mt-1 text-sm font-medium text-gray-600"
                                        type="text"
                                        placeholder="Enter your name"
                                        name="user_name"
                                        id="user_name"
                                    />
                                    <label htmlFor="user_message" className="text-lg text-gray-900 sm:text-xl">
                                        Requirement Content :
                                    </label>
                                    <input
                                        className="mt-1 text-sm font-medium text-gray-600"
                                        type="number"
                                        placeholder="Enter req quantity"
                                        name="user_message"
                                        id="user_message"
                                        onChange={(e)=>setContent(e.target.value)}
                                    />
                                    <label htmlFor="user_category" className="text-lg text-gray-900 sm:text-xl">
                                        Select category:
                                    </label>
                                    <input
                                        className="mt-1 text-sm font-medium text-gray-600"
                                        type="text"
                                        placeholder="Enter category"
                                        name="user_category"
                                        id="user_category"
                                    />
                                </div>
                            </div>
                            <input className="mt-1 text-sm font-medium text-gray-600" type="submit" value="Send" />
                        </div>
                    </form>
                )
            }
        </div>
    );
};
export default Placeorderemail;