import anime from "animejs";
import { animationEasing, del1, del2, del3, dd1, dd2, dd3, dd4, dd5 } from "../animateSlider";

export const slide3 = async () => {
    const item_1_1 = document.querySelector("#item_2_1");
    const item_1_2 = document.querySelector("#item_2_2");
    const item_1_3 = document.querySelector("#item_2_3");
    const item_1_4 = document.querySelector("#item_2_4");
    const item_1_5 = document.querySelector("#item_2_5");
    const text_1 = document.querySelector("#slide_2");
    const item_2_1 = document.querySelector("#item_3_1");
    const item_2_2 = document.querySelector("#item_3_2");
    const item_2_3 = document.querySelector("#item_3_3");
    const item_2_4 = document.querySelector("#item_3_4");
    const item_2_5 = document.querySelector("#item_3_5");
    const text_2 = document.querySelector("#slide_3");

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
        delay: dd4,
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
        delay: dd4,
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

export const slide3Rev = async () => {
    const item_2_1 = document.querySelector("#item_3_1");
    const item_2_2 = document.querySelector("#item_3_2");
    const item_2_3 = document.querySelector("#item_3_3");
    const item_2_4 = document.querySelector("#item_3_4");
    const item_2_5 = document.querySelector("#item_3_5");
    const text_2 = document.querySelector("#slide_3");
    const item_1_1 = document.querySelector("#item_4_1");
    const item_1_2 = document.querySelector("#item_4_2");
    const item_1_3 = document.querySelector("#item_4_3");
    const item_1_4 = document.querySelector("#item_4_4");
    const item_1_5 = document.querySelector("#item_4_5");
    const text_1 = document.querySelector("#slide_4");

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
        delay: dd3,
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