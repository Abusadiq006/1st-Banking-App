import { getLoggedInUser } from '@/lib/actions/user.action'
import React from 'react'

const Signin = async () => {
  const loggedInUser = await getLoggedInUser()

  return (
    <section className='flex-center size-full
    max-sm:px-6'>
      <AuthForm  type="sign-in"/>
    </section>
  )
}

export default Signin