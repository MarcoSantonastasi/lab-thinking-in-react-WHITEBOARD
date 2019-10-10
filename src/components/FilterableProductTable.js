import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [...this.props.products],
      productsToDisplay: [...this.props.products],
      displayOnlyInStock: false
    };

    this.filterProducts = this.filterProducts.bind(this);
  }

  filterProducts(filterText, showOnlyInStock) {
    let productsToDisplay = this.state.products.filter(product =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    );
    if (showOnlyInStock) {
      productsToDisplay = productsToDisplay.filter(product => product.stocked);
    }
    this.setState({ productsToDisplay });
  }

  render() {
    return (
      <div className="filterable-product-table">
        <h1>Iron Store</h1>
        <SearchBar filterCallback={this.filterProducts} />
        <ProductTable productsToDisplay={this.state.productsToDisplay} />
      </div>
    );
  }
}

export default FilterableProductTable;
