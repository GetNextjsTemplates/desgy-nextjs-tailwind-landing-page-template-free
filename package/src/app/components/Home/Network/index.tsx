'use client'

import { NetworkType } from '@/app/types/network'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import NetworkSkeleton from '../../Skeleton/NetworkSkeleton'

const Network = () => {
  const [network, setNetwork] = useState<NetworkType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setNetwork(data.NetworkData)
      } catch (error) {
        console.error('Error fetching service', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='network' className='bg-babyblue scroll-mt-20'>
      <div>
        <div className='container'>
          <h2 className='text-center mb-10 max-w-2xl mx-auto lg:leading-20'>
            Connecting Globally, Delivering Locally
          </h2>
          <div>
            <Image
              src={'/images/network/map.webp'}
              alt={'map-image'}
              width={1400}
              height={800}
            />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-20'>
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <NetworkSkeleton key={i} />
                ))
              : network.map((item, i) => (
                  <div key={i} className='bg-white rounded-2xl p-5 shadow-md'>
                    <div className='flex justify-start items-center gap-2 border-b border-black/10'>
                      <Image
                        src={item.imgSrc}
                        alt={item.imgSrc}
                        width={55}
                        height={55}
                        className='mb-2'
                      />
                      <h4 className='text-xl font-medium text-midnightblue'>
                        {item.country}
                      </h4>
                    </div>
                    <h4 className='text-lg font-normal text-bluegrey my-2'>
                      {item.paragraph}
                    </h4>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Network
