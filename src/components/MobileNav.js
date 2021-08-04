import React from "react";
import {
  MobileNavbar,
  CloseBtn,
  Logo,
  HeaderContainer,
  MobileLinks,
  NavLink,
  MobileSearch,
} from "../components/styled-comps";
import { useHistory } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import menudata from '../datas/menuList'
import { useGlobalContext } from "../context";

const MobileNav = () => {
  const{showNav,closeNavbar,handleSubmit,
    handleChange,changeMobileRef}=useGlobalContext();
    let history =useHistory();

  return (
    <MobileNavbar className={`${showNav && 'show-nav'}`}>
      <HeaderContainer className="nav-item">
        <Logo to='/' className="nav-item" onClick={closeNavbar}>Logo .</Logo>
        <CloseBtn onClick={closeNavbar}>
          <FaTimes />
        </CloseBtn>
      </HeaderContainer>
      <MobileSearch onSubmit={handleSubmit}>
          <input type="text" onChange={()=>handleChange(changeMobileRef)} ref={changeMobileRef}/>
          <button type="submit" onClick={history.push('/')}>
            Search
          </button>
      </MobileSearch>
      <MobileLinks className="nav-item">
      {menudata.map((item,index) => {
            const { title, url } = item;
            return <NavLink key={index} to={url} onClick={closeNavbar}>{title}</NavLink>;
          })}
      </MobileLinks>
    </MobileNavbar>
  );
};

export default MobileNav
