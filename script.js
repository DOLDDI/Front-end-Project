const togleBtn = document.querySelector(".nav_button");
const items = document.querySelector(".nav_items");
const icons = document.querySelector(".nav_icons");

togleBtn.addEventListener('click', () => {
    items.classList.toggle('active');
    icons.classList.toggle('active');
});