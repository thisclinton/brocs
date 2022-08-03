const featured = document.getElementById("featured-container");
const productContainer = document.getElementById("product-container");
const newArrival = document.getElementById("new-arrival");
const cartAdd = document.querySelectorAll(".add_cart");
const cartContainer = document.getElementById("cart-container");

const itemsData = [
  [
    {
      id: 1,
      img: "assets/images/featured-1.png",
      title: "Baseball Pack",
      price: 69.99,
      desc: "Baseball-Pack-img",
    },
    {
      id: 2,
      img: "assets/images/featured-2.png",
      title: "Rad Dad Pack",
      price: 79.99,
      desc: "Baseball-Pack-img",
    },
    {
      id: 3,
      img: "assets/images/featured-3.png",
      title: "Classic Clog",
      price: 49.99,
      desc: "Baseball-Pack-img",
    },
  ],
  [
    {
      id: 1,
      img: "assets/images/product-1.png",
      title: "Classic printed camo Clog",
      price: 79.99,
      desc: "Baseball-Pack-img",
    },
    {
      id: 2,
      img: "assets/images/product-2.png",
      title: "sedona prince camo pack",
      price: 69.99,
      desc: "Baseball-Pack-img",
    },
    {
      id: 3,
      img: "assets/images/product-3.png",
      title: "Classic Clog purple",
      price: 59.99,
      desc: "Baseball-Pack-img",
    },
    {
      id: 4,
      img: "assets/images/product-4.png",
      title: "Classic Clog orange",
      price: 49.99,
      desc: "Baseball-Pack-img",
    },
  ],
  [
    {
      id: 1,
      img: "assets/images/new-0.png",
      title: "Classic Glitter Clog",
      price: 54.99,
      desc: "Classic-Glitter-Clog-img",
    },
    {
      id: 2,
      img: "assets/images/new-1.png",
      title: "Specialist II clog",
      price: 85.99,
      desc: "Specialist-ii-clog-img",
    },
    {
      id: 3,
      img: "assets/images/new-2.png",
      title: "Classic Clog Oxygen",
      price: 49.99,
      desc: "Classic-clog-oxygen-img",
    },
    {
      id: 4,
      img: "assets/images/new-3.png",
      title: "Classic Clog Lemon",
      price: 45.99,
      desc: "Classic-clog-lemon-img",
    },
  ],
];

const featuredSection = () => {
  return itemsData[0].forEach((features) => {
    const { img, title, price, desc } = features;

    return (featured.innerHTML += `
                <article class="featured__card">
                    <span class="featured__tag">Sale</span>
                    
                    <img src=${img} alt=${desc} class="featured__img">

                    <div class="featured__data">
                        <h3 class="featured__title">${title}</h3>
                        <span class="featured__price">$${price}</span>
                    </div>

                    <button class="button featured__button add_cart">
                        ADD TO CART
                    </button>
                </article>
    `);
  });
};

featuredSection();

const productSection = () => {
  return itemsData[1].forEach((product) => {
    const { id, img, title, price, desc } = product;
    return (productContainer.innerHTML += `
        <article class="product__card">
          <img src=${img} alt=${desc} class="product__img">
          <h3 class="product__title">${title}</h3>
          <span class="product__price">$${price}</span>
          <button onClick="addToCart(${id})" class="product__button add_cart">
              <i class="ri-shopping-bag-line"></i>
          </button>
        </article>
    `);
  });
};

productSection();

const newArrivalSection = () => {
  return itemsData[2].forEach((newItems) => {
    const { id, img, title, price, desc } = newItems;

    return (newArrival.innerHTML += `
      <article id="new-arrival-${id}" class="new__card swiper-slide">
            <span class="new__tag">New</span>

            <img src=${img} alt=${desc} class="new__img">

            <div class="new__data">
                <h3 class="new__title">${title}</h3>
                <span class="new__price">$${price}</span>
            </div>

            <button onClick="addToCart(${id})" class="button new__button add_cart">Add to Cart</button>
        </article>
    `);
  });
};

newArrivalSection();

let addToCart = (id) => {
  console.log(id, "added to cart");
};

const updateCart = () => {
  cartContainer.innerHTML = "";
  cartContainer.forEach;
};
