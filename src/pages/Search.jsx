import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      categoriesState: [],
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categoriesState: categories,
    });
  }

  render() {
    const {
      categoriesState,
    } = this.state;
    return (
      <>
        <main data-testid="home-initial-message">
          <input
            type="text"
            name="search"
          />

          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </main>

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
                  >
                    { category.name }
                  </button>
                </ul>
              ))
            }
          </section>
        </aside>
      </>
    );
  }
}
