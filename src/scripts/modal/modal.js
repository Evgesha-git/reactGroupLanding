export const modalVidep = () => {
    const elems = document.querySelectorAll(".video-modal");
    if (!elems) return;
    const show = (data) => {
        const popupContainer = document.createElement("div");
        popupContainer.classList.add("popup");
        const popupModal = document.createElement("div");
        popupModal.classList.add("popup__modal");
        const popupClose = document.createElement("div");
        popupClose.classList.add("popup__close");
        popupClose.innerHTML = "&#215;";
        const popupContent = document.createElement("div");
        popupContent.classList.add("popup__content");

        const content = `
            <video playsinline controls  loading="lazy">
                <source src="${data.src}" type="${data.type}" />
            </video>
        `;

        popupContent.innerHTML = content;

        popupContainer.addEventListener("click", (e) => {
            let target = e.target;

            if (target.classList.contains("popup") || target.classList.contains("popup__close")) {
                popupContainer.remove();
                document.body.classList.remove("modal-active");
            }
        });

        popupContainer.append(popupModal);
        popupModal.append(popupClose, popupContent);

        document.body.append(popupContainer);
        document.body.classList.add("modal-active");
    };

    const popUpHandler = (event) => {
        event.preventDefault();
        let elem = event.target;

        if (!elem) return;
        const video = elem.querySelector("source");
        const type = video.type;
        const src = video.src;

        show({ type, src });
    };

    elems.forEach((elem) => elem.addEventListener("click", popUpHandler));
};
