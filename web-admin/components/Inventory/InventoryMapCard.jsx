import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import InventoryIndiCard from "../Inventory/InventoryIndiCard"
import AddProduct from "../Inventory/AddProduct"
import Heading from "./Heading"
import PleaseLog from '../login/PleaseLog';
import { db } from "../../firebase-config"
import { getDocs, collection, addDoc, doc } from "@firebase/firestore";

const App = () => {
    // ------------------------------authentication---------------------------------
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

    }, []);


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
            <div>
                <Heading></Heading>
                <AddProduct></AddProduct>
                {/* <h1>{loggeduser}</h1> */}
                {/* <h1>{paramUser}</h1> */}
                <div className=' dark:bg-gray-900 justify-center grid  min-[550px]:grid-cols-2 max-[763px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
                    {products.map((product) => {
                        return (
                            <InventoryIndiCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                content={product.content}
                                category={product.category}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }

    return content;
};

export default App;
