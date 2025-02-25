import ProductCard from "./productcard";

type ProductListProps = {
  products: Array<{ id: number; title: string; image: string; price: number }>;
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
