import React from "react";
import { SearchSec, SearchForm, CloseBtn, Logo } from "./styled-comps";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";


export const SearchBar = () => {
  const {
    showSearch,
    searchRef,
    searchHandle,
    closeSearch,
    handleSubmit,
    handleChange,
    changeRef
  } = useGlobalContext();


  return (
    <section
      className={`search-box ${showSearch && "show-search"}`}
      onClick={searchHandle}
    >
      <SearchSec ref={searchRef} className="search">
        <Logo to="/">Logo .</Logo>
        <SearchForm action="" onSubmit={handleSubmit}>
          <input type="text" onChange={()=>handleChange(changeRef)} ref={changeRef}/>
          <button to='/' type="submit">Search</button>
        </SearchForm>
        <CloseBtn onClick={closeSearch}>
          <FaTimes />
        </CloseBtn>
      </SearchSec>
    </section>
  );
};
