import React from 'react';

const App = () => {


    return (
    <div className=''>
          <section id="retailSection" className="bg-white dark:bg-gray-900">
                <div className="tracking-wide text-justify pt-4 sm:pt-12 px-16 sm:px-28 md:px-60 lg:px-96">
                    <div className="mt-4 md:mt-0">
                    {/* <img
                        className="w-16 flex dark:hidde rounded-lg"
                        src="/images/sampleqr.png"
                        alt="Inventory Image"
                    /> */}
                        <h2 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Scan Student Qr
                        </h2>
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                        Scanning a student&apos;s QR code in a hostel mess portal helps to track their attendance and meal preferences. It improves the mess&apos;s efficiency, generates reports and ensures the security of the hostel mess.
                        </p>
                       
                    </div>
                    {/* <div>
                    <img
                        className="w-44 dark:hidde rounded-lg"
                        src="/images/sampleqr.png"
                        alt="Inventory Image"
                    />
                    </div> */}
                  
                
                </div>
            </section>
        
    </div>
        
    );
};

export default App;
