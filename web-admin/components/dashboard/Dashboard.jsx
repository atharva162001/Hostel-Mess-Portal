import { async } from "@firebase/util";
import { useContext, useEffect, useState } from "react";
import SideNavbar from "../../components/snavbar";
// import { AppContext } from "../../../context/AppContext";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../firebase-config";
import { getDocs, collection, doc, getDoc } from "@firebase/firestore";
import Link from "next/link";
import format from "date-fns/format";
const Sdashboard = () => {
    const [weekday, setWeekday] = useState('');
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "Messmenu");
    const [breakfast, setbreakfast] = useState('');
    const [lunch, setlunch] = useState('');
    const [dinner, setdinner] = useState('');
    const handlemessmenu = (user) => {
        setbreakfast(user.Breakfast);
        setlunch(user.Lunch);
        setdinner(user.Dinner);
    };
    const dailyEntrydataref = collection(db, "dailyqrdata");
    const [dailydata, setDailydata] = useState({});
    const [singleUser, setSingleuser] = useState([]);
    const studentCollectionref = collection(db, "studentdata");
    const [studentData, setStudentdata] = useState([]);
    const [finalData, setFinaldata] = useState([]);
    // useEffect(() => {
    //     const today = new Date();
    //     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //     const weekday = daysOfWeek[today.getDay()];
    //     setWeekday(weekday);
    //     const getUsers = async () => {
    //         const data = await getDocs(userCollectionRef);
    //         setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     };
    //     getUsers();
    //     const getDailydata = async () => {
    //         const currentDate = new Date();
    //         const formattedDate = format(currentDate, 'yyyy-MM-dd');
    //         const docRef = doc(db, "dailyqrdata", formattedDate);
    //         const docSnap = await getDoc(docRef);
    //         if (docSnap.exists()) {
    //             setDailydata(docSnap.data());
    //             const userData = docSnap.data().qr.flatMap((oneentry) => {
    //                 const parts = oneentry.split('_');
    //                 const sing = { id: parts[0], regid: parts[0], guests: parts[1] };
    //                 return sing;
    //             });
    //             setSingleuser(userData);
    //         }
    //     };
    //     getDailydata();
    //     const getStudentdata = async () => {
    //         const studentdata = await getDocs(studentCollectionref);
    //         setStudentdata(studentdata.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     };
    //     getStudentdata();
    // }, []);
    // useEffect(() => {
    //     users.map((user) => {
    //         if (user.Day === weekday) {
    //             handlemessmenu(user)
    //         }
    //     })
    // }, [users, weekday])
    return (
        <div className=" pt-20 dark:bg-gray-900">
          <h1>Dashboard</h1>
        </div>
    );
}

export default Sdashboard;