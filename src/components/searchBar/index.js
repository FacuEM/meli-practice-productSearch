import React from "react";
import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/searchIcon.png";
import { useInput } from "./../../hooks/useInput";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const SearchBar = () => {
  const history = useHistory();
  const { value, bind, reset } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/items?search=${value}`);
    reset();
  };
  return (
    <header>
      <img
        src={Logo}
        alt="Mercado Libre Logo"
        className="logo"
        onClick={() => history.goBack()}
      />

      <form className="inputSearch" onSubmit={handleSubmit}>
        <input type="text" {...bind} placeholder="Nunca dejes de buscar" />
        <button type="submit">
          <img src={SearchIcon} alt="Search Icon for button" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
