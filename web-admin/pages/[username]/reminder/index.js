import { React, useRef } from 'react'
import Sidenavbar from '../../../components/snavbar'
import { useState, useEffect } from 'react';
import { db } from "../../../firebase-config";
import { collection, getDocs } from "@firebase/firestore"
import emailjs from '@emailjs/browser';
import Router, { useRouter } from 'next/router';
import Placeorderemail from '@/components/stockorder/placeorderemail';
function Reminder() {
    const [products, setProducts] = useState([]);
    const inventoryCollectionRef = collection(db, "inventory");
    const router = useRouter();
    const form = useRef();
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
        <div className="lg:ml-60 md:ml-12">
            <div className='py-8'></div>
            <Sidenavbar />
            {
                products.map((user) => {
                    if(user.content<=10){
                        return (
                              <Placeorderemail name={user.name} content={user.content} symbol={user.symbol} key={user.id} id={user.id}/>
                         );
                    }
                   
                })
            }

        </div>

    )
}

export default Reminder

