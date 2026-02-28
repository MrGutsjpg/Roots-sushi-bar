// smooth scrolling for internal links
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// gallery interaction
const items = document.querySelectorAll('.gallery-item');
items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        clearActive();
        item.classList.add('active');
    });
    item.addEventListener('mouseleave', () => {
        item.classList.remove('active');
    });
    // keyboard support: toggle active with Enter/Space
    item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            clearActive();
            item.classList.toggle('active');
        }
    });
    // touch support for mobile
    item.addEventListener('touchstart', () => {
        clearActive();
        item.classList.add('active');
    });
});
function clearActive() {
    items.forEach(i => i.classList.remove('active'));
}
// remove active when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.gallery')) {
        clearActive();
    }
});
