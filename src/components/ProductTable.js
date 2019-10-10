import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = props => {
  const rows = props.productsToDisplay.map((product, index) => (
    <ProductRow product={product} key={index} />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="4">These are the products in our store</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
