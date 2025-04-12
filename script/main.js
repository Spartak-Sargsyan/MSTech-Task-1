/** @format */

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

const lerp = (a, b, n) => a + (b - a) * n;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
});

function animate() {
    ringX = lerp(ringX, mouseX, 0.1);
    ringY = lerp(ringY, mouseY, 0.1);

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(animate);
}

animate();

const fadeSections = document.querySelectorAll('.fade-in-section');

const fadeObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

fadeSections.forEach((section) => {
    fadeObserver.observe(section);
});

const copyright = document.querySelector('.footer__text');

copyright.innerHTML = ` © ${new Date().getFullYear()} Grant Hotel.<br />  All rights reserved.`;

const socialLinkData = [
    { name: 'instagram', url: '#', icon: '../assets/image/instagram.svg' },
    { name: 'tiktok', url: '#', icon: '../assets/image/tiktok.svg' },
    { name: 'linkedin', url: '#', icon: '../assets/image/linkedin.svg' },
    { name: 'facebook', url: '#', icon: '../assets/image/facebook.svg' },
    { name: 'telegram', url: '#', icon: '../assets/image/telegram.svg' },
];

const container = document.getElementById('socialLinks');

socialLinkData.forEach((item) => {
    const a = document.createElement('a');
    a.href = item.url;

    const img = document.createElement('img');
    img.src = item.icon;
    img.alt = `${item.name} icon`;

    a.appendChild(img);
    container.appendChild(a);
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});

document.querySelector('#menu-bar').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});
