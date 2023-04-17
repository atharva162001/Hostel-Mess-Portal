import React, { useState,useEffect } from 'react';
import { Form, Input,  InputNumber,Button,Select } from 'antd';
import InventoryIndiCard from "./InventoryIndiCard"
import AddProduct from "./AddProduct" 
import {db} from "../firebase-config"
import { getDocs, collection,addDoc } from "@firebase/firestore";


const App = () => {

    const userCollectionRef = collection(db, "inventory");
    const onFinish = async (event) => {
        // console.log('Success:', event);
        // console.log(event.name);
        // event.preventDefault();
        await addDoc(userCollectionRef, { name: event.name, content: event.content,category:event.category });
        setTimeout(function () {
          location.reload();
        }, 1000);
      };


    return (
    <div>
        <div className=' xl:mx-24 justify-center'>
            {/*Form Inputs and ends  */}
            <Form onFinish={onFinish} className='flex p-4  flex-wrap'>


            {/* form input starts */}
            <div className='w-full md:w-1/2 xl:w-1/4'>
            <Form.Item
                label="Product Name"
                name="name"
                wrapperCol={{span: 12}}
                rules={[
                    {
                    required: true,
                    message: 'Please input the Product Name!',
                    },
                ]}
                >
                <Input  />
            </Form.Item>
            </div>
            
             {/* form input number */}
                <div className='w-full md:w-1/2 xl:w-1/4 '>
             <Form.Item label="Quantity"  name="content">
                <InputNumber />
            </Form.Item>
            </div>


             <div className="flex w-full xl:w-1/4">   
            {/* for select tag */}
            <Form.Item className='md :ml-2' label="Category" name="category">   
            <Select 
                defaultValue="Select"
                style={{
                    width: 100,
                }}
                // onChange={handleChange}
                options={[
                    {
                    value: 'Kg',
                    label: 'Kg',
                    },
                    {
                    value: 'Ltr',
                    label: 'Ltr',
                    },
                
                ]}
            />
            </Form.Item> 

            <div className=''>
                  {/* button */}
                    <Form.Item
                    className=''
                        wrapperCol={{
                            // offset: 8,
                            span: 2,
                        }}
                        >
                    <Button className='mt-10 sm:mt-0 bg-blue-600 ml-4 ' type="primary" htmlType="submit">Submit</Button>
                    
                    </Form.Item>
            </div>
          
            </div>
        </Form>

        </div>
    </div>
        
    );
};

export default App;
