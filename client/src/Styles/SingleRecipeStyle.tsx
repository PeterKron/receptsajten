import styled from 'styled-components'

export const StyledRecipe = styled.div`
    background-color: white;
    width: 967px;
    border: 2px solid #9B5400;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-left: 150px;
    border-radius: 5px;
    .divider {
        background-color: black;
        width: 884px;
        height: 3px;
        border-radius: 500px;
        margin: 15px 0px 15px 16px;
    }
    img {
        object-fit: contain;
    }
    .header {
        display: flex;
        justify-content: space-between;
    }
    .wrapper2{
        padding: 25px;
    }
    input {
        width: 427px;
        height: 45px;
        border: 2px solid #9B5400;
        background-color: #FFFFFF;
        margin-bottom: 5px;
        color: #000000;
        text-align: start;
        border-radius: 10px;
        font-family: 'Maitree';
        font-size: 20px;
        padding-left: 10px;
        outline: none; 
    }
    textarea {
        width: 750px;
        height: 250px;
        border: 2px solid #9B5400;
        background-color: #FFFFFF;
        border-radius: 10px;
        font-family: 'Maitree';
        font-size: 20px;
        padding-left: 10px;
        outline: none;
        resize: none;
    }
    button {
        width: 125px;
        height: 45px;
        background-color: #9B5400;
        border: 1px solid #FFFFFF;
        color: #FFFFFF;
        border-radius: 10px;
        font-family: 'Maitree';
        font-size: 20px;
        padding-left: 10px;
        outline: none;
        margin-left: 20px;
        align-self: flex-end;
    }
    h1, h3, h4 {
        font-family: 'Spectral SC';
        font-weight: bold;
        margin: 0;
    }
    h1 {
        font-size: 40px;
    }
    p {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', sans-serif;
        font-style: italic;
    }
    .titleandingredients {
        width: 500px;
    }
    .ratings {
        display: flex;
        align-items: flex-start;
    }
    .ratingstar {
        margin: 0px 5px;
    }
    .commentfield {
        display: flex;
    }
    .ratingText {
        color: red;
    }
`