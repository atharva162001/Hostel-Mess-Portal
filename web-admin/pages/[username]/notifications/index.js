import React from 'react'
import Sidenavbar from '../../../components/snavbar'
import { useState, useEffect } from 'react';
import { db } from "../../../firebase-config";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "@firebase/firestore"
function Notifications() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = currentDate.toLocaleDateString('en-US', options);
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "complaints");
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            // console.log(data);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
    }, []);
    return (
        <div className="">
            <Sidenavbar />
            <div>
                {
                    users.map((user) => {
                        return (
                            <div className=" mb-4 rounded overflow-hidden shadow-lg flex mx-4 w-30%" key={user.id}>
                                <div class="sm:flex sm:justify-between sm:gap-4 sm:w-50%">
                                    <div className="p-4">
                                        <h3 class="text-lg text-gray-900 sm:text-xl">
                                            {user.username}
                                        </h3>
                                        <p >
                                            {user.useremail}
                                        </p>
                                        <p>{user.postdate}</p>
                                        <p class="mt-1 text-sm font-medium text-gray-600">{user.usermessage}</p>
                                    </div>
                                </div>
                            </div>
                        );


                    })
                }
            </div>

        </div>
    )
}

export default Notifications