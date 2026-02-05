// Basic front-end behaviors: load products, render cards, handle add to cart.
import { formatPrice } from '../../src/utils/helpers.js';

// Simple client-only demo data fetch
async function fetchProducts() {
  try {
    const res = await fetch('/api/products');
    if (!res.ok) throw new Error('Failed to fetch products');
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

function renderProductCard(product) {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <img src="${product.image || '/images/logo.png'}" alt="${product.title}" />
    <div class="title">${product.title}</div>
    <div class="price">${formatPrice(product.price)}</div>
    <div style="margin-top:.5rem">
      <button class="btn add-to-cart" data-id="${product.id}">Add to cart</button>
    </div>
  `;
  return div;
}

async function init() {
  const productsEl = document.getElementById('products');
  const products = await fetchProducts();
  products.forEach(p => productsEl.appendChild(renderProductCard(p)));

  document.addEventListener('click', (e) => {
    if (e.target.matches('.add-to-cart')) {
      const id = e.target.dataset.id;
      // For demo: just log
      console.log('Add to cart', id);
      // TODO: implement local cart + show cart UI
    }
  });

  // Load components placeholders
  // In a real build, you'd assemble server-side or via a bundler.
  document.getElementById('site-header').innerHTML = await fetch('/components/Navbar.html').then(r=>r.text()).catch(()=>'<nav class="container"><a class="brand">MyStore</a></nav>');
  document.getElementById('hero').innerHTML = await fetch('/components/Banner.html').then(r=>r.text()).catch(()=>'<div class="container"><h1>Welcome to MyStore</h1></div>');
  document.getElementById('site-footer').innerHTML = await fetch('/components/Footer.html').then(r=>r.text()).catch(()=>'<div class="container">&copy; MyStore</div>');
}

window.addEventListener('DOMContentLoaded', init);
