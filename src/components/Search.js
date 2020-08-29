import React, { useState } from "react";
import { Input } from "antd";
const { Search } = Input;

const SearchBar = (props) => {
  const [input, setInput] = useState("");

  return (
    <div className="search-container">
      <div className="search-bar">
        <Search
          value={input}
          onChange={(e) => setInput(e.target.value)}
          size="large"
          placeholder="What Do You want to eat"
          onSearch={() => props.searchRecipes(input)}
          style={{ width: "100%", height: 60 }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
