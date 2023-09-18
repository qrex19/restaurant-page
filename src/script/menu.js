import {body} from './about'

const menu = '<section id="menu"><h2>Menu</h2><ul><li><h3>Appetizers</h3><ul><li>Bruschetta</li><li>Mozzarella Sticks</li><li>Spinach and Artichoke Dip</li></ul></li><li><h3>Main Courses</h3><ul><li>Spaghetti Bolognese</li><li>Grilled Salmon</li><li>Chicken Alfredo</li></ul></li><li><h3>Desserts</h3><ul><li>Tiramisu</li><li>Chocolate Fondue</li><li>Cheesecake</li></ul></li></ul></section>'

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    body.innerHTML = '';
    body.innerHTML = menu;
    console.log('hello world');
})