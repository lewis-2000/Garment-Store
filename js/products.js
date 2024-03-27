// Function to fetch products from the JSON server
async function fetchProducts() {
    try {
      const response = await fetch('http://localhost:5000/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const products = await response.json();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }
  
  // Function to display products in the specified HTML structure
  async function displayProducts() {
    const pContainer = document.getElementById('pContainer');
    const products = await fetchProducts();
  
    // Clear existing content in pContainer
    pContainer.innerHTML = '';
  
    if (products.length > 0) {
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
          <div class="product-image">
              <img src="./assets/products/12064273040195392-2-product.webp" alt="">
          </div>
          <div class="product__meta">
              <h5 class="rnormal">${product.title}</h5>
              <button title="addToCart"><img src="./assets/cart.png" alt=""></button>
          </div>`;
        pContainer.appendChild(productDiv);
      });
    } else {
      // Display "No Products" when there are no products
      pContainer.textContent = 'No Products';
    }
  }
  
  // Call the function to display products
  displayProducts();
  