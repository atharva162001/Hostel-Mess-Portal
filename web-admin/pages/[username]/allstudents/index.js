import React from 'react'
import Sidenavbar from '../../../components/snavbar'
import PleaseLog from "../../../components/login/PleaseLog"
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { db } from "../../../firebase-config";
import { collection, getDocs } from "@firebase/firestore"
import Link from 'next/link';
function Allstudents() {
    // ------------------------------authentication---------------------------------
    //  -----------------------------------------------------------------------------
    const router = useRouter();
    const [loggeduser, setLoggedUser] = useState("nouser");
    const [paramUser, setParamUser] = useState("");
    useEffect(() => {
        // checking login
        setLoggedUser(localStorage.getItem("username"));
        const url = router.asPath;
        const result = url.split('/');
        const Param = result[result.length - 2];
        setParamUser(Param);

    }, [router]);

    //  --------------------------------------------------------------------------------------
    // --------------------------------------authentication end------------------------------

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

    let content;

    if (loggeduser !== paramUser) {
        content = <PleaseLog></PleaseLog>;
    } else {
        content = (
            <div className="pt-20">
                <div className=''></div>
                <div>
                    <table>
                        <caption>All Students</caption>
                        <thead>
                            <tr>
                                <th scope="col">NAME</th>
                                <th scope="col">REG ID</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">PROFILE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => {
                                    return (

                                        <tr key={user.id}>
                                            <td data-label="Name">{user.name}</td>
                                            <td data-label="REG ID">{user.regid}</td>
                                            <td data-label="EMAIL" className="text-blue-600"><Link href={`mailto:${user.email}`}>{user.email}</Link></td>
                                            <td data-label="PROFILE" className="text-blue-600">PROFILE</td>
                                        </tr>

                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }

    return content;
}

export default Allstudents