import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #2a2e35;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        background-color: transparent;
        padding: 1rem 2rem; 
        border: 2px solid #ffe45c;
        color: #fff;
        transition: all 0.25s linear;    
        &:hover{
            background-color: #ffe45c;
            color: #2a2e35;
        }

    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }

    h3{
        color: #fff;

    }
    span{
        color: #ffe45c;
        font-weight: bold;
    }

    a{
        font-size: 1.1rem;
    }

    p{
        padding: 3rem 0;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

    img {
        width: 500px;
    }
    
`;

export default GlobalStyle;
