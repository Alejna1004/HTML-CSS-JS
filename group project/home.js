const products = [
  { id: 1, name: "T-shirt", price: 29.99, image: "shirt.png" },
  { id: 2, name: "Jeans", price: 59.99, image: "jeans.png" },
  { id: 3, name: "Hoodie", price: 49.99, image: "hoodie.png" }
];

let cartCount = 0;
const productList = document.getElementById("product-list");
const cartDisplay = document.getElementById("cart-count");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${product.image}">
      <h4>${
product.name
}</h4>
      <p>$${product.price}</p>
      <button>Add to Cart</button>
    `;

    div.querySelector("button").addEventListener("click", () => {
      cartCount++;
      cartDisplay.textContent = cartCount;
    });

    productList.appendChild(div);
  });
}

displayProducts(products);

document.getElementById("shopNow").addEventListener("click", () => {
  window.scrollTo({ top: productList.offsetTop, behavior: "smooth" });
});

document.getElementById("searchForm").addEventListener("submit", e => {
  e.preventDefault();
  const value = document.getElementById("searchInput").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(value));
  displayProducts(filtered);
}); 