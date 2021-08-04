import React from "react";
// import styled from "styled-components";
import { Nav,Container,Logo,NavLinks,NavLink,Search,Toggle } from "./styled-comps";
import menudata from "../datas/menuList";
import { FaSistrix,FaAlignRight } from "react-icons/fa";
import { useGlobalContext } from "../context";




export const Navbar = () => {
    const {openNavbar,openSearch,showSearch} =useGlobalContext();
  return (
    <Nav className={`${showSearch && 'hide-nav'}`}>
      <Container>
        <Logo to='/'>Logo .</Logo>
        <NavLinks>
          {menudata.map((item,index) => {
            const { title, url } = item;
            return <NavLink key={index} to={url}>{title}</NavLink>;
          })}
        </NavLinks>
        <Search onClick={openSearch} to='/'>
          <FaSistrix />
        </Search>
        <Toggle onClick={openNavbar}>
            <FaAlignRight/>
        </Toggle>
      </Container>
    </Nav>
  );
};
