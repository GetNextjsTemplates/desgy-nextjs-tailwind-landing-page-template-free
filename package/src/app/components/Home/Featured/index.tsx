'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { featureddata } from '@/app/types/featureddata'
import FeaturedSkeleton from '../../Skeleton/Featured'

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
        padding: '28px',
        borderRadius: '20px',
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
        padding: '28px',
        borderRadius: '20px',
      }}
      onClick={onClick}
    />
  )
}
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  speed: 500,
  nextArrow: (
    <SampleNextArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  ),
  prevArrow: (
    <SamplePrevArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  ),
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
}

const Featured = () => {
  const [featured, setFeatured] = useState<featureddata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFeatured(data.FeaturedData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="relative bg-deepSlate dark:bg-darkmode  after:absolute after:w-1/4 after:h-1/4 after:bg-[url('/images/wework/vector.svg')]  after:top-72 after:right-0 after:bg-no-repeat">
      <div className='container mx-auto max-w-(--breakpoint-xl) px-4 relative'>
        <div className='text-center overflow-hidden'>
          <h3 className='text-4xl sm:text-6xl font-bold text-black my-2'>
            Featured works.
          </h3>
          <h3 className='text-4xl sm:text-6xl font-bold text-black/50 lg:mr-48 my-2'>
            Featured works.
          </h3>
          <h3 className='text-4xl sm:text-6xl font-bold text-black/25 lg:-mr-32 my-2 '>
            Featured works.
          </h3>
        </div>

        <Slider {...settings}>
          {loading
            ? Array.from({ length: 2 }).map((_, index) => (
                <FeaturedSkeleton key={index} />
              ))
            : featured.map((items, i) => (
                <div key={i}>
                  <div className='bg-transparent m-3 rounded-3xl'>
                    <Image
                      src={items.imgSrc}
                      alt='gaby'
                      width={636}
                      height={620}
                      className='rounded-2xl'
                    />
                    <div className='w-345'>
                      <h4 className='text-xl sm:text-5xl max-w-sm font-bold text-center sm:text-start mt-12 text-black'>
                        {items.heading}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}
export default Featured
