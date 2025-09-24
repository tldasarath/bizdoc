'use client';
import loadBackgroudImages from '../../common/loadBackgroudImages';
import React, { useEffect } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {
  const swiperOptions = {
    modules: [Pagination, Navigation],
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.testimonials-minim .swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.testimonials-minim .swiper-button-next',
      prevEl: '.testimonials-minim .swiper-button-prev',
    },
  };
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  const testimonials =[{
    name:'Asha Susano',
    review:"The team was efficient, knowledgeable, and handled everything with professionalism. They guided me through the process , ensured all paperwork was in order, and completed the service within the promised timeframe. Communication was clear throughout, and they were always available to answer any questions I had. I highly recommend them to anyone looking for hassle-free document processing and clearance."
  },{name:"Anju Sreedhar",
    review:"I am thoroughly impressed with the exceptional service provided by Bizdoc Business Setup. Their unparalleled professionalism, strategic precision, and commitment to excellence have made my business formation journey remarkably smooth and efficient. From consultation to execution, every interaction exudes reliability, integrity, and efficiency. I highly recommend Bizdoc Business Setup to anyone seeking a dynamic, trustworthy, and future-focused business consultancy that transforms visions into reality with absolute finesse."
  },{name:"Neeliyedath Shamnad",review:"Bizdoc businessman service in Dubai made the entire document clearance process smooth and hassle-free. Their team is professional, efficient, and kept me updated every step of the way. Highly recommend for anyone in Dubai looking for reliable assistance!"}]
  return (
    <section
      className="testimonials-minim section-padding bg-img overlay-center"
      data-background="/assets/imgs/background/b1.jpg"
      data-overlay-dark="9"
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-15">Testimonials</h6>
              <h3 className="fw-600 d-rotate wow">
                <span className="rotate-text">
                  What People <span className="fw-200">Say?</span>
                </span>
              </h3>
            </div>
          </div>
          <div className="col-lg-8 position-re">
            <div
              className="testim-swiper"
              data-carousel="swiper"
              data-loop="true"
              data-space="30"
            >
              <Swiper
                {...swiperOptions}
                id="content-carousel-container-unq-testim"
                className="swiper-container"
                data-swiper="container"
              >
               { testimonials.map((values)=>(<SwiperSlide>
                  <div className="item">
                    <div className="content">
                      <div className="text">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="256.721"
                          height="208.227"
                          viewBox="0 0 256.721 208.227"
                          className="qout-svg"
                        >
                          <path
                            data-name="Path"
                            d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                            transform="translate(121.55 640.568)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="1"
                            opacity="0.322"
                          ></path>
                        </svg>
                        <p className="fz-30">
                       {values.review}
                        </p>
                      </div>
                      <div className="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
                        {/* <div>
                          <div className="fit-img circle">
                            <img src="/assets/imgs/testim/t1.jpg" alt="" />
                          </div>
                        </div> */}
                        <div className="ml-20">
                          <h5>{values.name}</h5>
                          {/* <span className="sub-title main-color">
                            Founder & CEO
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>))}
               
              </Swiper>
            </div>
            <div className="swiper-arrow-control control-abslout">
              <div className="swiper-button-prev">
                <span className="ti-arrow-left"></span>
              </div>
              <div className="swiper-button-next">
                <span className="ti-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
