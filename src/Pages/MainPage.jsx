import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import { useContext } from "react";
import React, { useState, useRef, useEffect } from "react";

import {
  Card,
  AiringSchedule,
  ForYou,
  Footer,
  UpcomingSeason,
} from "../Components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../css/slider.css";
import { Autoplay, Pagination, Mousewheel } from "swiper";
import HomePageLoader from "../Loading/HomePageLoader";

const MainPage = (props) => {
  const data = useContext(DataContext);

  return (
    <>
      {Object.keys(props.recent).length === 0 ? (
        <HomePageLoader />
      ) : (
        <>
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Mousewheel, Pagination, Autoplay]}
            className="mySwiper"
          >
            {props.slider &&
              props.slider.map((rec) => (
                <div className="banner-card" key={rec.id}>
                  <SwiperSlide>
                    <img src={rec?.cover} loading="lazy" alt={rec.id} />
                    <div className="banner-text">
                      <Link to={`/anime-details/${rec.id}`}>
                        <h4>{rec.title.english}</h4>

                        <button className="watch">Watch Now</button>
                      </Link>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
          </Swiper>
          {/* <History/> */}
        </>
      )}
      {data && (
        <div className="index-container">
          <Link
            to="/home"
            className="index-button px-3 mt-350:px-2 py-2 mt-414:px-4 mt-414:py-3 inline-flex items-center bg-blue-600 btn__primary mt-350:space-x-3 rounded shadow-lg overflow-hidden"
          >
            <span className="pt-0.5 ">Visit {data.website_title}</span>
          </Link>

          <div
            className="indexcontent mt-4"
            dangerouslySetInnerHTML={{
              __html: data.website_content,
            }}
          />
        </div>
      )}
      <Footer />
    </>
  );
};

export default MainPage;
