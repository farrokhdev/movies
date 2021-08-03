import styled from "styled-components";
import { colors } from "../colors";
import { Link } from "react-router-dom";
import wallpaper from "../images/joker.jpg";

// components
export const Nav = styled.section`
  width: 100%;
  min-height: 100px;
  /* background-color: ${colors.primary}; */
  color: ${colors.white};
  position: fixed;
  top:0;
  left: 0;
  z-index: 100;
  transition: 0.3s ease;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100px;
  padding: 0 40px;
  @media screen and (max-width: 1000px) {
    /* max-width: 1000px; */
  }
  @media screen and (max-width: 700px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 300px) {
  }
`;
export const Logo = styled(Link)`
  color: ${colors.white};
  font-size: 3rem;
  font-weight: 700;
  @media screen and (max-width: 1000px) {
    font-size: 2.8rem;
    font-weight: 700;
  }
  @media screen and (max-width: 700px) {
    font-size: 2.6rem;
    font-weight: 600;
  }
  @media screen and (max-width: 500px) {
    font-size: 2.4rem;
    font-weight: 600;
  }
  @media screen and (max-width: 300px) {
    font-size: 2.2rem;
    font-weight: 500;
  }
`;
export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 40%;
  color: ${colors.white};
  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 700px) {
    gap: 20px;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
  @media screen and (max-width: 300px) {
  }
`;
export const NavLink = styled(Link)`
  color: ${colors.white};
  &:hover {
    color: ${colors.secondary};
  }
`;

const btnStyle = {
  color: `${colors.white}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Search = styled(Link)`
  ${btnStyle};
  svg {
    font-size: 1.7rem;
  }
  &:hover {
    svg {
      color: ${colors.secondary};
    }
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Toggle = styled(Link)`
  ${btnStyle}
  display: none;
  svg {
    font-size: 1.7rem;
  }
  &:hover {
    svg {
      color: ${colors.secondary};
    }
  }
  @media screen and (max-width: 600px) {
    display: flex;
  }
`;
/* mobile nav
 ************/
export const MobileNavbar = styled.section`
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${colors.primary};
  color: ${colors.white};
  min-height: 700px;
  top: 0;
  right: 0;
  z-index: 100;
  transform: translateX(100%);
  pointer-events: none;
  transition: 0.3s ease;
  @media screen and (max-width: 600px) {
    display: block !important;
  }
  @media screen and (max-width: 300px) {
    display: block !important;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100px;
  padding: 0 40px;
  @media screen and (max-width: 1000px) {
    /* max-width: 1000px; */
  }
  @media screen and (max-width: 700px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 300px) {
  }
`;
export const CloseBtn = styled(Link)`
  ${btnStyle}

  svg {
    font-size: 1.7rem;
  }
  &:hover {
    svg {
      color: ${colors.secondary};
    }
  }
`;
export const MobileSearch = styled.form`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;


  input {
    width: 70%;
    padding: 10px 20px;
    line-height: 100%;
    border-radius: 50px 0px 0px 50px;
    background-color: ${colors.white};
    color: ${colors.primary};
    font-weight: 400;
    font-size: 15px;
    height: 30px;
  }
  button {
    background-color: ${colors.forth};
    color: ${colors.white};
    border-radius: 0px 50px 50px 0px;
    padding: 5px 10px;
    line-height: 100%;
    font-weight: 400;
    font-size: 15px;
    width: 30%;
    height: 30px;
    display: inline-block;
    cursor: pointer;
    &:hover {
      background-color: ${colors.third};
    }
  }
`;

export const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0px;
  color: ${colors.white};
  a {
    font-size: 1.5rem;
    display: block;
    text-align: center;
    padding: 20px;
    width: 100%;
  }
  a:hover {
    background-color: ${colors.secondary};
    color: ${colors.white};
  }

  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 700px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 300px) {
  }
`;
/* home component
 ************/
export const HomeSec = styled.section`
  width: 100%;
  min-height: 100vh;
  background: url(${wallpaper});
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${colors.primary};
  background-size: cover;
  color: ${colors.white};
  position: relative;
  padding: 100px 0px 50px 0px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    /* max-width: 1000px; */
  }
  @media screen and (max-width: 700px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 300px) {
  }
`;

export const MoviesCon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
  gap: 40px;
  padding: 0 40px;
  @media screen and (max-width: 1000px) {
    /* max-width: 1000px; */
  }
  @media screen and (max-width: 700px) {
    gap: 20px;
    padding: 0 20px;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 300px) {
  }
`;
export const Movie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin: 0 auto;
  height: 250px;
  width: 100%;
  color: ${colors.white};
  background-color: ${colors.white};
  /* padding: 20px; */
  position: relative;
  transition: 0.3s ease;

  .movie-img {
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
      transition: 0.3s ease;
    }
  }

  .movie-text {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    .movie-title {
    }
    .movie-age {
    }
  }

  &:hover {
    box-shadow: 0px 0px 3px 3px ${colors.secondary};
  }
  &:hover .movie-img img {
    transform: scale(1.06);
  }
  @media screen and (max-width: 1000px) {
    /* max-width: 1000px; */
  }
  @media screen and (max-width: 700px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 300px) {
  }
`;

/* about component
 ************/

export const AboutSec = styled.section`
  width: 100%;
  background-color: ${colors.primary};
  background-size: cover;
  color: ${colors.white};
  position: relative;
  padding: 100px 0px;
  min-height: 100vh;
  @media screen and (max-width: 1000px) {
    /* max-width: 1000px; */
  }
  @media screen and (max-width: 700px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 300px) {
  }
`;
export const AboutCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
  gap: 5%;
  padding: 0 40px;

  .about-img {
    width: 35%;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
      transition: 0.3s ease;
    }
  }
  .about-text {
    width: 60%;
  }
  @media screen and (max-width: 1000px) {
    /* max-width: 1000px; */
  }
  @media screen and (max-width: 700px) {
    gap: 20px;
    padding: 0 20px;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    .about-img {
      width: 100%;
      height: 300px;
    }
    .about-text {
      width: 100%;
    }
  }
  @media screen and (max-width: 300px) {
  }
`;

/* single component
 ************/

export const SingleSec = styled.section`
  width: 100%;
  background-color: ${colors.primary};
  background:linear-gradient(
          rgba(0, 0, 0, 0.2), 
          rgba(0, 0, 0, 0.2)
        ), url("https://image.tmdb.org/t/p/original/${(props) => props.background}");
  background-size: cover;
  background-position: center;
  color: ${colors.white};
  position: relative;
  padding: 100px 0px;
  min-height: 100vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1000px) {
    /* max-width: 1000px; */
  }
  @media screen and (max-width: 700px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 300px) {
  }
