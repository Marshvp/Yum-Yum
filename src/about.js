export function createAbout() {
    const aboutContent = document.createElement('div');
    aboutContent.appendChild(about());
    aboutContent.appendChild(contact());

    return aboutContent
}

function about (){
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('Container', 'glass')

    const aboutText = document.createElement('p');
    const aboutText2 = document.createElement('p');
    
    aboutText.innerHTML = "Yum Yum Donut Cafe is a cozy haven in our community, born from a dream to blend the joy of freshly made donuts with the comfort of expertly brewed coffee. Each detail in our cafe, from the aromatic espresso to the sugary glaze of our artisanal donuts, is crafted with love. It's a place not just for a quick snack but for creating memories over the love for coffee and donuts."
    aboutText.style.fontSize = '24px'
    aboutText2.innerHTML = "We prioritize quality ingredients and homemade pastries, making each donut a delight and every coffee sip a perfect match. Our cafe's inviting atmosphere is designed for you to unwind, making Yum Yum a sweet part of your daily routine. At Yum Yum, every visit is a flavorful journey into the heart of our community's joy."
    aboutText2.style.fontSize = '24px'
    
    aboutContainer.appendChild(aboutText)
    aboutContainer.appendChild(aboutText2)
    return aboutContainer
}

function contact () {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer', 'glass');

    const contactTel = document.createElement('p')
    const contactemail = document.createElement('p')
    const contactaddress= document.createElement('p')
    const contactText= document.createElement('p')

    contactTel.innerHTML = 'Tele: 02020202020'
    contactemail.innerHTML = 'Yum-Yum@gmail.com'
    contactaddress.innerHTML = 'Totally real address, Real Place, ZIP'
    contactText.innerHTML = 'GET IN TOUCH!'
    contactText.id = 'contactGet'

    contactContainer.appendChild(contactText)
    contactContainer.appendChild(contactTel)
    contactContainer.appendChild(contactemail)
    contactContainer.appendChild(contactaddress)

    return contactContainer
}