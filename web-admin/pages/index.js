import { async } from "@firebase/util";
import { useContext, useEffect, useState } from "react";
import SideNavbar from "../components/snavbar";
// import { AppContext } from "../../../context/AppContext";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase-config";
import { getDocs, collection } from "@firebase/firestore";
const Sdashboard = () => {
    const [weekday, setWeekday] = useState('');

    useEffect(() => {
        const today = new Date();
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const weekday = daysOfWeek[today.getDay()];
        setWeekday(weekday);
    }, []);
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "Messmenu");
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef); 
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);
    const [breakfast, setbreakfast] = useState('');
    const [lunch, setlunch] = useState('');
    const [dinner, setdinner] = useState('');
    const handlemessmenu = (user) => {
        setbreakfast(user.Breakfast);
        setlunch(user.Lunch);
        setdinner(user.Dinner);
    }
    useEffect(() => {
        users.map((user) => {
            user.Day === weekday ? (handlemessmenu(user)) : (console.log('hello'));
        })
    })
    return (
        <div className="lg:ml-52 md:ml-12">
            <div className="py-5"></div>
            <SideNavbar />
            <div class="wrapper">
                <ul class="flex cards">
                    <li class="rounded overflow-hidden shadow-lg">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Student&apos;s count</div>
                            <p class="text-gray-700 text-base">
                                500
                            </p>
                        </div>
                    </li>
                    <li class="rounded overflow-hidden shadow-lg">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{weekday}&apos;s Breakfast</div>
                            <p class="text-gray-700 text-base">
                                {breakfast}
                            </p>
                        </div>

                    </li>
                    <li class="rounded overflow-hidden shadow-lg">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{weekday}&apos;s Lunch</div>
                            <p class="text-gray-700 text-base">
                                {lunch}
                            </p>
                        </div>

                    </li>
                    <li class="rounded overflow-hidden shadow-lg">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{weekday}&apos;s Dinner</div>
                            <p class="text-gray-700 text-base">
                                {dinner}
                            </p>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    );
}

export default Sdashboard;