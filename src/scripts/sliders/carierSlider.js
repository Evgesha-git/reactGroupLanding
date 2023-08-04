import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const carierSliders = () => {
    const photos = new Swiper(".photos ", {
        slidesPerView: "auto",
        // centeredSlides: true,

        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        freeMode: true,
        autoHeight: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
          '300': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '600': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '900': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '1440': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
      },
    });

    // const videos = new Swiper(".videos-swiper ", {
    //     slidesPerView: "auto",
    //     centeredSlides: true,

    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //     loop: true,
    //     freeMode: true,
    //     autoHeight: false,
    //     autoplay: {
    //         delay: 2000,
    //         disableOnInteraction: false,
    //     },
    // });

    const otziv = new Swiper(".speaking__items ", {
        slidesPerView: "auto",
        // centeredSlides: true,

        slidesPerView: 3,
        spaceBetween: 30,
        // loop: true,
        freeMode: true,
        autoHeight: false,
        breakpoints: {
            '300': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            '1440': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
};
