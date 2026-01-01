lucide.createIcons();

/* Landing Page */
function openWebsite() {
    const landing = document.getElementById('landing-page');
    const main = document.getElementById('main-content');

    landing.style.opacity = '0';

    setTimeout(() => {
        landing.style.display = 'none';
        main.style.display = 'block';
        setTimeout(() => main.style.opacity = '1', 50);
    }, 800);
}

/* Particles */
const pContainer = document.getElementById('particles');
setInterval(() => {
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerHTML = Math.random() > 0.5 ? '❤️' : '✨';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.fontSize = Math.random() * 15 + 10 + 'px';
    p.style.animationDuration = Math.random() * 5 + 5 + 's';
    pContainer.appendChild(p);
    setTimeout(() => p.remove(), 10000);
}, 400);

/* Letter Toggle */
function toggleLetter(show) {
    document.getElementById('envelope').classList.toggle('hidden', show);
    document.getElementById('letterContent').classList.toggle('hidden', !show);
}

/* Lightbox */
function openLightbox(url, caption = "") {
    const modal = document.getElementById('modal');
    document.getElementById('modalImg').src = url;
    document.getElementById('modalCaption').innerText = caption;
    modal.style.display = 'flex';
}

/* Gift Box */
let isMusicPlaying = false;
let giftOpened = false;

function openGift() {
    if (giftOpened) return;   // 🔒 prevent re-trigger
    giftOpened = true;

    document.querySelector('.gift-wrapper').classList.add('open');

    const music = document.getElementById('giftMusic');
    const btn = document.getElementById('musicToggle');

    music.volume = 0.6;
    music.play().then(() => {
        isMusicPlaying = true;
        btn.textContent = "🔊";
        btn.classList.remove('hidden');
    }).catch(err => {
        console.log("Autoplay blocked:", err);
    });
}

/* 🔊 Toggle Music (FIXED) */
function toggleMusic(e) {
    e.stopPropagation();   // 🔥 MOST IMPORTANT LINE

    const music = document.getElementById('giftMusic');
    const btn = document.getElementById('musicToggle');

    if (isMusicPlaying) {
        music.pause();
        btn.textContent = "🔇";
    } else {
        music.play();
        btn.textContent = "🔊";
    }

    isMusicPlaying = !isMusicPlaying;
}


