import { createGlobalStyle } from "styled-components";
import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Todos from "./Page/Todos";
import Main from "./Main";




const OI = styled.h1`
  padding: 1vw;
  color: red;
`;
const PARAGRAFO = styled.p`
  padding: 1vw;
`;
const CATE = styled.p`
  padding: 1vw;
  display: flex;
  width: 1vw;
`;


const FILHO = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 10vw;
  align-items: center;
  width: 10vw;
  color: white;
`;



const REI = styled.img`
  width: 35vw;
  height: 20vw;
  margin-top: 10vw;
  margin-left: 2.5vw;
  p {
    font-weight: 400;
  }
`;
const LEAO = styled.div`
  display: flex;
  p {
    color: white;
    width: 30vw;
    font-weight: 200;
    font-size: 1vw;
    margin-top: 6vw;
    margin-left: 1vw;
  }
`;
const NAVEGACAO = styled.nav`
  position: absolute;
  display: none;
  cursor: pointer;
  margin-top: 2vw;
  padding: 1vw;
  background-color: #2c2c2c;
  border-radius: 0 0 0.4vw 0.4vw;
  border: none;
`;
const NAVH = styled.h4`
  padding: 1vw;
  background-color: #2c2c2c;
  color: grey;
  &:hover {
    cursor: pointer;
    color: white;
    font-weight: 500;
    display: block;
    &:hover ${NAVEGACAO} {
      display: block;
    }
  }
`;


const NAVE = styled.div`
  &:hover ${NAVEGACAO} {
    display: block;
    margin-top: -0.7vw;
  }
`;

export default class Header extends React.Component {
  
 
  
  
  
  render() {
    return (
      <Router>
        <div>
          <FILHO>
            <Link to="/">
              <OI>THANFLIX</OI>
            </Link>
            <Link to="/">
              <PARAGRAFO>Inicio</PARAGRAFO>
            </Link>
            <NAVE>
              <CATE>Categorias&#9662; </CATE>
              <NAVEGACAO>
                <Link to="todos">
                  <NAVH>todos</NAVH>
                </Link>
                <NAVH>favoritos</NAVH>
                <NAVH>ja vistos</NAVH>
                <NAVH>adicionados</NAVH>
              </NAVEGACAO>
              
            </NAVE>
          </FILHO>
          
          
          <Routes>
            <Route path="todos" element={<Todos />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
