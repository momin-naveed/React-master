import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ image, name, price }) => {
  return <article className='product'>
    <h4> single product</h4>
  </article>;
};
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default Product;
