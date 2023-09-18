const about = document.querySelector('.about-us');

let aboutPage = '<section id="about"><h2>About Us</h2><p>We are a cozy little restaurant that serves delicious food in a warm and welcoming atmosphere.</p></section>'

const body = document.querySelector('body');

about.addEventListener('click', () => {
    
    body.innerHTML = '';
    body.innerHTML = aboutPage;
})

export {body}