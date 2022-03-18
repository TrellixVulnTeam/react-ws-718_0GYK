import React from 'react';

const SearchBar = ({ changeGifs }) => {
  const handleChange = (event) => {
    // console.log(event.currentTarget.value)
    changeGifs(event.currentTarget.value);
  };

  return (
    <input
      type="text"
      className="form-search form-control"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
