import React from 'react';

const App = () => {


    return (
    <div>
          <section id="retailSection" className="bg-white dark:bg-gray-900">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Inventory Management
                        </h2>
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                        An inventory management system for a hostel mess portal aims to ensure the right amount of food items and supplies are available to meet customer demand while minimizing food waste and spoilage.
                         The system helps to track stock levels, place orders for restocking, and provide an accurate picture of actual usage to adjust ordering and stocking levels. 
                        </p>
                       
                    </div>
                    <img
                        className="w-full dark:hidde rounded-lg"
                        src="/images/inventory.png"
                        alt="Inventory Image"
                    />
                
                </div>
            </section>
        
    </div>
        
    );
};

export default App;
