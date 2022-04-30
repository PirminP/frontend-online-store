import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromProductId } from '../services/api';
import cart from '../services/cart';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: '',
      productImage: '',
      productPrice: '',
      productState: {},
    };
  }

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductsFromProductId(id);
    const { title, price, thumbnail } = product;
    this.setState({
      productImage: thumbnail,
      productName: title,
      productPrice: price,
      productState: product,
    });
  }

  addToCart = () => {
    const { productState } = this.state;
    cart.addItem(productState);
  }

  render() {
    const { productImage, productName, productPrice } = this.state;
    return (
      <div>
        <p
          data-testid="product-detail-name"
        >
          {productName}

        </p>

        <img src={ productImage } alt={ productName } />

        <p>{productPrice }</p>

        <button
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCart }
          type="button"
        >
          +Adicionar ao Carrinho+
        </button>

        <Link
          to="/"
        >
          Início
        </Link>

        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          Ir para Carrinho!
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
