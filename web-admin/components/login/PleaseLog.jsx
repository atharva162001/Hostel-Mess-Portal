import React, { useEffect } from 'react'
import {useRouter} from 'next/router';

function Heading() {
    const router=useRouter();
    useEffect(() => {

        const timeout = setTimeout(() => {
            router.push('/');
          }, 100); // 1 seconds
         
          return () => clearTimeout(timeout); // clean up the timeout on unmount  

    }, [router]);
    
  return (
    <div>
        {/* <h1 className='dark:text-white font-sans font-bold text-3xl sm:font-extrabold sm:text-4xl pt-28 text-center '>Please Log In to access portal.</h1> */}
        {/* <h1 className='dark:text-white font-sans font-bold text-2xl sm:font-bold sm:text-3xl pt-28 text-center '>You are being redirected!!</h1> */}
    </div>
  )
}

export default Heading