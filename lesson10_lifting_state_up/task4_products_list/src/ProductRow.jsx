import React from 'react';

const ProductRow = ({ product }) => {
  const { name, price, stocked } = product;
  const nameProd = stocked ? (
    name
  ) : (
    <span style={{ color: 'red' }}>{name}</span>
  );

  return (
    <tr>
      <td>{nameProd}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
