import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../App.css';
import {
  getCategories,
  getProductsFromCategory,
  getProductsFromQuery } from '../services/api';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      categoriesState: [],
      inputValue: '',
      fetchProducts: [],
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categoriesState: categories,
    });
    this.handleCategoryClick({ target: { id: categories[0].id } });
    // const auxVar = await getProductsFromCategory(categories[0].id);
    /* this.setState({
      fetchProducts: auxVar,
    }); */
  }

  handleChange = ({ target: { name, value } }) => {
    // const { name, value } = target;
    this.setState(({ [name]: value }));
  }

  handleSearchProducts = async () => {
    const { inputValue } = this.state;
    const { results } = await getProductsFromQuery(inputValue);
    this.setState({ fetchProducts: results });
  }

  handleCategoryClick = async ({ target: { id } }) => {
    const { results } = await getProductsFromCategory(id);
    this.setState({ fetchProducts: results });
  }

  render() {
    const {
      categoriesState,
      inputValue,
      fetchProducts,
    } = this.state;
    return (
      <>
        <main data-testid="home-initial-message">
          <label htmlFor="query-input">
            <input
              type="text"
              value={ inputValue }
              name="inputValue"
              data-testid="query-input"
              onChange={ this.handleChange }
            />

            <button
              type="button"
              data-testid="query-button"
              onClick={ this.handleSearchProducts }
            >
              Pesquisar
            </button>

          </label>

          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          <Link
            to="/carrinho"
            data-testid="shopping-cart-button"
          >
            Carrinho
            {/* <input
              value="Carrinho"
              type="button"
              data-testid="shopping-cart-button"
            /> */}
          </Link>
        </main>

        <div className="card_conteiner">

          <aside>
            <section>
              <h3>
                Categorias:
              </h3>
              {
                categoriesState.map((category) => (
                  <ul
                    key={ category.id }
                    data-testid="category"
                  >
                    <button
                      type="button"
                      id={ category.id }
                      onClick={ this.handleCategoryClick }
                    >
                      { category.name }
                    </button>
                  </ul>
                ))
              }
            </section>
          </aside>

          <section>
            {
              fetchProducts
            && fetchProducts.map(({ title, price, thumbnail, id }) => (
              <Link
                data-testid="product-detail-link"
                key={ id }
                to={ `/product-details/${id}` }
              >
                <ProductCard
                  productName={ title }
                  productImage={ thumbnail }
                  productPrice={ price }
                />
              </Link>
            ))
              // fetchProducts
              // && fetchProducts.map((product) => (
            //   <ProductCard
            //     key={ product.id }
            //     productName={ product.title }
            //     productImage={ product.thumbnail }
            //     productPrice={ product.price }
            //   />
            // ))
            }
          </section>

        </div>
      </>
    );
  }
}
