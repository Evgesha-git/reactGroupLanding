import anime from "animejs";
import { animationEasing, del1, del2, del3, dd1, dd2, dd3, dd4, dd5 } from "../animateSlider";

export const slide1 = async () => {
    const item1 = document.querySelector("#item_1_1");
    const item2 = document.querySelector("#item_1_2");
    const item3 = document.querySelector("#item_1_3");
    const item4 = document.querySelector("#item_1_4");
    const item5 = document.querySelector("#item_1_5");
    const text = document.querySelector("#slide_1");

    const a1 = anime({
        targets: item1,
        opacity: [0, 1],
        translateX: ["100%", 0],
        duration: del1,
        // delay: 2000,
        easing: animationEasing,
    });
    const a2 = anime({
        targets: item2,
        opacity: [0, 1],
        translateX: ["100%", 0],
        duration: del1,
        delay: dd1,
        easing: animationEasing,
    });
    const a3 = anime({
        targets: item3,
        opacity: [0, 1],
        translateX: ["100%", 0],
        duration: del1,
        delay: dd2,
        easing: animationEasing,
    });
    const a4 = anime({
        targets: item4,
        opacity: [0, 1],
        translateX: ["100%", 0],
        duration: del1,
        delay: dd3,
        easing: animationEasing,
    });
    const a5 = anime({
        targets: item5,
        opacity: [0, 1],
        translateX: ["100%", 0],
        duration: del1,
        delay: dd4,
        easing: animationEasing,
    });

    const a6 = anime({
        targets: text,
        opacity: [0, 1],
        translateY: ["100%", 0],
        duration: del3,
        delay: dd5,
        easing: animationEasing,
    });

    return await Promise.all([a1.finished, a2.finished, a3.finished, a4.finished, a5.finished, a6.finished]);
};

export const slide1Rev = async () => {
    const item_2_1 = document.querySelector("#item_1_1");
    const item_2_2 = document.querySelector("#item_1_2");
    const item_2_3 = document.querySelector("#item_1_3");
    const item_2_4 = document.querySelector("#item_1_4");
    const item_2_5 = document.querySelector("#item_1_5");
    const text_2 = document.querySelector("#slide_1");
    const item_1_1 = document.querySelector("#item_2_1");
    const item_1_2 = document.querySelector("#item_2_2");
    const item_1_3 = document.querySelector("#item_2_3");
    const item_1_4 = document.querySelector("#item_2_4");
    const item_1_5 = document.querySelector("#item_2_5");
    const text_1 = document.querySelector("#slide_2");

    const a1_2 = anime({
        targets: item_2_1,
        opacity: [0, 1],
        translateX: ["100%", 0],
        duration: del1,
        // delay: 2000,
        easing: animationEasing,
        autoplay: false,
    });

    const a2_2 = anime({
        autoplay: false,
        targets: item_2_2,
        opacity: [0, 1],
        translateX: ["100%", 0],
        duration: del1,
        delay: dd1,
        easing: animationEasing,
    });

    const a3_2 = anime({
        autoplay: false,
        targets: item_2_3,
        opacity: [0, 1],
        translateX: ["100%", 0],
        duration: del1,
        delay: dd2,
        easing: animationEasing,
    });

    const a4_2 = anime({
        autoplay: false,
        targets: item_2_4,
        opacity: [0, 1],
        translateX: ["100%", 0],
        duration: del1,
        delay: dd3,
        easing: animationEasing,
    });
    const a5_2 = anime({
        autoplay: false,
        targets: item_2_5,
        opacity: [0, 1],
        translateX: ["80%", 0],
        duration: del1,
        delay: dd3,
        easing: animationEasing,
    });

    const a6_2 = anime({
        autoplay: false,
        targets: text_2,
        opacity: [0, 1],
        translateY: ["100%", 0],
        duration: del3,
        delay: dd5,
        easing: animationEasing,
    });

    const a1 = anime({
        targets: item_1_1,
        opacity: [1, 0],
        translateX: [0, "150%"],
        duration: del1,
        // delay: 2000,
        easing: animationEasing,
    });

    const a2 = anime({
        targets: item_1_2,
        opacity: [1, 0],
        translateX: [0, "100%"],
        duration: del1,
        delay: dd1,
        easing: animationEasing,
    });

    const a3 = anime({
        targets: item_1_3,
        opacity: [1, 0],
        translateX: [0, "100%"],
        duration: del1,
        delay: dd2,
        easing: animationEasing,
    });

    const a4 = anime({
        targets: item_1_4,
        opacity: [1, 0],
        translateX: [0, "100%"],
        duration: del1,
        delay: dd3,
        easing: animationEasing,
    });
    const a5 = anime({
        targets: item_1_5,
        opacity: [1, 0],
        translateX: [0, "80%"],
        duration: del2,
        delay: 500,
        easing: animationEasing,
    });

    const a6 = anime({
        targets: text_1,
        opacity: [1, 0],
        translateY: [0, "100%"],
        duration: del3,
        delay: 100,
        easing: animationEasing,
    });

    a1.finished.then(() => {
        a1_2.play();
    });

    a2.finished.then(() => {
        a2_2.play();
    });

    a3.finished.then(() => {
        a3_2.play();
    });

    a4.finished.then(() => {
        a4_2.play();
    });

    a5.finished.then(() => {
        a5_2.play();
    });

    a6.finished.then(() => {
        a6_2.play();
    });

    return await Promise.all([a1_2.finished, a2_2.finished, a3_2.finished, a4_2.finished, a5_2.finished, a6_2.finished]);
};
