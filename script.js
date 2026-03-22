// Перемикання мов
const langBtn = document.getElementById('lang-switch');
const uaElements = document.querySelectorAll('.lang-ua');
const enElements = document.querySelectorAll('.lang-en');

langBtn.addEventListener('click', () => {
    const isUA = langBtn.innerText === 'EN';
    langBtn.innerText = isUA ? 'UA' : 'EN';
    uaElements.forEach(el => el.style.display = isUA ? 'none' : 'block');
    enElements.forEach(el => el.style.display = isUA ? 'block' : 'none');
});

// Анімація при скролі
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Копіювання адреси
function copyAddr(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('copy-msg');
        toast.style.display = 'block';
        setTimeout(() => { toast.style.display = 'none'; }, 2000);
    });
}
