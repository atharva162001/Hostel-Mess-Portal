import { async } from "@firebase/util";
import { useContext, useEffect, useState } from "react";
import SideNavbar from "../../components/snavbar";
// import { AppContext } from "../../../context/AppContext";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../firebase-config";
import { getDocs, collection } from "@firebase/firestore";
import Link from "next/link";
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
    const dailyEntrydataref = collection(db, "dailyqrdata");
    const [dailydata, setDailydata] = useState([]);
    const [singleUser, setSingleuser] = useState([]);
    const studentCollectionref = collection(db, "studentdata");
    const [studentData, setStudentdata] = useState([]);
    const [finalData, setFinaldata] = useState([]);
    useEffect(() => {
        const getDailydata = async () => {
            const dailyStudentdata = await getDocs(dailyEntrydataref);
            setDailydata(dailyStudentdata.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getDailydata();
    },[]);
    useEffect(() => {
        const getStudentdata = async () => {
            const studentdata = await getDocs(studentCollectionref);
            setStudentdata(studentdata.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getStudentdata();
    },[]);

    useEffect(() => {
        const check = async () => {
            const getsingleuserdata = () => {
                const userData = dailydata.flatMap((daily) => {
                    return daily.qr.map((oneentry) => {
                        const parts = oneentry.split('_');
                        const sing = { id: parts[0], regid: parts[0], guests: parts[1] };
                        return sing;
                    });
                });
                setSingleuser(userData);
            };
            await getsingleuserdata();
        };
        check();
    });

    return (
        <div className="lg:ml-52 md:ml-12">
            <div className="py-5">
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
            <div className="ml-12">
                {
                    singleUser.map((fin) => {
                        var ans = 0;
                        studentData.map((stu) => {
                            stu.regid === fin.regid ? (ans = stu) : console.log("not found")
                        })
                        return (
                            ans !== 0 ? (
                                <div key={ans.id}>
                                    <div className=" mb-2 rounded overflow-hidden shadow-lg flex mx-4 w-30%" key={ans.id}>
                                        <div className="sm:flex sm:justify-between sm:gap-4 sm:w-50%">
                                            <div className="p-2" style={{ display: 'flex', flexDirection: 'row' }}>
                                                <div style={{ display: 'flex', flexDirection: 'row' }} >
                                                    <h3 className="text-lg text-gray-900 sm:text-xl m-6">
                                                        {ans.name}
                                                    </h3>
                                                    <h3 className="text-lg text-gray-900 sm:text-xl m-6">
                                                        {ans.regid}
                                                    </h3>
                                                    <h3 className="text-lg text-gray-900 sm:text-xl m-6">
                                                        {fin.guests}
                                                    </h3>
                                                    <Link href={`mailto:${ans.email}`}>
                                                        <h3 className="button text-lg text-blue-500 sm:text-xl m-6">{ans.email}</h3>
                                                    </Link>
                                                    <button className="inline-block px-4 py-2 text-green-500 font-semibold border-2 border-green-500 rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:outline-none focus:ring focus:ring-green-100 m-4">
                                                        Profile
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (console.log("not found"))
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Sdashboard;