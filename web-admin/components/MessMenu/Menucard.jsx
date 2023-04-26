import React, { useState } from "react";
import { Button, Input, Select, Space } from "antd";
import { db } from "../../firebase-config";
import { updateDoc, doc } from "@firebase/firestore";

const Menucard = (props) => {
  const [visi1, setVisi1] = useState(false); //setting visibilities
  const [visi2, setVisi2] = useState(false);
  const [visi3, setVisi3] = useState(false);
  const [content1, setContent1] = useState(props.Breakfast);
  const [content2, setContent2] = useState(props.Lunch);
  const [content3, setContent3] = useState(props.Dinner);
  function submit1() {
    const updateMenu = async (id) => {
      const currDoc = doc(db, "Messmenu", id);
      const newfields1 = { Breakfast: content1 };
      await updateDoc(currDoc, newfields1);
    };

    updateMenu(props.id);
    setVisi1(false);
    setTimeout(()=>{
      window.location.reload();
    },1000)
  }
  function submit2() {
    const updateMenu = async (id) => {
      const currDoc = doc(db, "Messmenu", id);
      const newfields = { Lunch: content2 };
      await updateDoc(currDoc, newfields);
    };
    updateMenu(props.id);
    setVisi2(false);
    setTimeout(()=>{
      window.location.reload();
    },1000)
  }
  function submit3() {
    const updateMenu = async (id) => {
      const currDoc = doc(db, "Messmenu", id);
      const newfields = { Dinner: content3 };
      await updateDoc(currDoc, newfields);
    };
    updateMenu(props.id);
    setVisi3(false);
    setTimeout(()=>{
      window.location.reload();
    },1000)
  }

  return (
    <div className="">
      <div class="min-[1401px]:h-80 min-[767px]:h-96 max-[768px]:mx-8  px-6 py-4 my-4 dark:bg-gray-500 bg-gray-100 rounded-lg shadow-lg">
        {/* <h1>{props.Day}</h1> */}
        <div className="font-bold text-xl mb-2 dark:text-black text-[#27272a] text-center pb-2 border-b-4">{props.Day}</div>
        <p className="my-2">
          <div><span className="font-bold text-md mb-2 dark:text-black text-gray-900 font-serif">Breakfast: </span><span className="text-gray-700 dark:text-white">{props.Breakfast}</span></div>
        
        {visi1 ? (
          <Space direction="vertical" size="middle">
            <Space.Compact style={{ width: "100%" }}>
              <Input
                defaultValue={props.Breakfast}
                onChange={(e) => {
                  setContent1(e.target.value);
                }}
              />
              <button class="rounded-lg px-4 py-2 bg-gray-700 text-gray-100 text-xs hover:bg-slate-300 hover:text-black" onClick={submit1}>Update</button>
              {/* <Button className="text-[#0c0a09]" onClick={submit1}>
                Update
              </Button> */}
            </Space.Compact>
          </Space>
        ) : (
          <button class="rounded-lg px-4 py-1 bg-gray-700 text-gray-100 text-xs hover:bg-slate-300 hover:text-black" onClick={() => setVisi1(true)}>Edit</button>
          
        )}
        </p>

        <p className="my-2">
        <div><span className="font-bold text-md mb-2 dark:text-black text-gray-900 font-serif">Lunch: </span><span className="text-gray-700 dark:text-white ">{props.Lunch}</span></div>
        
        {visi2 ? (
          <Space direction="vertical" size="middle">
            <Space.Compact style={{ width: "100%" }}>
              <Input
                defaultValue={props.Lunch}
                onChange={(e) => {
                  setContent2(e.target.value);
                }}
              />
              <button class="rounded-lg px-4 py-2 bg-gray-700 text-gray-100 text-xs hover:bg-slate-300 hover:text-black" onClick={submit2}>Update</button>
            </Space.Compact>
          </Space>
        ) : (
          <button class="rounded-lg px-4 py-1 bg-gray-700 text-gray-100 text-xs hover:bg-slate-300 hover:text-black" onClick={() => setVisi2(true)}>Edit</button>
        )}
        </p>
        <p className="my-2">
        <div><span className="font-bold text-md mb-2 dark:text-black text-gray-900 font-serif">Dinner: </span><span className="text-gray-700 dark:text-white">{props.Dinner}</span></div>
        
        {visi3 ? (
          <Space direction="vertical" size="middle">
            <Space.Compact style={{ width: "100%" }}>
              <Input
                defaultValue={props.Dinner}
                onChange={(e) => {
                  setContent3(e.target.value);
                }}
              />
              <button class="rounded-lg px-4 py-2 bg-gray-700 text-gray-100 text-xs hover:bg-slate-300 hover:text-black" onClick={submit3}>Update</button>
            </Space.Compact>
          </Space>
        ) : (
          <button class="rounded-lg px-4 py-1 bg-gray-700 text-gray-100 text-xs hover:bg-slate-300 hover:text-black" onClick={() => setVisi3(true)}>Edit</button>
        )}
        </p>
      </div>
    </div>
  );
};

export default Menucard;
