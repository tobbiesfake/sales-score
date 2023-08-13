const leftNav = document.getElementById('left-nav');
const closeBtn = document.getElementById('close-btn');
const beardCrum = document.getElementById('breadcrum');

beardCrum.addEventListener('click', (e) => {
    leftNav.classList.remove('sm-0');
})
closeBtn.addEventListener('click', (e) => {
    leftNav.classList.add('sm-0');
})