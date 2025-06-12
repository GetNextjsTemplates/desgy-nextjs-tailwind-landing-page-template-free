'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Link from 'next/link'
import { articles } from '@/app/types/articles'
import ArticlesSkeleton from '../../Skeleton/Articles'

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  autoplay: false,
  speed: 500,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
}

const Articles = () => {
  // fetch data

  const [articles, setArticles] = useState<articles[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setArticles(data.ArticlesData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section id='Blog' className='relative bg-grey overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <div className='text-center'>
          <p className='text-primary text-xl font-normal tracking-widest'>
            ARTICLES
          </p>
          <h2>Our latest post.</h2>
        </div>

        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <ArticlesSkeleton key={i} />
              ))
            : articles.map((items, i) => (
                <div key={i}>
                  <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-4xl relative'>
                    <Image
                      src={items.imgSrc}
                      alt='gaby'
                      width={389}
                      height={262}
                      className='inline-block m-auto rounded-3xl'
                    />
                    <Link
                      href='/'
                      className='absolute text-base bg-primary text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full top-56 right-11'>
                      {items.time} read
                    </Link>
                    <h5 className='font-bold pt-6'>{items.heading}</h5>
                    <h5 className='font-bold pt-1'>{items.heading2}</h5>
                    <div>
                      <h3 className='text-sm font-normal pt-6 pb-2 text-black/75 dark:text-white/75'>
                        {items.name}
                      </h3>
                      <h3 className='text-sm font-normal pb-1 text-black/75 dark:text-white/75'>
                        {items.date}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}
export default Articles
