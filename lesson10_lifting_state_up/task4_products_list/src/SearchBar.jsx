import React from 'react';

const SearchBar = ({
  filterText,
  inStockOnly,
  handleFilterTextChange,
  handleInStockChange,
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => handleFilterTextChange(e)}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => handleInStockChange(e)}
        />{' '}
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
