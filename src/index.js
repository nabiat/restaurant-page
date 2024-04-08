import './style.css';
import { pageLoad } from './page-load';
import { menuLoad } from './menu-load';

function tabSwitch() {
    let homeBtn = document.querySelector('.home');
    let menuBtn = document.querySelector('.menu');
    let content = document.getElementById('content');

    homeBtn.addEventListener('click', () => {
        content.innerHTML = '';
        pageLoad();
    });

    menuBtn.addEventListener('click', () => {
        content.innerHTML = '';
        menuLoad();
    });
}

pageLoad();
tabSwitch();