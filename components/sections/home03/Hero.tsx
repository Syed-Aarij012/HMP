"use client";

import Link from "next/link";
import Image from "next/image";
import { home03HeroSlides } from "@/data/hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css/effect-fade";
import "swiper/css/pagination";

function Hero() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      className="swiper mainslider slider style8"
      slidesPerView={1}
      speed={500}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
    >
      {home03HeroSlides.map((slide, index) => (
        <SwiperSlide className="swiper-slide" key={slide.id}>
          <div className="slider-item">
            <div className="img-slider">
              <Image
                className="img-item lazyload"
                data-src={slide.image}
                src={slide.image}
                alt={slide.title}
                width={2880}
                height={1500}
                sizes="100vw"
                priority={index === 0}
              />
            </div>
            <div className="container full relative">
              <div className="content flex justify-space text-start gap-20">
                <div className="heading">
                  <div className="fs-18 fw-6 luxury">{slide.subtitle}</div>
                  <h1 className="text-color-1 fade-item fade-item-1">
                    {slide.title}
                  </h1>
                  <p className="text-color-1 font fade-item fade-item-2">
                    {slide.description}
                  </p>
                  <div className="chat-wrap fade-item fade-item-4">
                    <Link className="sc-button" href={`/listing-list`}>
                      <span>Go to Listing</span>
                      <i className="icon-carus-arright" />
                    </Link>
                    <Link className="sc-button" href={`/contact`}>
                      <span>Contact Us</span>
                      <i className="icon-carus-arright" />
                    </Link>
                  </div>
                </div>
                <div className="po-content-two">
                  <div className="specifications-wrap style3">
                    {slide.specifications.map((spec, index) => (
                      <div
                        key={spec.id}
                        className={`specifications fade-item1 fade-item-${index + 1}`}
                      >
                        <div className="specifications-icon">
                          <i className={spec.icon} />
                        </div>
                        <div className="specifications-content">
                          <p className="text-color-1 font">{spec.label}</p>
                          <div className="fs-18 fw-6 font text-color-1">
                            {spec.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;
