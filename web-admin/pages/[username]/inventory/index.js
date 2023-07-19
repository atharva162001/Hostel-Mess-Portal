import React from "react";
import InventoryMapCard from "../../../components/Inventory/InventoryMapCard";
import Head from "next/head";
import { useRouter } from "next/router";
import PleaseLog from "../.././../components/login/PleaseLog";
import { useState, useEffect } from "react";

function Inventory() {
  // ------------------------------authentication---------------------------------
  //  -----------------------------------------------------------------------------
  const router = useRouter();
  const [loggeduser, setLoggedUser] = useState("nouser");
  const [paramUser, setParamUser] = useState("");
  useEffect(() => {
    // checking login
    setLoggedUser(localStorage.getItem("username"));
    const url = router.asPath;
    const result = url.split("/");
    const Param = result[result.length - 2];
    setParamUser(Param);
  }, [router]);

  //  --------------------------------------------------------------------------------------
  // --------------------------------------authentication end------------------------------

  let content;
  if (loggeduser !== paramUser) {
    content = <PleaseLog></PleaseLog>;
  } else {
    content = (
      <div className="pt-16">
        {/* <h1>Inventory</h1> */}
        <Head>Inventory Management</Head>
        <InventoryMapCard></InventoryMapCard>
      </div>
    );
  }
  return content;
}

export default index;
