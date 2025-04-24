import { useParams, useNavigate } from "react-router-dom";
import { memo, useCallback, Suspense } from "react";

type ProductParams = {
  id?: string;
}

const Product: React.FC = memo(() => {
  const { id } = useParams<keyof ProductParams>();
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  if (!id) {
    return <div>Product not found</div>;
  }

  return (
    <Suspense fallback={<div>Loading product...</div>}>
      <section>
        <h2>Product {id}</h2>
        <button onClick={goBack}>Go Back</button>
      </section>
    </Suspense>
  );
});

Product.displayName = 'Product';

export default Product;