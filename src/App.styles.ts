import styled, { createGlobalStyle } from "styled-components";
import BGImage from './images/bg-image.jpg';
import exp from "constants";

export const GlobalStyle = createGlobalStyle`
    html {
      height: 100%;
    }
    
    body{
      background-image: url(${BGImage});
      background-size: cover;
      margin: 0;
      padding: 0 20px;
      display: flex;
      justify-content: center;
    }
    
    * {
      box-sizing: border-box;
      font-family: 'Catamaran', sans-serif;
    }
    `;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #343333;
  }

   .score {
    color: #595858;
    font-size: 2rem;
    margin: 0;
    font-weight: 500;
    padding-bottom: 5rem;
    padding-top: 14rem;
  }

  h1 {
    /* font-family: Fascinate Inline,Haettenschweiler,'Arial Narrow Bold',sans-serif; */
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fil-color: transparent;
    -moz-backbackground-clip: text;
    -moz-text-fil-color: transparent;
    //-webkit-filter: drop-shadow(2px 2px #0085a3);
    //filter: drop-shadow(2px 2px #0085a3);
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    margin: 20px;
    color:#595858;
  }

  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: none;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    width: 240px;
  }

  .start {
    max-width: 240px;
  }
  @media screen and (max-width: 450px){
    .score {
      color: rgb(89, 88, 88);
      font-size: 2rem;
      margin: 0px;
      font-weight: 500;
      padding-bottom: 3rem;
      padding-top: 0rem;
    }
  }
`;