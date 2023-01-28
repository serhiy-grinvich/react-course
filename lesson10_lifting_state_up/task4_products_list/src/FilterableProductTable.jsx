import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };
  }

  handleFilterTextChange = (e) => {
    this.setState({
      filterText: e.target.value,
    });
  };

  handleInStockChange = (e) => {
    this.setState({
      inStockOnly: e.target.checked,
    });
  };

  render() {
    // console.log(this.state);
    const { filterText, inStockOnly } = this.state;
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          handleFilterTextChange={(e) => this.handleFilterTextChange(e)}
          handleInStockChange={(e) => this.handleInStockChange(e)}
        />
        <ProductTable
          products={this.props.products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
