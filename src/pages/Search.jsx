import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
          <input type="text" name="search" data-testid="home-initial-message" />
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    )
  }
}
