'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { RecordType } from '@/app/types/record'
import RecordSkeleton from '../../Skeleton/RecordSkeleton'

const Records = () => {
  const [record, setRecord] = useState<RecordType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setRecord(data.RecordData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='portfolio' className='scroll-mt-20'>
      <div className='container'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <RecordSkeleton key={i} />
              ))
            : record.map((items, i) => (
                <div
                  className='flex flex-col justify-center items-center border border-bluegray/20 rounded-2xl p-5 shadow-md'
                  key={i}>
                  <div className='flex justify-center border border-bluegray/20  p-2 w-10 rounded-lg'>
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={30}
                      height={30}
                    />
                  </div>
                  <p className='text-navyblue text-4xl lg:text-6xl font-semibold text-center my-5'>
                    {items.percent}
                  </p>
                  <h3 className='text-black text-2xl font-semibold text-center'>
                    {items.heading}
                  </h3>
                  <p className='text-bluegray text-lg font-normal text-center mt-2'>
                    {items.subheading}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Records
