// get ID from URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// if no id → redirect
if (!id) {
  window.location.href = "index.html";
}

// fetch JSON data
fetch("products.json")
  .then(res => res.json())
  .then(data => {
    const product = data[id];

    if (!product) {
      document.body.innerHTML = "<h1>Product Not Found</h1>";
      return;
    }

    // fill page
    document.getElementById("productTitle").textContent = product.title;
    document.getElementById("productPrice").textContent = product.price;
    document.getElementById("productSKU").textContent = product.sku;
    document.getElementById("productDescription").textContent = product.description;

    document.getElementById("productImage").src = product.image;

    // features
    const list = document.getElementById("productFeatures");
    product.features.forEach(f => {
      const li = document.createElement("li");
      li.textContent = f;
      list.appendChild(li);
    });
  });
