import styled from 'styled-components'
import axios from "axios"
import { useState, useEffect } from "react"
import {ContainsElement2} from '../function'
import { getCategories } from '../api/Categories'



export const StyledCategory = styled.div`
    background-color: #9B5400;
    width: 250px;
    height: 891px;
    border: 1px solid #FFFFFF;
    position: absolute;
    top: 150px;
    right: 0px;
    color: #FFFFFF;
    font-family: 'Maitree';
    font-size: 32px;
    /* margin-left: 400px; */
`

export const Category = () => {
    const [ allCategories, setCategories] = useState([])
    useEffect(()=>{
        const getCategories = async () => {
            const categories = await axios.get("http://localhost:3100/categories/")
            setCategories(categories.data) 
        }
        getCategories()
    }, [])


    const newArray = ContainsElement2(allCategories)
    
    

    return <StyledCategory>
        <ul> 
            {newArray.map((category: any, index: any) => 

            <li key={index}>{category.name} ({category.amount})</li>)}
        </ul>
         </StyledCategory>
}

