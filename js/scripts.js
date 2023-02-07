function menuToggle() {
    document.getElementById('primaryNav').classList.toggle("open");
}

const x = document.getElementById('mobileMenu');

x.onclick = menuToggle;