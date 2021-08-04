import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
/*
=============== 
Global Styles
===============
*/

/* toggle  */

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
    font-size: 62.5%;
}
body {
  font-family: "poppins", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  background-color: var(--white);
  font-size: 15px;
}

ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 500;
  text-transform: capitalize;
  transition: 0.3s ease;
}

svg{
    transition: 0.3s ease;
}

h1,h2,h3,h4{
    text-transform: capitalize;
}


h1{
 font-size: 3rem;
 font-weight: 700;
}
h2{
    font-size: 2.5rem;
    font-weight: 600;
}
h3{
    font-size: 2.2rem;
    font-weight: 500;
}
h4{
    font-size: 2rem;
    font-weight: 500;
}
p{
    font-size: 1.5rem;
    font-weight: 400;
}

a,button,input{
    font-size:1.5rem;
    font-weight: 500;
}

input,button{
    outline: none;
    border:none;
    transition: 0.3s ease;
    font-family: 'poppins',sans-serif;
}



/* responsive  */

@media screen and (max-width: 1000px) {
h1{
 font-size: 2.8rem;
 font-weight: 700;
}
h2{
    font-size: 2.3rem;
    font-weight: 600;
}
h3{
    font-size: 2rem;
    font-weight: 500;
}
h4{
    font-size: 1.8rem;
    font-weight: 500;
}
p{
    font-size: 1.5rem;
    font-weight: 400;
}

a,button,input{
    font-size:1.5rem;
    font-weight: 500;
}
}

@media screen and (max-width: 700px) {
    h1{
 font-size: 2.6rem;
 font-weight: 600;
}
h2{
    font-size: 2.1rem;
    font-weight: 600;
}
h3{
    font-size: 1.8rem;
    font-weight: 500;
}
h4{
    font-size: 1.6rem;
    font-weight: 500;
}
p{
    font-size: 1.4rem;
    font-weight: 400;
}

a,button,input{
    font-size:1.4rem;
    font-weight: 500;
}
}
@media screen and (max-width: 500px) {
    h1{
 font-size: 2.4rem;
 font-weight: 600;
}
h2{
    font-size: 1.8rem;
    font-weight: 600;
}
h3{
    font-size: 1.6rem;
    font-weight: 500;
}
h4{
    font-size: 1.4rem;
    font-weight: 500;
}
p{
    font-size: 1.2rem;
    font-weight: 400;
}

a,button,input{
    font-size:1.2rem;
    font-weight: 500;
}
}
@media screen and (max-width: 300px) {
    h1{
 font-size: 2.2rem;
 font-weight: 500;
}
h2{
    font-size: 1.6rem;
    font-weight: 500;
}
h3{
    font-size: 1.4rem;
    font-weight: 500;
}
h4{
    font-size: 1.3rem;
    font-weight: 500;
}
p{
    font-size: 1rem;
    font-weight: 400;
}

a,button,input{
    font-size:1rem;
    font-weight: 500;
}
}

/* toggle classes */
.show-nav{
    transform: translateX(0) !important;
    pointer-events: auto !important;
}

.search-box{
    background-color: transparent;
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left: 0;
    z-index: 120;
    transform: translateY(-100%);
    pointer-events: none;
    opacity: 0;
    transition: 0.3s ease;

}
.show-search{
    transform: translateY(0) !important;
    pointer-events: auto !important;
    opacity: 1 !important;
}
.hide-nav{
    transform: translateY(-100%) !important;
    pointer-events: none !important;
    opacity: 0 !important;

}
@media screen and (max-width: 600px) {
    .search-box{
    display: none;
}
.show-search{
    display: none;
}
.hide-nav{
    transform: translateY(0%) !important;
    pointer-events: auto !important;
    opacity: 1 !important;
}
}


`;
