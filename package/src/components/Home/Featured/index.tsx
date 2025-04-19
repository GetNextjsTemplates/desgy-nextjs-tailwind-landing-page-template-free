"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { postData } from "@/app/api/data";

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.3)",
        padding: "28px",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.3)",
        padding: "28px",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
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
  cssEase: "linear",
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
};

const Featured = () => {
  return (
    <section className="relative bg-deepSlate dark:bg-darkmode -mt-80 pt-80 after:absolute after:w-1/4 after:h-1/4 after:bg-[url('/images/wework/vector.svg')]  after:top-72 after:right-0 after:bg-no-repeat">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) relative">
        <div className="text-center mt-24">
          <h3 className="text-65 sm:text-6xl font-bold text-white my-2">
            Featured works.
          </h3>
          <h3 className="text-65 sm:text-6xl font-bold text-white/50 lg:mr-48 my-2">
            Featured works.
          </h3>
          <h3 className="text-65 sm:text-6xl font-bold text-white/25 lg:-mr-32 my-2">
            Featured works.
          </h3>
        </div>

        <Slider {...settings}>
          {postData.map((items, i) => (
            <div key={i}>
              <div className="bg-transparent m-3 rounded-3xl">
                <Image
                  src={items.imgSrc}
                  alt="gaby"
                  width={636}
                  height={620}
                  className="rounded-2xl"
                />
                <div className="w-345">
                  <h4 className="sm:text-5xl font-bold text-center sm:text-start mt-12 text-white">
                    {items.heading}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default Featured;
