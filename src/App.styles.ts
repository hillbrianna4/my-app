import styled, { createGlobalStyle } from 'styled-components';
//@ts-ignore
import BGImage from './images/lemons.jpg';

export const GlobalStyle =createGlobalStyle 
`
html{
    height:100%;
}

body{
background-image: url(${BGImage});
background-size:cover;
margin:0;
padding: 0 20px;
display: flex;
justify-content:center;

}

*{
    box-sizing:border-box;
    font-family: Lobster;
}


`;

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;

> p {
color: #fff;
font-size: 2rem;
}
.score{
    color:#fceef5;
    font-size:2rem;
    margin:0;
    filter:drop-shadow(2px 5px #ffc85c);
}
h1{
    font-family:'Sacramento';
    background-image:linear-graident(180deg, #fff, #87f1ff);
    background-size:100%;
    background-clip:text;
    --webkit-background-clip: text;
    --webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter:drop-shadow(2px 5px #ffc85c);
    font-size: 100px;
    font-weight: 400;
    text-align:center;
    margin:20px;
    color:#fceef5;
}

.start, .next{
    cursor:pointer;
    background:  #ffda77;
    border: 2px solid #f9f7cf;
    box-shadow:0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius:10px;
    height:40px;
    margin: 20px 0;
    padding: 0 40px;
    font-size:2rem;
    color:#fceef5;
}
.start:hover, .next:hover{
    cursor:pointer;
    background:#ffc85c;
    border: 2px solid #f9f7cf;
    box-shadow:0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius:10px;
    height:40px;
    margin: 20px 0;
    padding: 0 40px;
    font-size:2rem; 
    transition:.5s;
    color:#fff;
}

.start{
    max-width:200px;
}
`;