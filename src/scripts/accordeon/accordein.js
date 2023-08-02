// @ts-check

export const accordeon = () => {
    const container = document.querySelector(".vakant__accordeon");
    if (!container) return;
    const items = container.querySelectorAll(".vakant__tile");

    const accordeonHandler = (e) => {
        let target = e.target;

        if (!target.classList.contains("head")) {
            target = target.closest(".head");
        }
        const parent = target.parentElement;

        items.forEach((item) => {
            if (item !== parent) {
                const head = item.querySelector(".head");
                item.classList.remove("active");
                const content = item.querySelector(".desc");
                content?.classList.remove("active");
                //@ts-ignore
                content.style.maxHeight = null;
            }
        });

        const content = target.nextElementSibling;
        if (!content) return;

        parent.classList.toggle("active");
        content.classList.toggle("active");
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    };

    items.forEach((item) => {
        const title = item.querySelector(".head");
        title?.addEventListener("click", (e) => {
            accordeonHandler(e);
        });
    });
};
