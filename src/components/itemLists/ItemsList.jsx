import { useState, useEffect } from "react";
import { getProducts } from "../../data/data";
import "./itemList.css";

const ItemsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finalizó el coso");
      });
  }, []);

  return (
    <div className="body">
      {products.map((product) => (
        <div className="cart">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Precio: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
