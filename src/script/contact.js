import {body} from './about'

const contactBody = '<section id="contact"><h2>Contact Us</h2><p>If you have any questions or would like to make a reservation, please feel free to contact us:</p><address>Email: <a href="mailto:info@myrestaurant.com">info@myrestaurant.com</a><br>Phone: <a href="tel:+123456789">+1 (234) 567-89</a><br>Address: 123 Main Street, City, State ZIP</address></section>'

const contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', () => {
    body.innerHTML = ''
    body.innerHTML = contactBody
})