import { async } from "@firebase/util";
import { useContext, useEffect, useState } from "react";
// import { AppContext } from "../../../context/AppContext";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../firebase-config";
import { getDocs, collection} from "@firebase/firestore";
const Maindashboard = () => {
    const [weekday, setWeekday] = useState('');
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "Messmenu");
    const [breakfast, setbreakfast] = useState('');
    const [lunch, setlunch] = useState('');
    const [dinner, setdinner] = useState('');
    // const handlemessmenu = (user) => {
    //     setbreakfast(user.Breakfast);
    //     setlunch(user.Lunch);
    //     setdinner(user.Dinner);
    // };
    // const today = new Date();
    // useEffect(() => {
        
    //     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //     const weekday = daysOfWeek[today.getDay()];
    //     setWeekday(weekday);
    //     const getUsers = async () => {
    //         const data = await getDocs(userCollectionRef);
    //         setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //       };
    //       getUsers();
    //   }, []);
    // useEffect(() => {
    //     users.map((user) => {
    //         if (user.Day === weekday) {
    //             handlemessmenu(user)
    //         }
    //     })
    // }, [weekday])

    return (
        <div className=" pt-20 dark:bg-gray-900">
            <h1>Dashboard</h1>
        </div>
    );
}

export default Maindashboard;