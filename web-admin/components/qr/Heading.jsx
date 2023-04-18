import React from 'react';

const App = () => {


    return (
    <div className=''>
          <section id="retailSection" className="bg-white dark:bg-gray-900">
                <div className="gap-8   grid grid-cols-1 items-center py-8 px-4 mx- max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4  text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Scan Student Qr
                        </h2>
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                        Scanning a student&apos;s QR code in a hostel mess portal helps to track their attendance and meal preferences. It improves the mess&apos;s efficiency, generates reports and ensures the security of the hostel mess.
                        </p>
                       
                    </div>
                    <div>
                    <img
                        className="w-44 dark:hidde rounded-lg"
                        src="/images/sampleqr.png"
                        alt="Inventory Image"
                    />
                    </div>
                  
                
                </div>
            </section>
        
    </div>
        
    );
};

export default App;
