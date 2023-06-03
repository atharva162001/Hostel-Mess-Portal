import React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "@firebase/firestore"
function Notification() {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "announcements");
  useEffect(() => {
      const getUsers = async () => {
          const data = await getDocs(userCollectionRef);
          // console.log(data);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

      getUsers();
  }, []);
  return (
    <div className="pt-20">
    <div class="text-center mb-16">

    <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
      Notifications 
    </h3>
  </div>
      <div>
        {
          users.map((user) => {
            return (
              <div className="dark:bg-gray-900 mb-4 rounded-xl overflow-hidden shadow-xl border  flex mx-4 w-30%" key={user.id}>
                <div class="sm:flex sm:justify-between sm:gap-4 sm:w-50%">
                  <div className="p-4  dark:text-gray-300 text-gray-900 ">
                    <p>{user.postdate}</p>
                    <p >
                    {user.usersubject}
                  </p>
                    <p class="mt-1 text-sm font-medium text-gray-400">{user.usermessage}</p>
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

export default Notification