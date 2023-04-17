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