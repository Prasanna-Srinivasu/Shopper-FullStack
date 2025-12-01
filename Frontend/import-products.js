// import-products.js (place next to package.json)
const axios = require('axios');
const all_product = [
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "products/product_1.png",
    new_price: 699,
    old_price: 1299,
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "products/product_2.png",
    new_price: 799,
    old_price: 1399,
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "products/product_3.png",
    new_price: 749,
    old_price: 1349,
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "products/product_4.png",
    new_price: 899,
    old_price: 1599,
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "products/product_5.png",
    new_price: 699,
    old_price: 1299,
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "products/product_6.png",
    new_price: 799,
    old_price: 1399,
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "products/product_7.png",
    new_price: 749,
    old_price: 1349,
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "products/product_8.png",
    new_price: 899,
    old_price: 1599,
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "products/product_9.png",
    new_price: 649,
    old_price: 1199,
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "products/product_10.png",
    new_price: 799,
    old_price: 1499,
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "products/product_11.png",
    new_price: 699,
    old_price: 1299,
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "products/product_12.png",
    new_price: 849,
    old_price: 1599,
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "products/product_13.png",
    new_price: 1799,
    old_price: 2999,
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "products/product_14.png",
    new_price: 1899,
    old_price: 3099,
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "products/product_15.png",
    new_price: 1699,
    old_price: 2899,
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "products/product_16.png",
    new_price: 1999,
    old_price: 3299,
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "products/product_17.png",
    new_price: 1899,
    old_price: 3199,
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "products/product_18.png",
    new_price: 1599,
    old_price: 2799,
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "products/product_19.png",
    new_price: 2099,
    old_price: 3399,
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "products/product_20.png",
    new_price: 1699,
    old_price: 2899,
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "products/product_21.png",
    new_price: 1899,
    old_price: 3099,
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "products/product_22.png",
    new_price: 1799,
    old_price: 2999,
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "products/product_23.png",
    new_price: 1999,
    old_price: 3299,
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "products/product_24.png",
    new_price: 1599,
    old_price: 2799,
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "products/product_25.png",
    new_price: 549,
    old_price: 1199,
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "products/product_26.png",
    new_price: 599,
    old_price: 1299,
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "products/product_27.png",
    new_price: 499,
    old_price: 1099,
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "products/product_28.png",
    new_price: 649,
    old_price: 1399,
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "products/product_29.png",
    new_price: 579,
    old_price: 1199,
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "products/product_30.png",
    new_price: 529,
    old_price: 1149,
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "products/product_31.png",
    new_price: 599,
    old_price: 1299,
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "products/product_32.png",
    new_price: 549,
    old_price: 1199,
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "products/product_33.png",
    new_price: 629,
    old_price: 1349,
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "products/product_34.png",
    new_price: 499,
    old_price: 1099,
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "products/product_35.png",
    new_price: 579,
    old_price: 1199,
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "products/product_36.png",
    new_price: 599,
    old_price: 1299,
  },
];

const productsForBackend = all_product.map(p => ({
  name: p.name,
  category: p.category,
  image: p.image,
  price: p.new_price,      // or p.price if you keep it
  new_price: p.new_price,   // ✅ matches Product.java
  old_price: p.old_price,   // ✅ matches Product.java
}));

async function importAllProducts() {
  console.log('Starting import of', productsForBackend.length, 'products...');
  try {
    for (let i = 0; i < productsForBackend.length; i++) {
      const product = productsForBackend[i];
      console.log(`Importing (${i + 1}/${productsForBackend.length}): ${product.name}`);
      const res = await axios.post('http://localhost:8080/api/products', product);
      console.log('Success:', res.status, product.name);
    }
    console.log('All products imported successfully!');
  } catch (err) {
    console.error('Error importing products:', err.response?.data || err.message);
  }
}

importAllProducts();