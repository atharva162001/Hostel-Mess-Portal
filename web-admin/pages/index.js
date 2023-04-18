import { async } from "@firebase/util";
import { useContext, useEffect, useState } from "react";
import SideNavbar from "../components/snavbar";
// import { AppContext } from "../../../context/AppContext";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase-config";
import { collection, getDocs } from "@firebase/firestore"
import Link from 'next/link';
import {Router,useRouter} from "next/router";
const Login = () => {
  
  const router = useRouter();
  const userCollectionRef = collection(db, "admins");
  const [users, setUsers] = useState([]);
  // const [currusername, setcurrentusername] = useState([]);
  // const [currpass, setcurrpass] = useState([]);

  const userFound = () => {
    alert("Logged in Successfully");
    router.push("/admin");
  };
  const userNotFound = () => {
    alert("You have entered wrong Email or Password");
    router.push("/");
  };

  const handleClickLogIn=(e)=>{
    var count = 0;
    e.preventDefault();
    const currname=e.target.name.value;
    const currpass=e.target.password.value;
    var userFound1 = false;
    console.log(users);
    users.map((user) => {
      user.username === currname && user.password === currpass
        ? (userFound1 = true)
        : (count = count + 1);
    });

    {
      userFound1 === true ? userFound() : userNotFound();
    }

  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      // console.log(data);
      // setUsers(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="mt-20 ">
      <div className="container ">
        <h2 class="login-title">Admin</h2>

        <form class="login-form" onSubmit={(e) => {handleClickLogIn(e)}}>
          <div>
            <label for="name">Username</label>
            <input
              id="name"
              type="text"
              placeholder="Admin username"
              name="name"
              required
              // onChange={(e)=>{setcurrentusername(e.target.value)}}
            />
          </div>

          {/* <div>
            <label for="email">Email </label>
            <input
              id="email"
              type="email"
              placeholder="me@example.com"
              name="email"
              required
            />
          </div> */}

          <div>
            <label for="password">Password </label>
            <input
              id="password"
              type="password"
              placeholder="password"
              name="password"
              required
              // onChange={(e)=>{setcurrpass(e.target.value)}}
            />
          </div>

          <button class="btn btn--form" type="submit" value="Log in">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
