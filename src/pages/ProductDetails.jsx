import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromProductId } from '../services/api';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: '',
      productImage: '',
      productPrice: '',
    };
  }

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;
    const fetch = await getProductsFromProductId(id);
    const { title, price, thumbnail } = fetch;
    this.setState({
      productImage: thumbnail,
      productName: title,
      productPrice: price,
    });
  }

  render() {
    const { productImage, productName, productPrice } = this.state;
    return (
      <div
        data-testid="product-detail-name"
      >
        ProductDetails
        <p>{productName}</p>
        <img src={ productImage } alt={ productName } />
        <p>{productPrice }</p>
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
