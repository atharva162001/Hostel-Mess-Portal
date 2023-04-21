import React from 'react'
import { db } from '../../../firebase-config'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import PleaseLog from "../../../components/login/PleaseLog"
import { getDocs, collection, doc, updateDoc } from "@firebase/firestore";
import Sidenavbar from '../../../components/snavbar'
function Activation() {
     // ------------------------------authentication---------------------------------
    //  -----------------------------------------------------------------------------
    const router=useRouter();
    const [loggeduser,setLoggedUser]=useState("nouser");
    const [paramUser,setParamUser]=useState("");
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
    const [optionstatus, setoptionstatus] = useState('0');
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "activation");
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            // console.log(data);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);


    const [currstate, setcurrstate] = useState('');
    const handlestate = async (user, userstate, event) => {
        event.preventDefault();
        const userid = user.id;
        const docRef = await doc(db, "activation", userid);
        const data = {
            name: user.name,
            regid: user.regid,
            status: userstate,
        }
        updateDoc(docRef, data)
            .then(docRef => {
                console.log("A New Document Field has been added to an existing document");
            })
            .catch(error => {
                console.log(error);
            })
        setTimeout(function () {
            location.reload();
        }, 1000)
    }

    let content;
    if (loggeduser !== paramUser) {
        content = <PleaseLog></PleaseLog>;
    } else {
        content = (
            <div className="lg:ml-60 md:ml-12">
                <div className='py-8'></div>
                <Sidenavbar />
                <div class="verificationselect" style={{ margin: '0 auto' }}>
                    <select onChange={(e) => setoptionstatus(e.target.value)} class="verificationselect">
                        <option value="0">Pending</option>
                        <option value="1">Approved</option>
                        <option value="2">Rejected</option>
                    </select>
                </div>
                <div className='py-4'></div>
                {
                    users.map((user) => {
                        return (
                            <div key={user.id}>
                                {
                                    (optionstatus === '0' && user.status === '0') || (optionstatus === '1' && user.status === '1') || (optionstatus === '2' && user.status === '2') ? (
                                        <div className=" mb-6 rounded overflow-hidden shadow-lg flex mx-4 w-30%" >
                                            <div class="sm:flex sm:justify-between sm:gap-4 sm:w-50%">
                                                <div className="p-4" style={{ display: 'flex', flexDirection: 'row' }}>
                                                    <div>
                                                        {
                                                            (optionstatus === '0' && user.status === '0') || (optionstatus === '1' && user.status === '1') || (optionstatus === '2' && user.status === '2') ? (
                                                                <div style={{ display: 'flex', flexDirection: 'row' }} >
                                                                    <h3 class="text-lg text-gray-900 sm:text-xl m-6">
                                                                        {user.name}
                                                                    </h3>
                                                                    <h3 class="text-lg text-gray-900 sm:text-xl m-6">
                                                                        {user.regid}
                                                                    </h3>
                                                                </div>) : (console.log('not found'))
                                                        }
                                                    </div>

                                                    {
                                                        (optionstatus === '0' && user.status === '0') ? (

                                                            <div >
                                                                <button class="inline-block px-4 py-2 text-gray-500 font-semibold border-2 border-gray-500 rounded-md hover:bg-gray-700 hover:text-white hover:border-gray-700 focus:outline-none focus:ring focus:ring-green-100 m-4" onClick={(e) => window.open(user.pdf, '_blank')}>
                                                                    View
                                                                </button>
                                                                <button class="inline-block px-4 py-2 text-green-500 font-semibold border-2 border-green-500 rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:outline-none focus:ring focus:ring-green-100 m-4" onClick={(e) => handlestate(user, "1", e)}>
                                                                    Accept
                                                                </button>
                                                                <button class="inline-block px-4 py-2 text-red-500 font-semibold border-2 border-red-500 rounded-md hover:bg-red-600 hover:text-white hover:border-red-600 focus:outline-none focus:ring focus:ring-green-100 m-4" onClick={(e) => handlestate(user, "2", e)}>
                                                                    Reject
                                                                </button>
                                                            </div>

                                                        ) : (<div>
                                                            {
                                                                (optionstatus === '1' && user.status === '1') ? (<div className=' m-4 content-center px-4 py-2' >
                                                                    <h1 className='text-green-600'>Accepted</h1>
                                                                </div>) : (<div>
                                                                    {
                                                                        (optionstatus === '2' && user.status === '2') ? (<div className=' m-4 content-center px-4 py-2' ><h1 className='text-red-600'>Rejected</h1></div>) : (console.log('Rejected'))
                                                                    }
                                                                </div>)
                                                            }
                                                        </div>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ) : (console.log('not found'))
                                }
                            </div>

                        );
                    })
                }



            </div>

        )
    }
    return content;
}

export default Activation