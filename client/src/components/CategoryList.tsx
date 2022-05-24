import styled from 'styled-components'
import { useState, useEffect } from "react"
import { useParams, Link, NavLink } from "react-router-dom"
import {ContainsElement2} from '../function'
import { getCategories } from '../api/Categories'


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
    .active {
        font-style: italic;
    }
`

export const Category = () => {
    const [ allCategories, setCategories] = useState([])
    useEffect(()=>{
        getCategories().then(categori => {setCategories(categori)})
    }, [])

    const newArray = ContainsElement2(allCategories)

    return <StyledCategory>
        <ul> 
            {newArray.map((category: any, index: number) => 
            <NavLink to={`/category/${category.name}`} key={index} style={(isActive) => ({color: isActive ? '#FFFFF' : '#1c115c'})}>
                <li>
                    {category.name} ({category.amount})
                </li>
            </NavLink>)}
        </ul>
    </StyledCategory>
}

