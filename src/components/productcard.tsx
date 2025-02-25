import { Link } from "react-router-dom";

type ProductProps = {
  id: number;
  title: string;
  image: string;
  price: number;
};

const ProductCard = ({ id, title, image, price }: ProductProps) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <Link to={`/products/${id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
