import React from 'react'
import Sidenavbar from '../../../components/snavbar'
import { useState, useEffect } from 'react';
import { db } from "../../../firebase-config";
import { collection, getDocs } from "@firebase/firestore"
import Link from 'next/link';
function Allstudents() {
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "allstudents");
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
                            <div className=" mb-2 rounded overflow-hidden shadow-lg flex mx-4 w-30%" key={user.id}>
                                <div class="sm:flex sm:justify-between sm:gap-4 sm:w-50%">
                                    <div className="p-2" style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ display: 'flex', flexDirection: 'row' }} >
                                            <h3 class="text-lg text-gray-900 sm:text-xl m-6">
                                                {user.name}
                                            </h3>
                                            <h3 class="text-lg text-gray-900 sm:text-xl m-6">
                                                {user.regid}
                                            </h3>
                                            <Link href={`mailto:${user.email}`}>
                                            <h3 className="button text-lg text-blue-500 sm:text-xl m-6">{user.email}</h3>
                                          </Link>
                                          <button class="inline-block px-4 py-2 text-green-500 font-semibold border-2 border-green-500 rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:outline-none focus:ring focus:ring-green-100 m-4">
                                                                Profile
                                          </button>
                                        </div>
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

export default Allstudents