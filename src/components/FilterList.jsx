import PropTypes from 'prop-types';
import React from 'react';
import Filter from './Filter';

const FilterList = ({
  categories,
  setFilter,
  clearFilter,
}) => (
  <span>
    {categories.map((category, i) => (
      <span key={i.toString()}>
        <Filter
          name={category}
          onClick={() => setFilter(category)}
        />
        {' - '}
      </span>
    ))}
    <button type="button" onClick={clearFilter}>
      all posts
    </button>
  </span>
);

export default FilterList;

FilterList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  clearFilter: PropTypes.func,
  setFilter: PropTypes.func,
};

FilterList.defaultProps = {
  categories: [],
  clearFilter: (f) => f,
  setFilter: (f) => f,
};
