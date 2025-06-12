import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { RecordType } from '@/app/types/record'
import { ServiceType } from '@/app/types/service'
import { AboutType } from '@/app/types/about'
import { NetworkType } from '@/app/types/network'
import { FooterLinkType } from '@/app/types/footer'

const HeaderData: HeaderItem[] = [
  { label: 'Service', href: '/#service' },
  { label: 'About', href: '/#about' },
  { label: 'Network', href: '/#network' },
  { label: 'Contact Us', href: '/#contact' },
]

const CompanyData: { imgSrc: string }[] = [
  {
    imgSrc: '/images/carousel/google.svg',
  },
  {
    imgSrc: '/images/carousel/garnier.png',
  },
  {
    imgSrc: '/images/carousel/slack.png',
  },
  {
    imgSrc: '/images/carousel/udemy.png',
  },
  {
    imgSrc: '/images/carousel/google.svg',
  },
  {
    imgSrc: '/images/carousel/garnier.png',
  },
  {
    imgSrc: '/images/carousel/slack.png',
  },
  {
    imgSrc: '/images/carousel/udemy.png',
  },
]

const RecordData: RecordType[] = [
  {
    imgSrc: '/images/buyers/ourbuyers.svg',
    percent: '80k',
    heading: 'Our Buyers',
    subheading:
      'Trusted by 80,000+ global users across marketing, design, and tech.',
  },
  {
    imgSrc: '/images/buyers/projectcompleted.svg',
    percent: '90k',
    heading: 'Projects Completed',
    subheading:
      'Delivered high-impact digital solutions for startups and enterprises.',
  },
  {
    imgSrc: '/images/buyers/happybuyers.svg',
    percent: '80%',
    heading: 'Happy Clients',
    subheading:
      'Client satisfaction rate with consistent project delivery and results.',
  },
  {
    imgSrc: '/images/buyers/teammembers.svg',
    percent: '50+',
    heading: 'Team Members',
    subheading:
      'Creative thinkers, ethical hackers, and design experts working together.',
  },
]

const ServiceData: ServiceType[] = [
  {
    imgSrc: '/images/provide/marketing.svg',
    country: 'Marketing',
    paragraph:
      'Reach the right audience with performance-based digital marketing strategies.',
  },
  {
    imgSrc: '/images/provide/graphic.svg',
    country: 'Graphic Design',
    paragraph:
      'Create memorable visuals that strengthen your brand and message.',
  },
  {
    imgSrc: '/images/provide/heaking.svg',
    country: 'Hacking',
    paragraph:
      'Secure your website and apps with professional ethical hacking services.',
  },
  {
    imgSrc: '/images/provide/uidesign.svg',
    country: 'UI/UX Design',
    paragraph:
      'Design clean, intuitive interfaces for a smooth user experience.',
  },
]

const AboutData: AboutType[] = [
  {
    heading: 'Quality',
    subheading:
      'We deliver high-impact solutions with attention to detail and design precision.',
  },
  {
    heading: 'Communication',
    subheading:
      'We keep you in the loop with clear updates and responsive collaboration.',
  },
  {
    heading: 'Reliability',
    subheading:
      'Count on us to meet deadlines and exceed expectations every time.',
  },
]

const NetworkData: NetworkType[] = [
  {
    imgSrc: '/images/network/bangladesh.svg',
    country: 'Bangladesh',
    paragraph:
      'Collaborating with top creatives and developers across Dhaka and beyond.',
  },
  {
    imgSrc: '/images/network/america.svg',
    country: 'United States',
    paragraph:
      'Driving innovation with partners and startups in major U.S. tech hubs.',
  },
  {
    imgSrc: '/images/network/australia.svg',
    country: 'Australia',
    paragraph:
      'Supporting businesses in Sydney and Melbourne with tailored digital solutions.',
  },
  {
    imgSrc: '/images/network/china.svg',
    country: 'China',
    paragraph:
      'Delivering secure and scalable services across the Chinese digital market.',
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    links: [
      { label: 'Service', href: '/#service' },
      { label: 'About', href: '/#about' },
      { label: 'Network', href: '/#network' },
      { label: 'Contact Us', href: '/#contact' },
    ],
  },
  {
    links: [
      { label: 'Help', href: '/' },
      { label: 'Resources', href: '/' },
      { label: 'Application', href: '/' },
      { label: 'Team', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    CompanyData,
    RecordData,
    ServiceData,
    AboutData,
    NetworkData,
    FooterLinkData,
  })
}
