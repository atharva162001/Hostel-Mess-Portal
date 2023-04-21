import React from 'react'
import Sidenavbar from '../../../components/snavbar'
import PleaseLog from '../../../components/login/PleaseLog'
import { useState, useEffect } from 'react';
import { db } from "../../../firebase-config";
import { collection, getDocs, addDoc } from "@firebase/firestore"
function Announcements() {
  // for login
  const [loggeduser, setLoggedUser] = useState("nouser");

  const [subject, setsubject] = useState('');
  const [message, setmessage] = useState('');
  const userCollectionRef = collection(db, "announcements");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = currentDate.toLocaleDateString('en-US', options);
    console.log(dateString);
    await addDoc(userCollectionRef, { usersubject: subject, usermessage: message, postdate: dateString });
    setsubject('');
    setmessage('');
    setTimeout(function () {
      location.reload();
    }, 1000);
  }


  const [users, setUsers] = useState([]);
  useEffect(() => {
    // for login
    setLoggedUser(localStorage.getItem("username"));

    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      // console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  let content;
  if (loggeduser === 'nouser') {
    content = <PleaseLog></PleaseLog>;
  } else {
    content = (
      <div className="xl:ml-64 lg:ml-60 md:ml-12">
        <Sidenavbar />
        <div >
          <div className='xl:ml-64 lg:ml-60 md:ml-12'>
            <form class="cf" onSubmit={(event) => handleSubmit(event)} className="announcementform ">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div class="half left cf">
                  <h1 className='text-2xl' style={{ fontFamily: 'cursive' }}>Announcement Form</h1>
                  <input type="text" id="input-subject" placeholder="Subject" onChange={(e) => setsubject(e.target.value)} />
                </div>
                <div class="half right cf">
                  <textarea name="message" type="text" id="input-message" placeholder="Message" onChange={(e) => setmessage(e.target.value)}></textarea>
                  <button class="inline-block px-4 py-2 text-gray-500 font-semibold border-2 border-gray-500 rounded-md hover:bg-gray-700 hover:text-white hover:border-gray-700 focus:outline-none focus:ring focus:ring-green-100 m-4" value="submit">
                    Submit
                  </button>
                  <div className='py-8'><h1 className='text-2xl' style={{ fontFamily: 'cursive' }}>Previous notifications</h1></div>
                </div>
              </div>
            </form>

          </div>

          <div className="m-8">
            {
              users.map((user) => {
                return (
                  <div className=" mb-4 rounded overflow-hidden shadow-lg flex mx-4 w-30%" key={user.id}>
                    <div class="sm:flex sm:justify-between sm:gap-4 sm:w-50%">
                      <div className="p-4">
                        <h3 class="text-lg text-gray-900 sm:text-xl">
                          {user.usersubject}
                        </h3>
                        <h3 class="text-lg text-gray-900 sm:text-xl">
                          {user.postdate}
                        </h3>
                        <p class="mt-1 text-sm font-medium text-gray-600">{user.usermessage}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    )
  }



  return content;
}

export default Announcements