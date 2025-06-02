'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Digital = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto lg:max-w-(--breakpoint-xl) px-4'>
        <div className="rounded-3xl bg-primary bg-[url('/images/digital/bg.svg')] bg-no-repeat bg-right-top pb-60 relative">
          <div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2'>
            {/* COLUMN-1 */}
            <div className='pt-24 lg:pl-24'>
              <h3 className='text-18 font-normal text-white mb-5 tracking-widest text-center lg:text-start uppercase mt-5'>
                Who we are
              </h3>
              <h4 className='text-3xl sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start lg:w-full'>
                We are a digital agency that builds amazing products.
              </h4>
              <div className='text-center lg:text-start'>
                <Link
                  href='#'
                  className='text-xl font-semibold text-white bg-deep-slate/80 hover:bg-deep-slate py-4 px-12 rounded-full'>
                  Get started
                </Link>
              </div>
            </div>
          </div>
          <div className='absolute -bottom-16 -right-20 xl:block hidden'>
            <Image
              src='/images/digital/girldoodle.svg'
              alt='doodle'
              width={815}
              height={691}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Digital