`;

export const SingleCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
  gap: 5%;
  padding: 0 40px;
  @media screen and (max-width: 1000px) {
    /* max-width: 1000px; */
  }
  @media screen and (max-width: 700px) {
    gap: 20px;
    padding: 0 20px;
  }
`;

export const SingleMovie = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #d7816a33;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  .single-img {
    width: 40%;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
      transition: 0.3s ease;
    }
  }
  .single-infos {
    width: 50%;

    .name {
      margin-bottom: 20px;
      line-height: 100%;
    }
    .age {
      margin-bottom: 20px;
    }
    p {
      span {
        margin-right: 5px;
      }
    }
    .desc {
      margin-bottom: 30px;
    }
    a {
      background-color: ${colors.primary};
      color: ${colors.white};
      padding: 10px 20px;
      border-radius: 50px;
      &:hover {
        background-color: ${colors.third};
      }
    }
  }
  @media screen and (max-width: 1000px) {
    /* max-width: 1000px; */
  }
  @media screen and (max-width: 700px) {
    .single-img {
      width: 100%;
      height: 300px;
    }
    .single-infos {
      width: 100%;
      .name {
        margin: 20px 0px;
      }
    }
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 300px) {
  }
`;

/* searchbar component
 ************/
export const SearchSec = styled.section`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
  align-items: center;
  /* background-color: #05204a6b; */
  background-color: transparent;
  @media screen and (max-width: 1000px) {
    /* max-width: 1000px; */
  }
  @media screen and (max-width: 700px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
  @media screen and (max-width: 300px) {
  }
`;
export const SearchForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  input {
    width: 70%;
    padding: 10px 20px;
    line-height: 100%;
    border-radius: 50px 0px 0px 50px;
    background-color: ${colors.white};
    color: ${colors.primary};
    font-weight: 400;
    font-size: 15px;
    height: 30px;
  }
  button {
    background-color: ${colors.forth};
    color: ${colors.white};
    border-radius: 0px 50px 50px 0px;
    padding: 5px 10px;
    line-height: 100%;
    font-weight: 400;
    font-size: 15px;
    width: 30%;
    height: 30px;
    display: inline-block;
    cursor: pointer;
    &:hover {
      background-color: ${colors.third};
    }
  }
`;
/* error component
 ************/
export const ErrorSec = styled.section`
  width: 100%;
  min-height: 100vh;
  background: url(${wallpaper});
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${colors.primary};
  background-size: cover;
  color: ${colors.white};
  position: relative;
  padding: 100px 40px 50px 40px;
  display: flex;
  @media screen and (max-width: 1000px) {
    /* max-width: 1000px; */
  }
  @media screen and (max-width: 700px) {
    padding: 100px 20px 50px 20px;
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 300px) {
  }
`;
export const ErrorCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
  background-color: #05204a70;
  text-align: center;

  h1{
    margin-bottom: 20px;
  }
  a{
    background-color: ${colors.primary};
      color: ${colors.white};
      padding: 10px 20px;
      border-radius: 50px;
      &:hover {
        background-color: ${colors.third};
      }
  }
  @media screen and (max-width: 700px) {
    padding:20px;
  }
  @media screen and (max-width: 300px) {
    h1{
      font-size: 1.8rem;
    }
  }
`;

/* error component
 ************/
export const LoadingSec = styled.section`
  width: 100%;
  height: 100%;
  z-index: 200;
  position: fixed;
  top:0;
  left: 0;
  background-color: ${colors.primary};
  background-size: cover;
  color: ${colors.white};
  display: flex;
  align-items: center;
`;
export const LoadingCon = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
  gap: 40px;
  padding: 0 40px;
  @media screen and (max-width: 1000px) {
    /* max-width: 1000px; */
  }
  @media screen and (max-width: 700px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 300px) {
  }
`;