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
            <div className="">
                <div className='py-8'></div>
                <div class="verificationselect" style={{ margin: '0 auto' }}>
                    <select onChange={(e) => setoptionstatus(e.target.value)} class="verificationselect">
                        <option value="0">Pending</option>
                        <option value="1">Approved</option>
                        <option value="2">Rejected</option>
                    </select>
                </div>
                <div className='py-4'></div>
                <div>
                <table>
                    <caption>Daily Students</caption>
                    <thead>
                        <tr>
                            <th scope="col">NAME</th>
                            <th scope="col">REG ID</th>
                            <th scope="col">Document</th>
                            {
                                optionstatus === '0' ? (<th scope="col">Accept</th>):
                                (
                                   console.log('')
                                )
                            }
                            {
                                optionstatus === '0' ? (<th scope="col">REJECT</th>):
                                (
                                   console.log('')
                                )
                            }
                            {
                                optionstatus !== '0' ? (<th scope="col">STATUS</th>):
                                (
                                   console.log('')
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return (
                                
                                    (optionstatus === '0' && user.status === '0') || (optionstatus === '1' && user.status === '1') || (optionstatus === '2' && user.status === '2') ? (
                                        <tr>
                                            <td data-label="Name">{user.name}</td>
                                            <td data-label="REG ID">{user.regid}</td>
                                            <td data-label="DOCUMENT" className='text-blue-600' onClick={(e) => window.open(user.pdf, '_blank')}>View</td>
                                            {
                                                
                                                (optionstatus === '0' && user.status === '0') ? (
                                                    <td data-label="ACCEPT" className='text-blue-600' onClick={(e) => handlestate(user, "1", e)}>Accept</td>
                                                ):(console.log('')) 
                                            }
                                            {
                                                (optionstatus === '0' && user.status === '0') ? (
                                                    <td data-label="REJECT" className='text-blue-600' onClick={(e) => handlestate(user, "2", e)}>Reject</td>
                                                ):(console.log(''))
                                            }
                                            {
                                                (optionstatus === '1' && user.status === '1') ? (
                                                    <td data-label="STATUS" className='text-green-600' >Accepted</td>
                                                ):(console.log(''))
                                            }
                                      
                                         
                                            {
                                                (optionstatus === '2' && user.status === '2') ? (
                                                    <td data-label="STATUS" className='text-red-600' >Rejected</td>
                                                ):(console.log(''))
                                            }
                                        
                                        </tr>
                                    ) : (console.log("not found"))
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

export default Activation