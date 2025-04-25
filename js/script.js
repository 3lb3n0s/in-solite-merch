// js/script.js
const products = [
  {
    name: "T-shirt Light & Groove",
    desc: "Coton bio, sérigraphie fluide",
    price: "29.00 CHF",
    img: "images/tshirt.jpg"
  },
  {
    name: "Casquette Golden Hour",
    desc: "Broderie ton sur ton, réglable",
    price: "24.00 CHF",
    img: "images/casquette.jpg"
  },
  {
    name: "Tote-bag Morning Rise",
    desc: "Toile épaisse, durable",
    price: "19.00 CHF",
    img: "images/totebag.jpg"
  },
  {
    name: "Mug Midday Groove",
    desc: "Céramique mate, 350ml",
    price: "15.00 CHF",
    img: "images/mug.jpg"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('products');
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="card-content">
        <h2>${p.name}</h2>
        <p>${p.desc}</p>
        <div class="price">${p.price}</div>
        <a href="#" class="btn-buy">Ajouter au panier</a>
      </div>
    `;
    container.appendChild(card);
  });
});
