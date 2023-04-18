import React, { useState,useEffect } from 'react';
import InventoryIndiCard from "../Inventory/InventoryIndiCard"
import AddProduct from "../Inventory/AddProduct" 
import Heading from "./Heading"
import {db} from "../../firebase-config"
import { getDocs, collection } from "@firebase/firestore";


const App = () => {
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
        <div>
            <Heading></Heading>
            <AddProduct></AddProduct>
            <div className='justify-center grid  min-[550px]:grid-cols-2 max-[763px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'> 
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
};

export default App;
