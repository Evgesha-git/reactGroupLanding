import anime from "animejs";
import { slide1, slide1Rev } from "./animateFunctions/animate1";
import { slide2, slide2Rev } from "./animateFunctions/animate2";
import { slide3, slide3Rev } from "./animateFunctions/animate3";
import { slide4, slide4Rev } from "./animateFunctions/animate4";

export const animationEasing = "easeInOutCubic";
export const container = document.querySelector("#principles");
export const del1 = 400;
export const del2 = 300;
export const del3 = 200;

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

    let done;

    const callbeck = (entries, observer) => {
        if (entries[0].isIntersecting) {
            // console.log(entries);
            // console.log(observer);
            document.body.style.overflow = "hidden";
        }
    };

    const options = {
        threshold: 0.9,
    };

    const observer = new IntersectionObserver(callbeck, options);
    observer.observe(container);

    window.addEventListener("wheel", async (e) => {
        if (document.body.style.overflow === "hidden") {
            if (!waiting) {
                if (e.deltaY > 0 && !isWheel.forvart) {
                    let f;
                    const data = iter.next();
                    f = data?.value;
                    done = data.done;
                    waiting = !waiting;

                    f?.next().then(() => {
                        waiting = !waiting;
                        if (done) {
                            document.body.style.overflow = "";
                        }
                    });
                    isWheel.next = false;
                } else if (e.deltaY < 0 && isWheel.next) {
                    let f;
                    const data = iter.next();
                    f = data?.value;
                    done = data.done;
                    waiting = !waiting;

                    f?.forvard().then(() => {
                        waiting = !waiting;
                        if (done) {
                            document.body.style.overflow = "";
                        }
                    });
                    isWheel.forvart = true;
                }
                if (done && waiting) {
                    // document.body.style.overflow = "";
                    iter = getAnimate();
                    isWheel.forvart = false;
                    isWheel.next = true;
                    endAnimate = true;
                    return;
                }
            }
        }
    });
};
