import React from 'react';

const Pagination = (props) => {
  let isPrevPageAvailable = props.currentPage > 1;
  let isNextPageAvailable =
    props.currentPage * props.itemsPerPage < props.totalItems;
  return (
    <div className="pagination">
      <button
        className="btn"
        onClick={props.goPrev}
        disabled={!isPrevPageAvailable}
      >
        {isPrevPageAvailable ? '←' : ''}
      </button>
      <span className="pagination__page">{props.currentPage}</span>
      <button
        className="btn"
        onClick={props.goNext}
        disabled={!isNextPageAvailable}
      >
        {isNextPageAvailable ? '→' : ''}
      </button>
    </div>
  );
};

export default Pagination;
