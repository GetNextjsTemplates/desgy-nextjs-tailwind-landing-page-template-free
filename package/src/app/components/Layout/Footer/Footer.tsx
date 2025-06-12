'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { FooterLinkType } from '@/app/types/footer'

const Footer = () => {
  const [footerLink, setFooterLink] = useState<FooterLinkType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFooterLink(data.FooterLinkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <footer className='bg-darkblue'>
      <div className=' container -mt-48'>
        <div className='mx-auto max-w-2xl pt-28 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='mt-24 mb-20 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8'>
            {/* COLUMN-1 */}

            <div className='col-span-4 md:col-span-12 lg:col-span-4'>
              <div className='mb-10'>
                <Image
                  src={'/images/logo/white-logo.svg'}
                  alt='dsign-logo'
                  width={222}
                  height={64}
                />
              </div>
              <div className='flex gap-6 items-center'>
                <Link
                  href='#'
                  className='bg-white/20 hover:bg-primary rounded-full shadow-xl p-3'>
                  <Icon
                    icon='fa6-brands:facebook-f'
                    width='16'
                    height='16'
                    className='text-white'
                  />
                </Link>
                <Link
                  href='#'
                  className='bg-white/20 hover:bg-primary rounded-full shadow-xl p-3'>
                  <Icon
                    icon='fa6-brands:instagram'
                    width='16'
                    height='16'
                    className='text-white'
                  />
                </Link>
                <Link
                  href='#'
                  className='bg-white/20 hover:bg-primary rounded-full shadow-xl p-3'>
                  <Icon
                    icon='fa6-brands:x-twitter'
                    width='16'
                    height='16'
                    className='text-white'
                  />
                </Link>
              </div>
            </div>

            {/* CLOUMN-2/3 */}

            {footerLink.map((item, i) => (
              <div
                key={i}
                className='group relative col-span-2 md:col-span-4 lg:col-span-2'>
                <ul>
                  {item.links.map((link, i) => (
                    <li key={i} className='mb-5'>
                      <Link
                        href={link.href}
                        className='text-white text-sm font-normal mb-6 hover:text-primary'>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* CLOUMN-4 */}

            <div className='col-span-4 md:col-span-4 lg:col-span-4'>
              <div className='flex gap-2'>
                <Image
                  src={'/images/footer/mask.svg'}
                  alt='mask-icon'
                  width={24}
                  height={24}
                />
                <p className='text-base font-normal text-offwhite'>
                  925 Filbert Street Pennsylvania 18072
                </p>
              </div>
              <div className='flex gap-2 mt-10'>
                <Image
                  src={'/images/footer/telephone.svg'}
                  alt='telephone-icon'
                  width={24}
                  height={24}
                />
                <Link href='tel:+ 45 34 11 44 11'>
                  <p className='text-base font-normal text-offwhite hover:text-primary'>
                    + 45 34 11 44 11
                  </p>
                </Link>
              </div>
              <div className='flex gap-2 mt-10'>
                <Image
                  src={'/images/footer/email.svg'}
                  alt='email-icon'
                  width={24}
                  height={24}
                />
                <Link href="mailto:info@gmail.com">
                  <p className='text-base font-normal text-offwhite hover:text-primary'>
                    info@gmail.com
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* All Rights Reserved */}

          <div className='py-5 lg:flex items-center justify-between border-t border-t-bordertop'>
            <h4 className='text-offwhite text-sm text-center lg:text-start font-normal'>
              @2025 Dsign Agency. All Rights Reserved by{' '}
              <Link
                href='https://getnextjstemplates.com/'
                className='hover:text-primary hover:underline'>
                GetNextjsTemplates
              </Link>
            </h4>
            <div className='flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start'>
              <h4 className='text-offwhite text-sm font-normal hover:text-primary hover:underline'>
                <Link
                  href='/'
                  target='_blank'
                  className='hover:text-primary hover:underline'>
                  Privacy policy
                </Link>
              </h4>
              <div className='h-5 bg-bordertop w-0.5'></div>
              <h4 className='text-offwhite text-sm font-normal hover:text-primary hover:underline'>
                <Link href='/' target='_blank'>
                  Terms & conditions
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
