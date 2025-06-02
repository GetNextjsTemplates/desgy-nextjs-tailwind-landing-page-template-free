'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import AboutSkeleton from '../../Skeleton/AboutUs'

const Aboutus = () => {
  // fetch about data
  const [about, setAbout] = useState<aboutdata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setAbout(data.Aboutdata)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='About' className=' bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-(--breakpoint-xl) px-4 relative z-1'>
        <div className='lg:p-12 px-2 py-2 bg-grey rounded-3xl'>
          <Image
            src='/images/aboutus/dots.svg'
            width={100}
            height={100}
            alt='dots-image'
            className='absolute bottom-1 -left-20'
          />
          <p className='text-center text-primary text-18 tracking-widest uppercase mt-10'>
            about us
          </p>
          <h4 className='text-center text-4xl lg:text-65 font-bold pb-12'>
            Know more about us.
          </h4>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 xl:gap-x-32 lg:gap-x-16 mt-16'>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <AboutSkeleton key={index} />
                ))
              : about.map((item, i) => (
                  <div
                    key={i}
                    className='hover:bg-darkmode bg-white rounded-3xl p-8 shadow-xl group mb-28'>
                    <h4 className='text-4xl font-semibold  text-black group-hover:text-white mb-5'>
                      {item.heading}
                    </h4>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgSrc}
                      width={100}
                      height={100}
                      className='mb-5'
                    />
                    <h4 className='text-lg font-normal text-black group-hover:text-white mb-5'>
                      {item.paragraph}
                    </h4>
                    <Link
                      href='#'
                      className='text-18 font-semibold text-primary hover-underline flex items-center'>
                      {item.link}
                      <Icon
                        icon='tabler:chevron-right'
                        width='20'
                        height='20'
                      />
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
