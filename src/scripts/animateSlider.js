import anime from "animejs";
import { slide1, slide1Rev } from "./animateFunctions/animate1";
import { slide2, slide2Rev } from "./animateFunctions/animate2";
import { slide3, slide3Rev } from "./animateFunctions/animate3";
import { slide4, slide4Rev } from "./animateFunctions/animate4";

export const animationEasing = "easeInOutCubic";
export const container = document.querySelector("#principles");
export const del1 = 300;
export const del2 = 200;
export const del3 = 100;

export const dd1 = 100;
export const dd2 = 300;
export const dd3 = 350;
export const dd4 = 450;
export const dd5 = 500;

export const sliderAnimate = () => {
    function* getAnimate() {
        yield {
            next: slide1,
            forvard: slide4Rev,
        };
        yield {
            next: slide2,
            forvard: slide3Rev,
        };
        yield {
            next: slide3,
            forvard: slide2Rev,
        };
        return {
            next: slide4,
            forvard: slide1Rev,
        };
    }

    const animateArray = [
        {
            next: slide1,
            forvard: slide1Rev,
        },
        {
            next: slide2,
            forvard: slide2Rev,
        },
        {
            next: slide3,
            forvard: slide3Rev,
        },
        {
            next: slide4,
            forvard: slide4Rev,
        },
    ];

    function elementInViewport(el) {
        var bounds = el.getBoundingClientRect();
        return (
            bounds.top > -10 && bounds.top < 10 // Елемент ниже верхней границы
            // window.innerHeight - bounds.top > 0 // Выше нижней
        );
    }

    let iter = getAnimate();
    let waiting = false;
    let endAnimate = true;
    const isWheel = {
        next: true,
        forvart: false,
    };
    const touches = {
        start: 0,
        end: 0,
    };
    let isVisible = false;

    let done;

    let animateIndex = -1;

    const callbeck = async (entries, observer) => {
        if (entries[0].isIntersecting) {
            // console.log(entries);
            // console.log(observer);
            document.body.style.overflow = "hidden";
            setTimeout(() => {
                console.log(entries[0].isIntersecting);
                container.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 100);
            isVisible = true;
        }
    };

    const options = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(callbeck, options);
    observer.observe(container);

    window.addEventListener("wheel", async (e) => {
        if (document.body.style.overflow === "hidden") {
            if (!waiting) {
                if (e.deltaY > 0) {
                    if (animateIndex < 0) {
                        animateIndex = 0;
                    }
                    let f = animateArray[animateIndex];
                    if (f) {
                        waiting = !waiting;
                        animateIndex++;
                    }

                    f?.next().then(() => {
                        waiting = !waiting;
                    });
                    isWheel.next = false;

                    if (animateIndex > animateArray.length - 1) {
                        document.body.style.overflow = "";
                        isVisible = false;
                    }
                } else if (e.deltaY < 0) {
                    if (animateIndex < 0 || animateIndex > animateArray.length - 1) {
                        animateIndex = animateArray.length;
                    }
                    animateIndex--;
                    let f = animateArray[animateIndex];
                    if (f) {
                        waiting = !waiting;
                    }

                    f?.forvard().then(() => {
                        waiting = !waiting;
                    });
                    isWheel.forvart = true;
                    if (animateIndex < 0) {
                        document.body.style.overflow = "";
                        isVisible = false;
                    }
                }
            }
        }
    });

    window.addEventListener("touchstart", (e) => {
        console.log(e.touches[0].pageY);
        touches.start = e.touches[0].pageY;
        let ee = new TouchEvent(e);
    });

    window.addEventListener("touchend", (e) => {
        // console.log(e.changedTouches[0].pageY);
        touches.end = e.changedTouches[0].pageY;
        let dir = touches.start - touches.end;

        if (dir > 0 && isVisible) {
            if (animateIndex < 0) {
                animateIndex = 0;
            }
            let f = animateArray[animateIndex];
            if (f) {
                waiting = !waiting;
                animateIndex++;
            }

            f?.next().then(() => {
                waiting = !waiting;
            });
            isWheel.next = false;

            if (animateIndex > animateArray.length - 1) {
                document.body.style.overflow = "";
                isVisible = false;
            }
        } else if (dir < 0 && isVisible) {
            if (animateIndex < 0 || animateIndex > animateArray.length - 1) {
                animateIndex = animateArray.length;
            }
            animateIndex--;
            let f = animateArray[animateIndex];
            if (f) {
                waiting = !waiting;
            }

            f?.forvard().then(() => {
                waiting = !waiting;
            });
            isWheel.forvart = true;
            if (animateIndex < 0) {
                document.body.style.overflow = "";
                isVisible = false;
            }
        }
    });
};
