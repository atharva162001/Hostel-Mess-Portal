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
    const handlemessmenu = (user) => {
        setbreakfast(user.Breakfast);
        setlunch(user.Lunch);
        setdinner(user.Dinner);
    };
    useEffect(() => {
        const today = new Date();
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const weekday = daysOfWeek[today.getDay()];
        setWeekday(weekday);
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, [userCollectionRef]);
    useEffect(() => {
        users.map((user) => {
            if (user.Day === weekday) {
                handlemessmenu(user)
            }
        })
    }, [users, weekday])

    return (
        <div className=" pt-20 dark:bg-gray-900">
            <div className="">
            </div>
            <div className="messmenuwrapper">
                <ul className="messmenuflex messmenucards">
                    <li className="rounded overflow-hidden shadow-2xl">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{weekday}&apos;s Breakfast</div>
                            <p className="text-gray-700 text-base">
                                {breakfast}
                            </p>
                        </div>

                    </li>
                    <li className="rounded overflow-hidden shadow-2xl">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{weekday}&apos;s Lunch</div>
                            <p className="text-gray-700 text-base">
                                {lunch}
                            </p>
                        </div>

                    </li>
                    <li className="rounded overflow-hidden shadow-2xl">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{weekday}&apos;s Dinner</div>
                            <p className="text-gray-700 text-base">
                                {dinner}
                            </p>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    );
}

export default Maindashboard;