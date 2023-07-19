import React from "react";
import { useRouter } from "next/router";
import { db } from "../../../firebase-config";
import { useState, useEffect } from "react";
import { getDocs, collection } from "@firebase/firestore";
import Menucard from "../../../components/Messmenu/menucard";
import PleaseLog from '../../../components/login/Pleaselog';


function Messmenu() {
 // ------------------------------authentication---------------------------------
    //  -----------------------------------------------------------------------------
    const router = useRouter();
    const [loggeduser, setLoggedUser] = useState("nouser");
    const [paramUser, setParamUser] = useState("");
    useEffect(() => {
        // checking login
        setLoggedUser(localStorage.getItem("username"));
        const url = router.asPath;
        const result = url.split('/');
        const Param = result[result.length - 2];
        setParamUser(Param);

    }, []);

    //  --------------------------------------------------------------------------------------
    // --------------------------------------authentication end------------------------------

  
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "Messmenu");
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(userCollectionRef);
        // console.log(data);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getUsers();
    }, []);
      
    let content;

    if (paramUser==="nouser") {
      content = <PleaseLog></PleaseLog>;
    } else {
      content = (
        <div className="pt-24 dark:bg-gray-900 ">
        <div className=" font-extrabold  dark:text-blue-600 text-4xl  text-center">Mess Menu</div>
        <div className="lg:ml-20 lg:mr-20 lg:mt-10 md:ml-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4">
            {users.map((user) => {
                return (
                    <Menucard
                        key={user.id}
                        id={user.id}
                        Day={user.Day}
                        Breakfast={user.Breakfast}
                        Lunch={user.Lunch}
                        Dinner={user.Dinner}
                    />
                );
            })}
        </div>
    </div>
      )
    }
    return content;

}

export default Messmenu;
