export const fedback = () => {
    const form = document.querySelector("#feedback__main");
    if (!form) return;

    const show = () => {
        const popupContainer = document.createElement("div");
        popupContainer.classList.add("feedback__popup");
        const popupModal = document.createElement("div");
        popupModal.classList.add("feedback__modal");
        const popupClose = document.createElement("div");
        popupClose.classList.add("feedback__close");
        popupClose.innerHTML = "&#215;";
        const popupContent = document.createElement("div");
        popupContent.classList.add("feedback__content");

        const content = `
        <h2 class="title">Спасибо!</h2>
        <p class="text">Ваша заявка успешно отправлена, мы свяжемся с вами в течении 24 часов с момента отправки заявки</p>
        <a href="/" class="link">Вернуться на главную</a>
        `;

        popupContent.innerHTML = content;

        popupContainer.addEventListener("click", (e) => {
            let target = e.target;

            if (target.classList.contains("feedback__popup") || target.classList.contains("feedback__close")) {
                popupContainer.remove();
                document.body.classList.remove("modal-active");
            }
        });

        popupContainer.append(popupModal);
        popupModal.append(popupClose, popupContent);

        document.body.append(popupContainer);
        document.body.classList.add("modal-active");
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        show();
    });
};
