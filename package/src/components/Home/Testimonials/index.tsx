"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Testimonials } from "@/app/api/data";

interface TestimonialType {
  name: string;
  profession: string;
  comment: string;
  imgSrc: string;
  rating: number;
}

interface TestimonialCardProps {
  items: TestimonialType;
}

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 2000,
  cssEase: "linear",
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
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ items }) => {
  const validRating = Math.min(Math.max(items.rating, 0), 5);

  return (
    <div className="relative py-10">
      <div className="bg-white dark:bg-darkHeroBg shadow-testimonial m-3 p-10 rounded-3xl">
        <Image
          src={items.imgSrc}
          alt={`${items.name} - ${items.profession} testimonial image`}
          width={71}
          height={71}
          className="inline-block m-auto absolute top-3"
        />
        <h4 className="text-16 font-medium text-testColor my-4 text-black dark:text-white">
          {items.comment}
        </h4>
        <hr style={{ color: "border" }} />
        <div className="flex justify-between">
          <div>
            <h3 className="text-16 font-medium pt-4 pb-2 text-black dark:text-white">
              {items.name}
            </h3>
            <h3 className="text-xs font-medium pb-2 text-black/50 dark:text-white/50">
              {items.profession}
            </h3>
          </div>
          <div className="flex mt-5">
            {Array.from({ length: 5 }, (_, i) => (
              <Icon
                key={i}
                icon="twemoji:star"
                width="18"
                className={`mr-1 ${i < validRating ? "text-yellow-500" : "text-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial: React.FC = () => {
  return (
    <section className="bg-testimonial dark:bg-darkmode bg-cover bg-center overflow-hidden before:absolute before:w-full before:h-full before:bg-[url('/images/wework/elipse.svg')] before:bg-no-repeat before:bg-center" id="testimonial-section">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md)">
        <div className="">
          <div className="text-center">
            <h3 className="text-4xl sm:text-6xl font-bold text-black dark:text-white my-3">
              See what others are saying.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-black/50 dark:text-white/50 lg:mr-48 my-4">
              See what others are saying.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-black/25 dark:text-white/25 lg:-mr-32 my-4">
              See what others are saying.
            </h3>
          </div>
          <div className="mt-20">
            <Slider {...settings}>
              {Testimonials.map((items, i) => (
                <TestimonialCard key={i} items={items} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
