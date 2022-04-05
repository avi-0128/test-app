import React from "react";

const SearchBox = (props) => {
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (e) => props.setSearch(e.target.value);

  const optimize = debounce(handleChange);

  return (
    <form className="text-center">
      <input
        className="form-control "
        type="search"
        placeholder="Search"
        value={props.value}
        onChange={optimize}
      />
    </form>
  );
};

export default SearchBox;
