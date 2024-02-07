import Background from './assets/donutbackground.jpg'

export const createBackground = () => {
    const mainbackground = new Image();
    mainbackground.src = Background;
    
    const body = document.body;
    body.style.backgroundImage = `url(${Background})`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = `center`;
    body.style.margin = '0px';
    body.style.backgroundRepeat = 'no repeat';
};
