import React from 'react';

const ProductRow = props => {
  const { name, category, price, stocked } = props.product;

  return (
    <tr className={stocked ? 'product-row' : 'product-row text-red'}>
      <td>{name}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td>{stocked ? 'In Stock' : 'OUT OF STOCK'}</td>
    </tr>
  );
};

export default ProductRow;
