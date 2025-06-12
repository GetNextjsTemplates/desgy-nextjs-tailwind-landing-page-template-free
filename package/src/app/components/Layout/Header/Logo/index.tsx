import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/'>
      <div>
        <Image
          src={'/images/logo/logo.svg'}
          alt='dsign-logo'
          width={222}
          height={64}
        />
      </div>
    </Link>
  )
}

export default Logo
