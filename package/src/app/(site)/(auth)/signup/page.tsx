import SignUp from '@/app/components/Auth/SignUp'
import Breadcrumb from '@/app/components/Common/Breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up | Property',
}

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName='Sign Up Page' />

      <SignUp />
    </>
  )
}

export default SignupPage
