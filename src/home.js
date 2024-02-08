

export const createHome = () => {
    
    const container = document.createElement('div');
    
    //create points to append
    const point1 = createPoint("Artisanal Donuts:", "Handmade with love, our donuts blend classic and innovative flavors, crafted from the finest ingredients.")
    const point2 = createPoint("Expertly Crafted Coffee:", "Our baristas create the perfect coffee to complement your donut, from robust espressos to creamy lattes.")
    const point3 = createPoint("Cozy Ambiance:", "Yum Yum offers a cozy, inviting space to unwind and enjoy a moment of delicious solitude or camaraderie.")
    
    container.classList.add('homeContainer', 'glass')
    
    container.appendChild(point1)
    container.appendChild(point2)
    container.appendChild(point3)
    


    return container;
}

function createPoint(title, desc) {
    const div = document.createElement('div');
    const pointTitle = document.createElement('h2');
    const pointDesc = document.createElement('p');

    div.classList.add('pointDiv')

    pointTitle.innerHTML = title
    pointDesc.innerHTML = desc
    div.appendChild(pointTitle)
    div.appendChild(pointDesc)
    return div
}