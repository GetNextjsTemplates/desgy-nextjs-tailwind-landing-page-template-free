'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { workdata } from '@/app/types/workdata'
import WorkSkeleton from '../../Skeleton/Work'

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
}

const Work = () => {
  // fetch work data
  const [work, setWork] = useState<workdata[]>([])
  const [loading, setLoding] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setWork(data.WorkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoding(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section
      id='Team'
      className="relative dark:bg-darkmode py-4 bg-cover bg-center overflow-hidden before:absolute before:w-full before:h-full before:bg-[url('/images/wework/elipse.svg')] before:bg-no-repeat before:bg-center after:absolute after:w-1/3 after:h-1/3 after:bg-[url('/images/wework/vector.svg')] after:bg-no-repeat after:top-28 after:-right-12 after:-z-10">
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center overflow-hidden'>
          <h3 className='text-black my-5'>
            We work in several verticals.
          </h3>
        </div>
      </div>

      <Slider {...settings}>
        {loading
          ? Array.from({ length: 5 }).map((_, i) => <WorkSkeleton key={i} />)
          : work.map((items, i) => (
              <div key={i}>
                <div className='bg-white dark:bg-darkHeroBg m-3 py-14 my-10 text-center shadow-xl rounded-3xl'>
                  <div className='relative'>
                    <Image
                      src={items.imgSrc}
                      alt='gaby'
                      width={182}
                      height={182}
                      className='inline-block m-auto'
                    />
                    <div className='absolute right-16 bottom-0 bg-white shadow-linckedin p-5 rounded-full'>
                      <Image
                        src={'/images/wework/linkedin.svg'}
                        alt='greenbg'
                        width={30}
                        height={30}
                        className='inline-block'
                      />
                    </div>
                  </div>
                  <h6 className='text-xl text-black dark:text-white font-bold pt-14'>
                    {items.name}
                  </h6>
                  <p className='text-base dark:text-white font-normal pt-4 pb-2'>
                    {items.profession}
                  </p>
                </div>
              </div>
            ))}
      </Slider>
    </section>
  )
}
export default Work
