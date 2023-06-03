import React, { useState } from 'react';
import QRCodeComponent from '../../components/qrcode/qrcodegen';

const MyPage = () => {
    const [qrcodetext, setqrcodetext] = useState("");
    return (
        <div className='p-20 flex-wrap justify-center'>
            <div class="text-center mb-20 content-center">
                <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                    QRCode <span class="text-indigo-600">Generator</span>
                </h3>
            </div>
            <div class="flex flex-wrap justify-center -mx-3 mb-12">
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                    </label>
                    <input class="leading-normal font-extrabold tracking-tight text-gray-900 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="Enter RegNo_Number of guests" onChange={(e) => setqrcodetext(e.target.value)} />
                </div>
            </div>
            <div className='flex justify-center items-center m-12'>
                <div >
                    <QRCodeComponent text={qrcodetext} />
                </div>
            </div>
            <div className='flex justify-center items-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900'>
                <p>Scan this QR Code</p>
            </div>
        </div>
    );
};

export default MyPage;
