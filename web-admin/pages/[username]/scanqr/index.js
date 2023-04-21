import React, { useState } from "react";
// import QR from "../../../components/qr/QrCodeReader";
import PleaseLog from "../../../components/login/PleaseLog"
import Head from "next/head";
import dynamic from "next/dynamic";
import Heading from "../../../components/qr/Heading"

const QRCodeReader = dynamic(() => import('../../../components/qr/QrCodeReader'), {
    ssr: false,
});

const App = () => {

    const [loggeduser, setLoggedUser] = useState("nouser");
    useEffect(() => {
        // for login
        setLoggedUser(localStorage.getItem("username"));
    }, []);


    
    let content;
    if (loggeduser === 'nouser') {
        content = <PleaseLog></PleaseLog>;
    } else {
        content = (
            <div className="bg-white dark:bg-gray-900 pb-16">
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
