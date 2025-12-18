import { useContext } from "react";
import FavoritesContext, { useFavorites } from "../context/FavoritesContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
const {products} = useContext(FavoritesContext);

  return (
    <div className="container">
        <div className="productGrid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  )
}

export default ProductList