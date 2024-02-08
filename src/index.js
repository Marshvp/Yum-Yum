import './styles/main.css'
import { createBackground } from './background';
import { createHome } from './home';

//creates background
createBackground()

// add title and headline to header
const header = document.getElementById('headerEl');
const nav = document.getElementById('nav')
const title = document.createElement('h1');
const headline = document.createElement('h2');
title.innerHTML = 'Yum Yum'
headline.innerHTML = 'Indulge in Sweet Delights at Yum Yum - Your Donut Haven!'
header.insertBefore(title, nav)
header.appendChild(headline)


///
// get content for append later
const content = document.getElementById('content')

content.appendChild(createHome())



