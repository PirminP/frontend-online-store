import React, { Component } from 'react';
import propTypes from 'prop-types';
import '../styles/ProductCard.css';

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
        className="card-product-container"
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
