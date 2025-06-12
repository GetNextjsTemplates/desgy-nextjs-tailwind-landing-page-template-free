import Image from 'next/image'

const Review = () => {
  return (
    <section>
      <div className='container'>
        <div className='relative'>
          <div>
            <h2 className='text-navyblue text-center max-w-2xl mx-auto'>
              What Our Clients Say About Us
            </h2>
            <p className='text-lg font-normal text-darkgray text-center mt-4'>
              Event madness gathering innoies,& tech enthusiasts in Speced.{' '}
              <br /> do more informations.
            </p>
          </div>
          <div>
            <Image
              src={'/images/clientsay/avatars.png'}
              alt='avatar-image'
              width={1061}
              height={733}
              className='hidden lg:block mx-20'
            />
            <Image
              src={'/images/clientsay/bgimage.svg'}
              alt='avatar-image'
              width={1061}
              height={733}
              className='hidden lg:block z-10 absolute top-56 xl:left-20 -left-10'
            />
          </div>
          <div className='lg:absolute lg:top-[45%] xl:left-[32%] lg:left-[29%]'>
            <Image
              src={'/images/clientsay/user.png'}
              alt='user-image'
              width={168}
              height={168}
              className='mx-auto pt-10 lg:pb-10'
            />
            <div className='lg:inline-block bg-white rounded-2xl p-5 shadow-md'>
              <p className='text-base font-normal text-center text-darkgray'>
                Build your financial literacy within a transparent <br />{' '}
                community. Follow other investors, share people from <br />{' '}
                different professional backgrounds, and never be alone.
              </p>
              <p className='text-2xl font-medium text-center py-2'>
                Jony Scotty
              </p>
              <p className='text-sm font-normal text-center'>UI Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review
