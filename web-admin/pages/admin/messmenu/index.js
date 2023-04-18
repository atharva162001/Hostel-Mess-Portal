import React from 'react'
import Sidenavbar from '../../../components/snavbar'
import { db } from "../../../firebase-config";
import { useState, useEffect } from "react";
import { getDocs, collection } from "@firebase/firestore";
function Messmenu() {
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "Messmenu");
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            // console.log(data);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
    }, []);
    return (
        <div className="lg:ml-60 md:ml-12">
        <div className='py-8'></div>
            <Sidenavbar />
            <div class="messmenuwrapper">
                <div><h1 style={{margin:'0 auto',fontFamily:'cursive'}} className='text-2xl'>Mess Menu</h1></div>
                <ul class="messmenuflex messmenucards">
                    {
                        users.map((user) => {
                            return (
                                (user.id === '1' || user.id === '2' || user.id === '3') ? ( <li class="rounded overflow-hidden shadow-lg" key={user.id}>
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2 text-green-500">{user.Day}</div>
                                        <p style={{fontFamily:'sans-serif'}} className='py-2'><b><h1 style={{color:'#8795A1',fontFamily:'cursive'}}>Breakfast: </h1></b>{user.Breakfast}</p>
                                        <p style={{fontFamily:'sans-serif'}} className='py-2'><b><h1 style={{color:'#8795A1',fontFamily:'cursive'}}>Lunch: </h1></b> {user.Lunch}</p>
                                        <p style={{fontFamily:'sans-serif'}} className='py-2'><b><h1 style={{color:'#8795A1',fontFamily:'cursive'}}>Dinner: </h1></b> {user.Dinner}</p>
                                    </div>
                                </li>):(console.log('not found')));
                        })
                    }
                </ul>
                <ul class="messmenuflex messmenucards">
                    {
                        users.map((user) => {
                            return (
                                (user.id === '4' || user.id === '5' || user.id === '6') ? ( <li class="rounded overflow-hidden shadow-lg" key={user.id} >
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2 text-green-500">{user.Day}</div>
                                        <p style={{fontFamily:'sans-serif'}} className='py-2'><b ><h1 style={{color:'#8795A1',fontFamily:'cursive'}}>Breakfast: </h1> </b>{user.Breakfast}</p>
                                        <p style={{fontFamily:'sans-serif'}} className='py-2'><b><h1 style={{color:'#8795A1',fontFamily:'cursive'}}>Lunch: </h1></b> {user.Lunch}</p>
                                        <p style={{fontFamily:'sans-serif'}} className='py-2'><b><h1 style={{color:'#8795A1',fontFamily:'cursive'}}>Dinner: </h1></b> {user.Dinner}</p>
                                    </div>
                                </li>):(console.log('not found')));
                        })
                    }
                </ul>
                <ul class="messmenuflex messmenucards">
                {
                    users.map((user) => {
                        return (
                            (user.id === '7') ? ( <li class="rounded overflow-hidden shadow-lg" key={user.id}>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2 text-green-500">{user.Day}</div>
                                    <p style={{fontFamily:'sans-serif'}} className='py-2'><b><h1 style={{color:'#8795A1',fontFamily:'cursive'}}>Breakfast:</h1></b>{user.Breakfast}</p>
                                    <p style={{fontFamily:'sans-serif'}} className='py-2'><b><h1 style={{color:'#8795A1',fontFamily:'cursive'}}>Lunch: </h1></b> {user.Lunch}</p>
                                    <p style={{fontFamily:'sans-serif'}} className='py-2'><b><h1 style={{color:'#8795A1',fontFamily:'cursive'}}>Dinner: </h1> </b> {user.Dinner}</p>
                                </div>
                            </li>):(console.log('not found')));
                    })
                }
            </ul>

            </div>
        </div>
    )
}

export default Messmenu