import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

import "./Products.css";
import Card from "../components/Card";

const Products = ({ products }) => {
  return (
    <section className="card-container">
      {products.map(({ img, title, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      ))}
    </section>
  );
};
export default Products;
