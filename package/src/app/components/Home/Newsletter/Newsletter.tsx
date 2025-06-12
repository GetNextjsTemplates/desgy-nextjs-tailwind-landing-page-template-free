import Image from 'next/image'

const Newsletter = () => {
  return (
    <section>
      <div className='relative z-1'>
        <div className='container bg-primary rounded-2xl'>
          <div className='grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8'>
            {/* COLUMN-1 */}
            <div className='hidden lg:block'>
              <div className='float-right pt-20 relative'>
                <Image
                  src={'/images/newsletter/bgImage.png'}
                  alt='bgimg'
                  width={588}
                  height={334}
                />
                <div className='absolute top-10 right-0'>
                  <Image
                    src={'/images/newsletter/leaf.svg'}
                    alt='leafimg'
                    width={81}
                    height={81}
                  />
                </div>
                <div className='absolute bottom-8 left-2'>
                  <Image
                    src={'/images/newsletter/circel.svg'}
                    alt='circleimg'
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>

            {/* COLUMN-2 */}
            <div className='p-10 flex flex-col justify-center'>
              <h3 className='mb-3 text-white'>
                Sign up to our newsletter.
              </h3>
              <p className='text-base font-normal mb-7 text-offwhite'>
                Craven omni memoria patriae zombieland clairvius narcisse
                religionis sunt diri undead historiarum.
              </p>
              <div className='flex gap-0'>
                <input
                  type='Email address'
                  name='q'
                  className='py-4 text-sm w-full text-black bg-white rounded-l-lg pl-4'
                  placeholder='@enter email-address'
                  autoComplete='off'
                />
                <button className='bg-midblue text-white font-medium py-2 px-4 rounded-r-lg'>
                  <Image
                    src={'/images/newsletter/plane.svg'}
                    alt='plane-img'
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
