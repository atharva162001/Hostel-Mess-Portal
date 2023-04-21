import React from "react";
import Sidenavbar from "../../../components/snavbar";
import PleaseLog from "../.././../components/login/PleaseLog"
import { db } from "../../../firebase-config";
import { useState, useEffect } from "react";
import { getDocs, collection } from "@firebase/firestore";
import Menucard from "../../../components/MessMenu/Menucard";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

function Messmenu() {
  // for login
  const [loggeduser, setLoggedUser] = useState("nouser");

  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "Messmenu");
  useEffect(() => {
    // checking login
    setLoggedUser(localStorage.getItem("username"));

    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      // console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  let content;
  if (loggeduser === 'nouser') {
    content = <PleaseLog></PleaseLog>;
  } else {
    content = (<div>
      <div className="mt-10 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-gray-700 to-slate-700 text-center">Mess Menu</div>
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
    </div>)
  }
  return content;
}

export default Messmenu;
