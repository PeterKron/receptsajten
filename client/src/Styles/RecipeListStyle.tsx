import styled from 'styled-components'

export const StyledRecipes = styled.div`
    background-color: white;
    display: flex;
    /* align-items: center; */
    width: 967px;
    height: 236px;
    border: 5px solid #9B5400;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    margin-bottom: 32px;
    margin-left: 124px;
    img {
        object-fit: cover;
        margin-left: 28px;
        margin-top: 20px;
    }
    h1,h4, p{
        margin: 0;
        margin-left: 28px;
    }
    h1, h4 {
        font-family: 'Spectral SC';
        font-weight: bold;
    }
    h1 {
        /* font-size: 34px; */
        margin-top: 20px;
    }
    .smallinfo {
        display: flex;
        align-items: center;
        font-size: 20px;
        margin-bottom: 2px;
    }
    p {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', sans-serif;
        font-style: italic;
        font-size: 15px;
        line-height: 18px;
    }
    .divider {
        background-color: black;
        width: 684px;
        height: 2px;
        border-radius: 500px;
        margin: 5px 0px 10px 16px;
    }
    .title {
        display: flex;
        justify-content: space-between;
    }
    .ratings {
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-left: 0px;
    }
    .ratingnumber {
        margin-top: 12px;
        margin-left: 2px;
    }
    .ratingstar {
        margin-left: 5px;
    }
    .textcontent {
        width: 700px;
    }
`