"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import { Article } from "@/app/api/data";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  autoplay: false,
  speed: 500,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

const Articles = () => {
  return (
    <section className="relative dark:bg-midnight_text bg-grey overflow-hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) relative">
        <div className="text-center">
          <h3 className="text-blue text-22 font-normal tracking-widest">
            ARTICLES
          </h3>
          <h3 className="text-65 sm:text-6xl font-bold">Our latest post.</h3>
        </div>

        <Slider {...settings}>
          {Article.map((items, i) => (
            <div key={i}>
              <div className="bg-white dark:bg-darkmode m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative">
                <Image
                  src={items.imgSrc}
                  alt="gaby"
                  width={389}
                  height={262}
                  className="inline-block m-auto"
                />
                <Link href="/" className="absolute bg-primary text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full top-56 right-11  ">
                  {items.time} read
                </Link>
                <h4 className="text-2xl font-bold pt-6 text-black dark:text-white">
                  {items.heading}
                </h4>
                <h4 className="text-2xl font-bold pt-1 text-black dark:text-white">
                  {items.heading2}
                </h4>
                <div>
                  <h3 className="text-16 font-normal pt-6 pb-2 text-black/75 dark:text-white/75">
                    {items.name}
                  </h3>
                  <h3 className="text-16 font-normal pb-1 text-black/75 dark:text-white/75">
                    {items.date}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default Articles;
