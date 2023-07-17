import React from 'react'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { db } from "../../firebase-config";
import { getDocs, collection } from "@firebase/firestore";
import Image from 'next/image';
function UserProfile() {
  const router = useRouter();
  const userCollectionRef = collection(db, "allstudents");
  const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(userCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  
  //   getUsers();

  // }, [users]);
  
  // const [loggeduser, setLoggedUser] = useState("johnwick@gmail.com");
  // const [paramUser, setParamUser] = useState("");
  // useEffect(() => {
  //   // checking login
  //   setLoggedUser(localStorage.getItem("username"));
  //   const url = router.asPath;
  //   const result = url.split('/');
  //   const Param = result[result.length - 2];
  //   setParamUser(Param);
  //   console.log(loggeduser);
  // }, [router]);
  return (
    <div className='font-mono text-2xl text-gray-800 '>
    <h1>Profile Page</h1>
    </div>
  )
}

export default UserProfile