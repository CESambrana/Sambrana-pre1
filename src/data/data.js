const products = [
  {
    id: "aa1111",
    name: "Monitor Acer 144hz",
    descripcion: "",
    stock: 3,
    price: 350000,
    image: "/img/acer-144hz.jpg",
    category: "monitor",
  },
  {
    id: "aa1122",
    name: "Monitor Acer 100hz",
    descripcion: "",
    stock: 4,
    price: 250000,
    image: "/img/acer-100hz.jpg",
    category: "monitor",
  },
  {
    id: "aa1133",
    name: "Auriculares Hyperx",
    descripcion: "",
    stock: 10,
    price: 90000,
    image: "/img/auriculares-hyperx.jpeg",
    category: "auricular",
  },
  {
    id: "aa1434",
    name: "Auriculares Logitech",
    descripcion: "",
    stock: 8,
    price: 115000,
    image: "/img/auriculares-logitech.png",
    category: "auricular",
  },
  {
    id: "aa1111",
    name: "Monitor Samsung 75hz",
    descripcion: "",
    stock: 4,
    price: 170000,
    image: "/img/samsung-75hz.avif",
    category: "monitor",
  },
];

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1200);
  });
};

export { getProducts };
