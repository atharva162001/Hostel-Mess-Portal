import React from 'react'
import StudentNotification from '../notifications'
import Studentcomplaint from '@/components/complaint/studentcomplaint'
import PleaseLog from '../../../components/login/Pleaselog'
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
function Complaintbox() {
  // ------------------------------authentication---------------------------------
  //  -----------------------------------------------------------------------------
  const router = useRouter();
  const [loggeduser, setLoggedUser] = useState("nouser");
  const [paramUser, setParamUser] = useState("");
  useEffect(() => {
    // checking login
    setLoggedUser(localStorage.getItem("username"));
    const url = router.asPath;
    const result = url.split('/');
    const Param = result[result.length - 2];
    setParamUser(Param);

  }, []);

  //  --------------------------------------------------------------------------------------
  // --------------------------------------authentication end------------------------------
  let content;

  if (paramUser==="nouser") {
    content = <PleaseLog></PleaseLog>;
  } else {
    content = (
      <div><Studentcomplaint /></div>
    )
  }
  return content;
}

export default Complaintbox