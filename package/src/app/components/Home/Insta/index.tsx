import Image from 'next/image'
import Link from 'next/link'

const Insta = () => {
  return (
    <section className='container mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:-mb-44 lg:-mb-34 '>
      <div className='grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {/* Image Container 1 */}
        <div className='relative group mx-auto overflow-hidden rounded-3xl'>
          {/* Image */}
          <Image
            src='/images/insta/insta1.png'
            width={306}
            height={306}
            alt='instaOne'
            className='w-full h-full object-cover'
          />

          {/* Sliding Overlay */}
          <Link href='https://instagram.com' target='_blank'>
            <div className='absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-3xl flex items-center justify-center'>
              <Image
                src='/images/insta/instagram.svg'
                alt='instagram'
                width={36}
                height={36}
                className='cursor-pointer'
              />
            </div>
          </Link>
        </div>

        {/* Image Container 2 */}
        <div className='relative group mx-auto overflow-hidden rounded-3xl'>
          <Image
            src='/images/insta/insta2.png'
            width={306}
            height={306}
            alt='instaTwo'
            className='w-full'
          />

          {/* Sliding Overlay */}
          <Link href='https://instagram.com' target='_blank'>
            <div className='absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-3xl flex items-center justify-center'>
              <Image
                src='/images/insta/instagram.svg'
                alt='instagram'
                width={36}
                height={36}
                className='cursor-pointer'
              />
            </div>
          </Link>
        </div>

        {/* Image Container 3 */}
        <div className='relative group mx-auto overflow-hidden rounded-3xl'>
          <Image
            src='/images/insta/insta3.png'
            width={306}
            height={306}
            alt='instaThree'
            className='w-full'
          />
          {/* Sliding Overlay */}
          <Link href='https://instagram.com' target='_blank'>
            <div className='absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-3xl flex items-center justify-center'>
              <Image
                src='/images/insta/instagram.svg'
                alt='instagram'
                width={36}
                height={36}
                className='cursor-pointer'
              />
            </div>
          </Link>
        </div>

        {/* Image Container 4 */}
        <div className='relative group mx-auto overflow-hidden rounded-3xl'>
          <Image
            src='/images/insta/insta4.png'
            width={306}
            height={306}
            alt='instaFour'
            className='w-full'
          />
          {/* Sliding Overlay */}
          <Link href='https://instagram.com' target='_blank'>
            <div className='absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-3xl flex items-center justify-center'>
              <Image
                src='/images/insta/instagram.svg'
                alt='instagram'
                width={36}
                height={36}
                className='cursor-pointer'
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Insta
