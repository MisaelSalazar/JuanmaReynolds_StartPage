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
