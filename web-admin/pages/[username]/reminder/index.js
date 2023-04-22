import { React, useRef } from 'react'
import Sidenavbar from '../../../components/snavbar'
import PleaseLog from "../../../components/login/PleaseLog"
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { db } from "../../../firebase-config";
import { collection, getDocs } from "@firebase/firestore"
import Placeorderemail from '@/components/stockorder/placeorderemail';
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


    let content;
    if (loggeduser !== paramUser) {
        content = <PleaseLog></PleaseLog>;
    } else {
        content = (
            <div className="">
                <div className='py-4'></div>
                
                <div>
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

            </div>
        )
    }
    return content;
}

export default Reminder

