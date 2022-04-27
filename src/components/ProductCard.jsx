import React, { Component } from 'react';
import propTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const {
      productName,
      productPrice,
      productImage,
    } = this.props;

    return (
      <div
        data-testid="product"
      >
        <h2>
          { productName }
        </h2>
        <img
          src={ productImage }
          alt={ productName }
        />
        <p>
          { productPrice }
        </p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  productName: propTypes.string,
  productPrice: propTypes.number,
  productImage: propTypes.string,
}.isRequired;

export default ProductCard;
