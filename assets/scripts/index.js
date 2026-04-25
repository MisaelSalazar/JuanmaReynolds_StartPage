// NAV
window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', scrollY > 50)
}, { passive: true })

// REVEAL
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('v') } })
}, { threshold: .07, rootMargin: '0px 0px -28px 0px' })
document.querySelectorAll('.r').forEach(el => obs.observe(el))
setTimeout(() => {
    document.querySelectorAll('.hero .r, .mq-wrap .r').forEach(el => el.classList.add('v'))
}, 60)

// ACCORDION
function toggleProject(head) {
    const card = head.closest('.project')
    const isOpen = card.classList.contains('open')
    document.querySelectorAll('.project.open').forEach(p => { if (p !== card) p.classList.remove('open') })
    card.classList.toggle('open', !isOpen)
}

// TABS
function switchTab(btn, tabId) {
    const wrap = btn.closest('.work-preview')
    wrap.querySelectorAll('.strat-tab').forEach(t => t.classList.remove('active'))
    wrap.querySelectorAll('.strat-panel').forEach(p => p.classList.remove('active'))
    btn.classList.add('active')
    document.getElementById(tabId).classList.add('active')
}

// MOBILE MENU
function toggleMenu() {
    const m = document.getElementById('mobileMenu')
    m.classList.toggle('open')
    document.body.style.overflow = m.classList.contains('open') ? 'hidden' : ''
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const t = document.querySelector(a.getAttribute('href'))
        if (t) {
            e.preventDefault()
            document.body.style.overflow = ''
            document.getElementById('mobileMenu').classList.remove('open')
            t.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    })
})

//TIMELINE CARDS
/**const btns = document.querySelectorAll('.exp-btn');
const cards = document.querySelectorAll('.exp-card');
let current = 0;
let timer;

function goTo(i) {
    btns.forEach(b => b.classList.remove('active'));
    cards.forEach(c => c.classList.remove('active'));
    btns[i].classList.add('active');
    cards[i].classList.add('active');
    current = i;
}

function startAuto() {
    timer = setInterval(() => {
        goTo((current + 1) % cards.length);
    }, 4000);
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        clearInterval(timer);        // pausa el auto al hacer clic
        goTo(Number(btn.dataset.index));
        startAuto();                 // reinicia el contador desde 0
    });
});

startAuto();**/

//SERVICIOS
document.querySelectorAll('.serv-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const i = btn.dataset.tab;
        document.querySelectorAll('.serv-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.serv-tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.querySelector(`.serv-tab-panel[data-panel="${i}"]`).classList.add('active');
    });
});