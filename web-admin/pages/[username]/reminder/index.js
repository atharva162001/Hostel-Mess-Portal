import React from 'react'
import Sidenavbar from '../../../components/snavbar'
import PleaseLog from "../../../components/login/PleaseLog"
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { db } from "../../../firebase-config";
import { collection, getDocs } from "@firebase/firestore"
function Reminder() {
     // ------------------------------authentication---------------------------------
    //  -----------------------------------------------------------------------------
    const router=useRouter();
    const [loggeduser,setLoggedUser]=useState("nouser");
    const [paramUser,setParamUser]=useState("");
    useEffect(() => {
        // checking login
        setLoggedUser(localStorage.getItem("username"));
        const url = router.asPath;
        const result = url.split('/');
        const Param = result[result.length - 2];
        setParamUser(Param);

    }, [router]);

   //  --------------------------------------------------------------------------------------
    // --------------------------------------authentication end------------------------------
    const [products, setProducts] = useState([]);
    const inventoryCollectionRef = collection(db, "inventory");

    //fetching products using firebase and useEffect
    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(inventoryCollectionRef);
            // console.log(data);
            setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getProducts();
        // console.log(products);
    }, []);


    let content;
    if (loggeduser !== paramUser) {
        content = <PleaseLog></PleaseLog>;
    } else {
        content = (
            <div className="lg:ml-60 md:ml-12">
                <div className='py-8'></div>
                <Sidenavbar />
                <div>
                    {
                        products.map((user) => {
                            return (
                                user.content <= 10 ? (<div className=" mb-4 rounded overflow-hidden shadow-lg flex mx-4 w-30%" key={user.id}>
                                    <div class="sm:flex sm:justify-between sm:gap-4 sm:w-50%">
                                        <div className="p-4">
                                            <h3 class="text-lg text-gray-900 sm:text-xl">
                                                Order {user.name}
                                            </h3>
                                            <p >
                                                Current content {user.content}{user.symbol}
                                            </p>
                                            <p>{user.postdate}</p>
                                            <p class="mt-1 text-sm font-medium text-gray-600">Only {user.content}{user.symbol} is remaining in the stock, please order the necessary supplies.</p>
                                        </div>
                                    </div>
                                </div>) : (console.log(""))
                            );


                        })
                    }
                </div>

            </div>
        )
    }
    return content;
}

export default Reminder