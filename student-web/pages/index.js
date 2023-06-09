import React from 'react'
import LoginForm from '@/components/login/Loginform'
import Heading from '@/components/login/Heading'
import Footer from '../components/footer/footer'

function Index() {
  return (
    <div className='homepageImage'>
      <div>
        <h1 className=' font-sans font-bold text-3xl sm:font-extrabold sm:text-4xl pt-28 text-center '>VJTI Hostel Mess Portal</h1>
      </div>
      <div className='pb-32'>
        <LoginForm/>
      </div>
      <Footer />
    </div>
  )
}

export default Index


