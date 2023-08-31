import React from "react";
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams()

  return (
    <div>
      <h1>ProductDetail</h1>
      {params.productId}
    </div>
  );
};

export default ProductDetail;
