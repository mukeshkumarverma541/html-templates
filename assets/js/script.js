document.addEventListener('click', function(e) {
    if (e.target.classList.contains('hamburger-toggle')) {
        e.target.children[0].classList.toggle('active');
    }
})


const header = document.querySelector('header')

window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > header.offsetHeight + 150) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}