import React from 'react'
import Sidenavbar from '../../../components/snavbar'
import { useState, useEffect } from 'react';
import { db } from "../../../firebase-config";
import { collection, getDocs} from "@firebase/firestore"
function Reminder() {
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
  return (
    <div className="">
            <Sidenavbar />
            <div>
                {
                    products.map((user) => {
                        return (
                           user.content<=10 ? (  <div className=" mb-4 rounded overflow-hidden shadow-lg flex mx-4 w-30%" key={user.id}>
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
                       </div>):(console.log(""))
                        );


                    })
                }
            </div>

        </div>
  )
}

export default Reminder