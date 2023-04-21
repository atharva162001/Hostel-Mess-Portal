import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import {db} from "../../firebase-config"
import { doc,setDoc,updateDoc,arrayUnion,getDoc } from "@firebase/firestore";
// import { getDocs, collection,addDoc } from "@firebase/firestore";

const Test = () => {

  // creating a date
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const docId = `${yyyy}-${mm}-${dd}`;

  // const qrDocRef = doc(db, "dailyqrdata", docId);

// rules
// match /dailyqrdata/{date} {
//   allow create: if request.auth != null && request.resource.id == date;
//   // other rules here
// }

   const [qr,setQr]=useState("NoData"); 
// ----------------only sets the doc to new variable
  //  const addQr = async (newData) => {
  //   setQr(newData);
  //   const docRef = doc(db, "dailyqrdata", docId);
  //   console.log(newData);
  //   await setDoc(docRef, { qr: newData });
  
  //   setTimeout(function () {
  //     location.reload();
  //   }, 1000);
  // };

  // ------------------do both things if exits then add to it and if not then make new
  const addQr = async (newData) => {
    setQr(newData);
    const docRef = doc(db, "dailyqrdata", docId);
  
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await updateDoc(docRef, { qr: arrayUnion(newData) });
    } else {
      await setDoc(docRef, { qr: [newData] });
    }
  
    setTimeout(function () {
      location.reload();
    }, 1000);
  };

  // we need to store the detais of everyday of the student inorder to fetch their details

  return (
    <div className='dark:bg-gray-900 bg-white '>
      <div>
        <h1 className='dark:text-white text-center pt-4 font-bold'>Scan below</h1>
        <div className='mx-auto' style={{ width: '320px', height: '320px' }}>
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                addQr(result.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
            style={{ width: '100%' }}
          />
        </div>
      </div>

      {/* {console.log(users)}       */}
      <p className='text-3xl font-bold dark:text-purple-800 text-center'>{qr}</p>
      {qr !== 'NoData' ? (
        <h1 className='text-center dark:text-white font-bold'>We can redirect to any Specific Page Now with props </h1>
      ) : (
        <h1 className='text-center font-bold mt-2 dark:text-white'>Scan the QR Properly</h1>
      )}
    </div>
  );
};

export default Test;



// npm install --save react-qr-reader  --legacy-peer-deps 
// export default Test;
