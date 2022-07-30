const featured = document.getElementById("featured-container");
const product = document.getElementById("product-container");
const newArrival = document.getElementById("new");

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
  [{}, {}, {}, {}],
  [{}, {}, {}, {}],
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

                    <button class="button featured__button">
                        ADD TO CART
                    </button>
                </article>
    `);
  });
};

featuredSection();

const productSection = () => {
  return itemsData;
};
