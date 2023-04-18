import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import {db} from "../../firebase-config"
import { doc, updateDoc, arrayUnion } from "@firebase/firestore";
// import { getDocs, collection,addDoc } from "@firebase/firestore";

const Test = () => {

  // const userCollectionRef = collection(db, "dailyqrdata");

   const [qr,setQr]=useState("NoData"); 

   const addQr = async (newData) => {
    setQr(newData);
    const qrDocRef = doc(db, "dailyqrdata", "wlFKmvwoW48mR4fbLURq");
    console.log(newData);
    await updateDoc(qrDocRef, {qr: arrayUnion(newData)});
  
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
