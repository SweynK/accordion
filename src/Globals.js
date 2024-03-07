import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght,YOPQ@100..900,40..300&display=swap');

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
        font-family: "Kumbh Sans", sans-serif;;
    }
    body{
        min-height: 100vh;
        background-image: linear-gradient(to bottom, #b068e9, #6463e7 147%);
        display: flex;
        justify-content: center;
        padding: 14.8rem 0 8.5rem;
    }
   
`;
