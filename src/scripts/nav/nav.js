export const nav = () => {
    const button = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu-header');
    if (!button) return;
    if (!menu) return;

    button.addEventListener('click', () => {
        button.classList.toggle('active');
        menu.classList.toggle('active');
        if (menu.style.maxWidth){
            menu.style.maxWidth = null;
        }else{
            menu.style.maxWidth = 220 + 'px';
        }
    });
}