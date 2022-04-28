import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    *{
      font-family: 'Raleway', sans-serif;
      background:black;
      margin:0;
      padding:0;
      box-sizing:border-box
      
    }
    `;

export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
      </>
    );
  }
}
