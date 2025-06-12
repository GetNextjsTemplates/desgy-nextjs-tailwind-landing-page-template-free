'use client'

import { ServiceType } from '@/app/types/service'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ServiceSkeleton from '../../Skeleton/ServiceSkeleton'

const Service = () => {
  const [service, setService] = useState<ServiceType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setService(data.ServiceData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='service' className='scroll-mt-20'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-20'>
          {/* COLUMN-1 */}
          <div className='lg:col-span-6 flex justify-center'>
            <div className='flex flex-col align-middle justify-center md:p-10'>
              <h2 className='pt-4 mt-5 text-center lg:text-start'>
                Built to Elevate Brands
              </h2>
              <p className='text-lg pt-4 font-normal leading-6 lg:leading-7 text-center lg:text-start text-bluegray'>
                At Dsign Agency, we offer a blend of creative and technical services — from digital marketing and UI/UX design to graphic design and cybersecurity. Our solutions are built to elevate your brand, engage your audience, and secure your digital assets.
              </p>
              <Link
                href={'/'}
                className='mt-4 text-xl font-medium text-primary flex gap-2 mx-auto lg:mx-0 hover:underline'>
                Learn more{' '}
                <Image
                  src={'/images/provide/arrow.svg'}
                  alt={'arrow'}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className='lg:col-span-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-x-36 px-10 py-12 bg-bluebg rounded-2xl'>
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <ServiceSkeleton key={i} />
                  ))
                : service.map((item, i) => (
                    <div
                      key={i}
                      className='bg-white rounded-2xl lg:-ml-32 p-6 shadow-md'>
                      <Image
                        src={item.imgSrc}
                        alt={item.imgSrc}
                        width={64}
                        height={64}
                        className='mb-5'
                      />
                      <p className='text-2xl font-semibold'>{item.country}</p>
                      <p className='text-lg font-normal text-bluegray my-2'>
                        {item.paragraph}
                      </p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
