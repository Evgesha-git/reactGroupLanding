import "./html/index.html";
import "./html/carier.html";
import "./html/feedback.html";
import "./html/politis.html";
import "./html/404.html";

import "./styles/index.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Swiper from "swiper";
import "swiper/scss";
import { carierSliders } from "./scripts/sliders/carierSlider";
import { nav } from "./scripts/nav/nav";
import { modalVidep, modalMainVideo } from "./scripts/modal/modal";
import { fedback } from "./scripts/fedbackSend/fedbackSend";

gsap.registerPlugin(ScrollTrigger);

var lang = "ru";
var languageData;

try {
    async function loadLanguageFile(lang) {
        if (languageData) {
            return Promise.resolve(languageData[lang]);
        } else {
            let data = await import("./translations.json");

            languageData = data;
            return data[lang];
        }
    }

    function applyLanguageData(languageData) {
        languageData.forEach(({ elem, type, text }) => {
            var element = document.querySelector(elem);
            if (element) {
                if (type === "placeholder") {
                    element.placeholder = text;
                }
                element.textContent = text;
            }
        });
    }

    function toggleLanguagesMenu(e) {
        let target = e.target;
        if (target.id !== "language") {
            target = target.closest("#language");
        }
        const parent = target.parentElement;

        var languagesChange = parent.querySelector("#languages-change");
        languagesChange.style.display = languagesChange.style.display === "none" ? "block" : "none";
    }

    function setLanguage(selectedLang) {
        lang = selectedLang;
        try {
            const ru = document.querySelectorAll("#ru-language");
            const en = document.querySelectorAll("#en-language");
            const ruen = document.querySelectorAll(".enru");
            ru.forEach((item) => item?.classList.toggle("active", lang === "ru"));
            en.forEach((item) => item?.classList.toggle("active", lang === "ru"));
            ruen.forEach((item) => (item.textContent = lang.toUpperCase()));
        } catch (e) {
            console.log(e);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        var savedLang = localStorage?.getItem("selectedLanguage");
        lang = savedLang || lang;
        setLanguage(lang);
        loadLanguageFile(lang).then((languageData) => {
            applyLanguageData(languageData);
        });
        initSwiper();
        initAnimations();
    });

    document.querySelectorAll("#language")?.forEach((item) => {
        item.addEventListener("click", function (event) {
            toggleLanguagesMenu(event);
            event.stopPropagation();
        });
    });

    document.addEventListener("click", function (event) {
        var languagesChange = document.querySelectorAll("#languages-change");
        var languageButton = document.querySelectorAll("#language");

        languagesChange.forEach((item, i) => {
            if (!item?.contains(event.target) && languageButton[i] !== event.target) {
                item.style.display = "none";
            }
        });
    });

    [...document.querySelectorAll("#ru-language")].map((item) =>
        item.addEventListener("click", () => {
            setLanguage("ru");
            loadLanguageFile(lang).then((languageData) => applyLanguageData(languageData));
        })
    );

    [...document.querySelectorAll("#en-language")].map((item) =>
        item.addEventListener("click", () => {
            setLanguage("en");
            loadLanguageFile(lang).then((languageData) => applyLanguageData(languageData));
        })
    );

    var swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 60,
        speed: 800,
        loop: true,
        pagination: {
            el: ".pagination",
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "active",
            renderBullet: (index, className) => {
                var slideNumber = (index + 1).toString().padStart(2, "0");
                return `<button class="${className}">${slideNumber}</button>`;
            },
        },
        allowTouchMove: false,
    };

    var mySwiper = new Swiper(".swiper-container", swiperOptions);

    function initSwiper() {
        const swiperContainer = document.querySelector(".swiper-container");
        const navigationButtons = document.querySelectorAll(".navigation button");

        const mySwiper = new Swiper(swiperContainer, {
            effect: "coverflow",
            pagination: {
                el: ".swiper-pagination",
                type: "custom",
            },
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoHeight: false,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            on: {
                slideChange: () => {
                    const activeIndex = mySwiper.activeIndex;
                    navigationButtons.forEach((button, index) => {
                        button.classList.toggle("active", index === activeIndex);
                    });
                },
            },
            allowTouchMove: false,
        });

        navigationButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                mySwiper.slideTo(index);
            });
        });
    }

    function animateValue(element, start, end, duration, suffix = "") {
        if (!element) return;
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentCount = Math.floor(progress * (end - start) + start);
            element.textContent = currentCount.toLocaleString() + suffix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    document.addEventListener("DOMContentLoaded", function () {
        const video = document.getElementById("video-background");
        const playButton = document.getElementById("playButton");

        // Функция для запуска видео
        if (!video) return;
        if (!playButton) return;
        function playVideo() {
            video.play();
        }

        // Запускаем видео при загрузке страницы
        playVideo();

        // Запускаем видео при клике на кнопку
        playButton.addEventListener("click", playVideo);
    });

    function animateScrollTrigger(element, trigger) {
        gsap.fromTo(element, { transform: "translate(0, 100%)", ease: "power2.inOut", opacity: 0 }, { transform: "translate(0, 0)", opacity: 1, duration: 1, scrollTrigger: trigger });
    }

    function initAnimations() {
        const counters = [
            { element: document.getElementById("num1"), start: 0, end: 9, suffix: "+" },
            { element: document.getElementById("num2"), start: 0, end: 14 },
            { element: document.getElementById("num3"), start: 0, end: 1600 },
            { element: document.getElementById("num4"), start: 0, end: 2000000, suffix: "+" },
        ];

        counters.forEach((counter) => {
            const animationDuration = 2000;

            gsap.to(counter.element, {
                innerHTML: counter.start,
                duration: 0,
            });

            ScrollTrigger.create({
                trigger: "#stats",
                start: "top 100%",
                end: "bottom 100%",
                onEnter: () => {
                    animateValue(counter.element, counter.start, counter.end, animationDuration, counter.suffix);
                },
                onLeaveBack: () => {
                    animateValue(counter.element, counter.end, counter.start, animationDuration, counter.suffix);
                },
            });
        });

        gsap.fromTo(
            "#main",
            {
                ease: "power2.inOut",
                duration: 10,
                // height: "100vh",
            },
            {
                scrollTrigger: {
                    trigger: "#main",
                    start: "80% 80%",
                    end: "100% 80%",
                    markers: false,
                },
                // height: window.innerWidth >= 768 ? "calc(640 / 1440 * 100vw)" : "calc(603 / 390 * 100vw)",
            }
        );

        gsap.utils.toArray("#europe, #africa, #latam").forEach((element) => {
            animateScrollTrigger(element, {
                trigger: "#reactworld",
                start: "40% 100%",
                end: "bottom 100%",
                markers: false,
            });
        });

        gsap.utils.toArray("#adv #item-1, #adv #item-2, #adv #item-3, #adv #item-4, #adv #title").forEach((element) => {
            animateScrollTrigger(element, {
                trigger: "#adv",
                start: "0% 100%",
                end: "bottom 100%",
                markers: false,
            });
        });

        gsap.utils.toArray("#principles #title, #principles .item").forEach((element) => {
            animateScrollTrigger(element, {
                trigger: "#principles",
                start: "top 100%",
                end: "bottom 100%",
                markers: false,
            });
        });

        gsap.utils.toArray("#swipers #title, #swipers .container").forEach((element) => {
            animateScrollTrigger(element, {
                trigger: "#swipers",
                start: "top 100%",
                end: "80% 100%",
                markers: false,
            });
        });

        gsap.utils.toArray("#international #title, #international .item").forEach((element) => {
            animateScrollTrigger(element, {
                trigger: "#international",
                start: "top 100%",
                end: "80% 100%",
                markers: false,
            });
        });

        gsap.utils.toArray("#our-cutting #title, #our-cutting .item").forEach((element) => {
            animateScrollTrigger(element, {
                trigger: "#our-cutting",
                start: "top 100%",
                end: "80% 100%",
                markers: false,
            });
        });

        // Анимации для всех блоков внутри секции #stats
        gsap.utils.toArray("#stats .items, #stats #title, #stats .number").forEach((element) => {
            animateScrollTrigger(element, {
                trigger: "#stats",
                start: "top 100%",
                end: "bottom 100%",
                markers: false,
            });
        });
    }

} catch (e) {
    console.log(e);
}


carierSliders();
nav();
modalVidep();
modalMainVideo();
fedback();