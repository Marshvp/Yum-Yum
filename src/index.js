import './styles/main.css'
import { createBackground } from './background';
import { createHome } from './home';
import { createMenu } from './menu';
import { createAbout } from './about';


//creates background
createBackground()

// add title and headline to header
const header = document.getElementById('headerEl');
const nav = document.getElementById('nav')
const title = document.createElement('h1');
const headline = document.createElement('h2');
title.innerHTML = 'Yum - Yum'
headline.innerHTML = 'Indulge in Sweet Delights at Yum Yum - Your Donut Haven!'
header.insertBefore(title, nav)
header.appendChild(headline)


///
// get content for append later
const content = document.getElementById('content')
const btn = document.querySelectorAll('button')

btn.forEach(e => {
    e.addEventListener('click', function() {
        loadPage(e.innerHTML);
    })
});

function clearContent () {
    content.innerHTML = '';
}

function loadPage(pageName) {
    clearContent()

    switch (pageName) {
        case 'Home':
            content.appendChild(createHome())
            break;
        case 'Menu':
            content.appendChild(createMenu())
            break;
        case 'About':
            content.appendChild(createAbout())
            break;
        default:
            console.log('Page not found:', pageName);
            break;
    }
    localStorage.setItem('currentPage', pageName);
}



window.onload = function() {
    // Retrieve the last visited page name from localStorage, default to 'Home'
    const lastPage = localStorage.getItem('currentPage') || 'Home';
    loadPage(lastPage);
};

