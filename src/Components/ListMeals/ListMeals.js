import React from 'react'
import Meals from '../Meals/Meals'
import axios from 'axios'
import {useState,useEffect} from 'react'


const ListMeals = (props) => {
console.log(props.data)
const [array,setArray] = useState(["not working","ue"])



const getmeal=(props)=>{
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?i='+props.data)
      .then(response =>{
        setArray(response.data.meals);
      })
  }
  const items = []

for (const [index, value] of array.entries()) {
  items.push(<Meals data={[value.strMeal,value.strMealThumb,value.idMeal]} />)
}
 
useEffect(()=> {
    getmeal(props)
},[props])
    return(
        <div>
       {items}
      </div>
     )
  
   }
  
   export default ListMeals