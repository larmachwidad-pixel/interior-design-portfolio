// Catalog Data mapped directly to local files (prices removed)
const products = [
  // --- TABLES ---
  {
    title: "Minimalist Walnut Sideboard",
    category: "tables",
    image: "images/tables/minimalist-walnut-sideboard.jpg",
  },
  {
    title: "Walnut 4-Door Credenza",
    category: "tables",
    image: "images/tables/credenza.jpg",
  },
  {
    title: "Modern Wooden Shoe Cabinet",
    category: "tables",
    image: "images/tables/modern-wooden-shoe-cabinet.jpg",
  },
  {
    title: "Gold Circle Credenza",
    category: "tables",
    image: "images/tables/gold-circle-credenza-sideboard.jpg",
  },
  {
    title: "Oak Coffee Table",
    category: "tables",
    image: "images/tables/oak-coffee-table.jpg",
  },
  {
    title: "Gold Side Table",
    category: "tables",
    image: "images/tables/gold-side-table.jpg",
  },
  {
    title: "Glass Top Table",
    category: "tables",
    image: "images/tables/glass-top-table.jpg",
  },

  // --- LIGHTING ---
  {
    title: "Three-G Glob Pendant Light",
    category: "lighting",
    image: "images/lighting/three-g-glob.png",
  },
  {
    title: "Kitchen Glob Pendant",
    category: "lighting",
    image: "images/lighting/glob-kitchen.png",
  },
  {
    title: "Crystal Pendant Light",
    category: "lighting",
    image: "images/lighting/crystal-pendant.jpg",
  },
  {
    title: "Three Golden Glob Light",
    category: "lighting",
    image: "images/lighting/three-golden-glob.png",
  },
  {
    title: "Modern Gold Ring Pendant",
    category: "lighting",
    image: "images/lighting/modern-gold-ring-pendant-light.jpg",
  },
  {
    title: "Gold Diamond Crystal Chandelier",
    category: "lighting",
    image: "images/lighting/gold-diamond-crystal-chandelier-in.jpg",
  },
];

// Sales Notification Popups (Cycles through products)
let popIndex = 0;

function cycleSalesNotification() {
  const popElement = document.getElementById("sales-pop");
  if (!popElement) return;

  const item = products[popIndex];
  const thumbImg = popElement.querySelector(".pop-thumb");
  const productTitle = popElement.querySelector(".pop-product");
  const timeText = popElement.querySelector(".pop-time");

  if (thumbImg && productTitle && timeText) {
    thumbImg.src = item.image;
    productTitle.textContent = item.title.toUpperCase();
    timeText.textContent = `${Math.floor(Math.random() * 20) + 2} minutes ago from Marrakech`;
  }

  popIndex = (popIndex + 1) % products.length;
}

document.addEventListener("DOMContentLoaded", () => {
  setInterval(cycleSalesNotification, 8000);
});
