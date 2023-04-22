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
        const getDailydata = async () => {
            const currentDate = new Date();
            const formattedDate = format(currentDate, 'yyyy-MM-dd');
            const docRef = doc(db, "dailyqrdata", formattedDate);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setDailydata(docSnap.data());
                const userData = docSnap.data().qr.flatMap((oneentry) => {
                    const parts = oneentry.split('_');
                    const sing = { id: parts[0], regid: parts[0], guests: parts[1] };
                    return sing;
                });
                setSingleuser(userData);
            }
        };
        getDailydata();

        const getStudentdata = async () => {
            const studentdata = await getDocs(studentCollectionref);
            setStudentdata(studentdata.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getStudentdata();
    }, []);
    useEffect(() => {
        users.map((user) => {
            if (user.Day === weekday) {
                handlemessmenu(user)
            }
        })
    }, [users, weekday])

    return (
        <div className="">
            <div className="">
            </div>
            <div className="messmenuwrapper">
                <ul className="messmenuflex messmenucards">
                    <li className="rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Student&apos;s count</div>
                            <p className="text-gray-700 text-base">
                                {singleUser.length}
                            </p>
                        </div>
                    </li>
                    <li className="rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{weekday}&apos;s Breakfast</div>
                            <p className="text-gray-700 text-base">
                                {breakfast}
                            </p>
                        </div>

                    </li>
                    <li className="rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{weekday}&apos;s Lunch</div>
                            <p className="text-gray-700 text-base">
                                {lunch}
                            </p>
                        </div>

                    </li>
                    <li className="rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{weekday}&apos;s Dinner</div>
                            <p className="text-gray-700 text-base">
                                {dinner}
                            </p>
                        </div>
                    </li>
                </ul>

            </div>
            <div>
                <table>
                    <caption>Daily Students</caption>
                    <thead>
                        <tr>
                            <th scope="col">NAME</th>
                            <th scope="col">REG ID</th>
                            <th scope="col">GUESTS</th>
                            <th scope="col">EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            singleUser.map((fin) => {
                                var ans = 0;
                                studentData.map((stu) => {
                                    stu.regid === fin.regid ? (ans = stu) : console.log("not found")
                                })
                                return (
                                    ans !== 0 ? (
                                        <tr>
                                            <td data-label="Name">{ans.name}</td>
                                            <td data-label="REG ID">{ans.regid}</td>
                                            <td data-label="GUESTS">{fin.guests}</td>
                                            <td data-label="EMAIL" className="text-blue-600"><Link  href={`mailto:${ans.email}`}>{ans.email}</Link></td>
                                        </tr>
                                    ) : (console.log("not found"))
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Sdashboard;