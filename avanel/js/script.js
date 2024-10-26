// Sticky Header Functionality
window.onscroll = function() {
    stickyHeader();
};

let header = document.querySelector(".header");
let sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Scroll-to-top Button
const scrollBtn = document.createElement('div');
scrollBtn.classList.add('scroll-top');
scrollBtn.innerHTML = '↑';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
