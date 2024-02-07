

export const createHome = () => {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    const title = document.createElement('h1');
    const headline = document.createElement('h2');
    const mainpagetextCon = document.createElement('div');
    const mainpagetext = document.createElement('p');
    const pointswrapper = document.createElement('div');
    const pointstext1 = document.createElement('p');
    const pointstext2 = document.createElement('p');
    const pointstext3 = document.createElement('p');

    title.innerHTML = 'Yum Yum';
    headline.innerHTML = 'Indulge in Sweet Delights at Yum Yum - Your Donut Haven!'

    mainpagetext.innerHTML = "Welcome to Yum Yum, where every bite is a journey to pure bliss! Nestled in the heart of the city, our donut cafe is a beacon for delicious, comforting treats. Here's why you'll love us:";

    pointstext1.innerHTML = "Artisanal Donuts: Handmade with love, our donuts blend classic and innovative flavors, crafted from the finest ingredients."
    pointstext2.innerHTML = "Expertly Crafted Coffee: Our baristas create the perfect coffee to complement your donut, from robust espressos to creamy lattes."
    pointstext3.innerHTML = "Cozy Ambiance: Yum Yum offers a cozy, inviting space to unwind and enjoy a moment of delicious solitude or camaraderie."

    pointswrapper.append(pointstext1, pointstext2, pointstext3)

    container.appendChild(title);
    container.appendChild(headline);
    container.appendChild(mainpagetext);
    container.appendChild(pointswrapper);
    content.appendChild(container);
}