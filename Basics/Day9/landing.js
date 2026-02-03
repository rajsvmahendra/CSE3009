/**
 * Fetch and Render Products
 */

const API_URL = 'https://dummyjson.com/products';

// DOM Elements
const fetchBtn = document.getElementById('fetch-btn');
const productGrid = document.getElementById('product-grid');

// State
let isLoading = false;

// Event Listeners
fetchBtn.addEventListener('click', fetchProducts);

// Automatically fetch on load for better UX (optional, but requested behavior seemed manual)
// For this demo, let's keep it manual as per the "Load Products" button, 
// but we can also trigger it automatically if `fetchBtn` is clicked.

async function fetchProducts() {
    if (isLoading) return;

    showLoading();

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        renderProducts(data.products);

    } catch (error) {
        console.error('Error fetching data:', error);
        showError('Failed to load products. Please try again later.');
    } finally {
        isLoading = false;
    }
}

function showLoading() {
    isLoading = true;
    productGrid.innerHTML = `
        <div class="loading" style="grid-column: 1/-1;">
            <div class="spinner"></div>
            <p>Fetching premium selection...</p>
        </div>
    `;
}

function showError(message) {
    productGrid.innerHTML = `
        <div class="error-state" style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #ef4444;">
            <p>${message}</p>
        </div>
    `;
}

function renderProducts(products) {
    if (!products || products.length === 0) {
        showError('No products found.');
        return;
    }

    // Clear loading state
    productGrid.innerHTML = '';

    // Create and append cards with a stagger animation effect
    products.forEach((product, index) => {
        const card = createProductCard(product);
        card.style.animation = `fadeIn 0.5s ease forwards ${index * 0.05}s`;
        card.style.opacity = '0'; // Start hidden for animation
        productGrid.appendChild(card);
    });
}

function createProductCard(product) {
    const article = document.createElement('article');
    article.className = 'card';

    // Calculate star rating display
    const stars = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating));

    article.innerHTML = `
        <div class="card-image-wrapper">
            <img 
                src="${product.thumbnail}" 
                alt="${product.title}" 
                class="card-img"
                loading="lazy"
            >
        </div>
        <div class="card-content">
            <span class="category-tag">${product.category}</span>
            <h3 class="product-title" title="${product.title}">${product.title}</h3>
            <p class="product-description" title="${product.description}">
                ${product.description}
            </p>
            <div class="card-footer">
                <span class="price">$${product.price}</span>
                <div class="rating" title="${product.rating} / 5">
                    <span class="star">★</span>
                    <span>${product.rating}</span>
                </div>
            </div>
        </div>
    `;

    return article;
}

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
