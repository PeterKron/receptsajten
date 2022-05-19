import styled from 'styled-components'
import { useState, useEffect } from "react"
import {ContainsElement2} from '../function'
import { getCategories } from '../api/Categories'
import { Link } from 'react-router-dom'


export const StyledCategory = styled.div`
    background-color: #9B5400;
    width: 250px;
    height: 100vw;
    border: 1px solid #FFFFFF;
    position: absolute;
    top: 150px;
    right: 0px;
    color: #FFFFFF;
    font-family: 'Maitree';
    font-size: 32px;
`

export const Category = () => {
    const [ allCategories, setCategories] = useState([])
    useEffect(()=>{
        getCategories().then(categori => {setCategories(categori)})
    }, [])

    const newArray = ContainsElement2(allCategories)
        
    return <StyledCategory>
        <ul> 
            {newArray.map((category: any, index: any) => 
            <Link to={`/category/${category.name}`} key={category.name}>
                <li key={index}>{category.name} ({category.amount})</li>
            </Link>)}
        </ul>
    </StyledCategory>
}

