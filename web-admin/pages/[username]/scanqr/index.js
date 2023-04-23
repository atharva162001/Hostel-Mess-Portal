import React, { useState ,useEffect} from "react";
// import QR from "../../../components/qr/QrCodeReader";
import { useRouter } from "next/router";
import PleaseLog from "../../../components/login/PleaseLog"
import Head from "next/head";
import dynamic from "next/dynamic";
import Heading from "../../../components/qr/Heading"
import SideNavbar from "../../../components/snavbar";

const QRCodeReader = dynamic(() => import('../../../components/qr/QrCodeReader'), {
    ssr: false,
});

const App = () => {
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


    
    let content;
    if (loggeduser !== paramUser) {
        content = <PleaseLog></PleaseLog>;
    } else {
        content = (
            <div className="bg-white dark:bg-gray-900 pb-16 pt-20">
                <Head>
                    <title>QR code</title>
                </Head>
                {/* <QR></QR> */}
                <Heading></Heading>
                <QRCodeReader></QRCodeReader>
                {/* <hr className="w-48 h-1 mx-auto my-4 bg-zinc-500 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
                {/* <QR></QR> */}
            </div>
        )
    }
    return content;
};

export default App;
