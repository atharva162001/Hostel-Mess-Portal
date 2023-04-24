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
                !showPlaceorder ? (<div className=" mb-4 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex mx-4 w-30%">
                    <div class="sm:flex sm:justify-between sm:gap-4 sm:w-50%">
                        <div className="p-4 ">
                            <div className='dark:text-white text-gray-900'>
                                <h3 class="text-lg  sm:text-xl">
                                    Order {props.name}
                                </h3>
                                <p >
                                    Current content {props.content}{props.symbol}
                                </p>
                                <p class="mt-1 text-sm font-medium text-gray-400">Only {props.content}{props.symbol} is remaining in the stock, please order the necessary supplies.</p>
                                <button class="inline-block px-4 py-2 text-gray-400 font-semibold border-2 border-gray-500 rounded-md hover:bg-gray-700 hover:text-white hover:border-gray-700 focus:outline-none focus:ring focus:ring-green-100 m-4" onClick={() => setShowPlaceorder(true)}>
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>) : (
                    <form ref={form} onSubmit={(e) => sendEmail(e)} >
                        <div className="mb-4 rounded overflow-hidden shadow-lg mx-4 w-30%">
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 p-4">
                                <div className="">
                                    <label htmlFor="user_name" className="font-semibold text-gray-900">
                                        Stock Name :
                                    </label>
                                    <input
                                        className="mt-1 text-sm font-medium border rounded-md p-0.5 m-0.5  text-gray-600"
                                        type="text"
                                        placeholder=" Enter name"
                                        name="user_name"
                                        id="user_name"
                                    />
                                    </div>
                                    <div>
                                    <label htmlFor="user_message" className="font-semibold text-gray-900 ">
                                        Required Content :
                                    </label>
                                    <input
                                        className="mt-1 text-sm font-medium border rounded-md p-0.5 m-0.5  text-gray-600"
                                        type="number"
                                        placeholder=" Enter quantity"
                                        name="user_message"
                                        id="user_message"
                                        onChange={(e)=>setContent(e.target.value)}
                                    />
                                    </div>
                                    <div>
                                    <label htmlFor="user_category" className="font-semibold text-gray-900">
                                        Select category:
                                    </label>
                                    <input
                                        className="mt-1 text-sm font-medium border rounded-md p-0.5 m-0.5  text-gray-600"
                                        type="text"
                                        placeholder=" Enter category"
                                        name="user_category"
                                        id="user_category"
                                    />
                                </div>
                                <div>
                                <button type-="submit" className="rounded-lg mt-1 px-4 py-1 bg-gray-900 text-gray-100 text-xs hover:bg-zinc-500  hover:text-white" >Send</button>
                                {/* <input className="mt-1 text-sm font-medium hover:bg-blue-700 hover:text-white hover:py-2 hover:px-2 hover:rounded-lg text-gray-600" type="submit" value="Send" /> */}
                                </div>
                            </div>
                           
                        </div>
                    </form>
                )
            }
        </div>
    );
};
export default Placeorderemail;