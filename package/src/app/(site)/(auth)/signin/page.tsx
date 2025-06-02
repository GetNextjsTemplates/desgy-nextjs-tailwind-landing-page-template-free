import Signin from '@/app/components/Auth/SignIn'
import Breadcrumb from '@/app/components/Common/Breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In | Property',
}

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName='Sign In Page' />

      <Signin />
    </>
  )
}

export default SigninPage
