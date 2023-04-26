import React, { useEffect, useState } from 'react';
import { Card, Space, Button, Typography, InputNumber } from 'antd';
import {db} from "../../firebase-config"
import {updateDoc,doc,deleteDoc } from "@firebase/firestore";

const { Text } = Typography;

const InventoryIndiCard = ({id,name,content,category}) => {
  const [productName, setProductName] = useState(name);
  const [productContent, setProductContent] = useState(content);
  const [productCategory,setProductCategory] = useState(category);
  const [newContent, setNewContent] = useState(0);
  const [visibility, setVisibility] = useState(false);

  
  // updates the product quantity
  function onUpdate() {
    setProductContent(newContent);

    const updateProduct = async (id) => {
    
       const userDoc = doc(db,"inventory",id);
       const newFields = {content:newContent};
       await updateDoc(userDoc,newFields);
    };

    updateProduct(id);
    setVisibility(false); // hide the update controls after update
    setTimeout(()=>{
      window.location.reload();
    },1000)
  }

  function onEdit() {
    setVisibility(true); // show the update controls on click
  }

  const onDelete= async()=>{
    const userDoc = doc(db,"inventory",id);
    await deleteDoc(userDoc);
    await setTimeout(()=>{
      window.location.reload();
    },1000)
  };


  return (

    <div className='p-2 drop-shadow-xl  '>
        <Card
          className='text-center border-gray-300 '
          title={productName}
          style={{
            
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: 220,
            
          }}
        >
          <Text className='text-base' type="warning">Available <span className='font-bold'>{productContent} {productCategory}</span></Text>
          <br />
          {visibility ? (
            <div>
              <InputNumber
                size="small"
                min={0}
                defaultValue={0}
                onChange={value => setNewContent(value)}
              />
              <Button className='border-2  m-2' onClick={()=>onUpdate()}>Update</Button>
            </div>
          ) : (
            <div className='flex'>
                <Button className='border-2 border-yellow-300 m-1' onClick={()=>onEdit()}>Update</Button>
                <Button className='border-2 border-red-300 m-1 ' onClick={()=>onDelete()}>Delete</Button>
            </div>
            
          )}
        </Card>
    
    </div>

  );
};

export default InventoryIndiCard;
