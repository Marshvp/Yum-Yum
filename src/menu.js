export function createMenu() {
    const container = document.createElement('div');
    container.classList.add('Container', 'glass')

    container.appendChild(createCard("Classic Glazed Perfection", "Dive into the timeless taste of our Classic Glazed Donut, a soft, fluffy delight with a glossy, sweet glaze that melts in your mouth. Perfect with any coffee.", "1.50"))
    container.appendChild(createCard("Chocolate Dream", "For the chocolate lovers, our Chocolate Dream donut is a decadent treat. Rich, velvety chocolate icing on top of our moist donut base, sprinkled with chocolate chips.", "2.00"))
    container.appendChild(createCard("Cinnamon Sugar Twist", "A twist on tradition, this donut is coated in a warming blend of cinnamon and sugar. It's crispy on the outside, tender on the inside, and utterly irresistible.", "1.75"))
    container.appendChild(createCard("Strawberry Frosted Fantasy", "Experience the sweetness of summer with our Strawberry Frosted Fantasy. A light, fluffy donut topped with strawberry frosting and real strawberry pieces.", "2.25"))
    container.appendChild(createCard("Vanilla Bean Bliss", "Delight in the simple elegance of our Vanilla Bean Bliss. This donut is topped with a vanilla bean glaze that's rich in flavor, offering a sophisticated take on a classic favorite.", "2.00"))
    
    

    return container
}

function createCard(name, desc, price) {
    
    const card = document.createElement('div');
    const cardTitle = document.createElement('h3');
    const cardDesc = document.createElement('p');
    const cardPrice = document.createElement('p');

    cardTitle.innerHTML = name
    cardDesc.innerHTML = desc;
    cardPrice.innerHTML = "Price: $" + price;

    card.appendChild(cardTitle);
    card.appendChild(cardDesc);
    card.appendChild(cardPrice);

    
    return card
    
}