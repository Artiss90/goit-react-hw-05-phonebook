import React from 'react';
import style from './FilterName.module.css';
import PropTypes from 'prop-types';

/* eslint react/prop-types: 1 */

const FilterName = ({ value, onChange }) => (
  <label className={style.container}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

FilterName.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default FilterName;
