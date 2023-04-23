import React from 'react'
import LoginForm from '@/components/login/LoginForm'
import Heading from '@/components/login/Heading'


function Index() {
  return (
    <div className='homepageImage'>
      <Heading></Heading>
      <div className='pb-32'>
      <LoginForm></LoginForm>
      </div>
    </div>
  )
}

export default Index


