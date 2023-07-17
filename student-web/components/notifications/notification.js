import React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "@firebase/firestore"
function Notification() {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "complaint");
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(userCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // }, []);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(userCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // }, []);

  return (
    <div className="pt-20">
      <div class="text-center mb-16">

        <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Notifications
        </h3>
      </div>

    </div>
  )
}

export default Notification