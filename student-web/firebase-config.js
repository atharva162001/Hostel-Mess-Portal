import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getStorage} from "@firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAYib-FoG7e87Aa0O2lV5UTsAZCgAi78Wg",
  authDomain: "hostelmess-f48a8.firebaseapp.com",
  projectId: "hostelmess-f48a8",
  storageBucket: "hostelmess-f48a8.appspot.com",
  messagingSenderId: "655721198875",
  appId: "1:655721198875:web:407db4645c277c95854fbe",
  measurementId: "G-PFMDMVWK3R"
};
  const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage};






// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "@firebase/firestore"
// import {getStorage} from "@firebase/storage"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBnpUbbel77z8dTHaxXcHhFxBNtRX707tM",
//   authDomain: "fintest-81406.firebaseapp.com",
//   projectId: "fintest-81406",
//   storageBucket: "fintest-81406.appspot.com",
//   messagingSenderId: "1068048917200",
//   appId: "1:1068048917200:web:3ae7101fedd23971dbb4d5",
//   measurementId: "G-PVKCGRNTSJ"
// };

// // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);
// const storage = getStorage(app);

// export {db,storage};
