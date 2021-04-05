import React from 'react'
import './style.css'
import ComboBox from '../ComboBox/ComboBox'
import NavbarComp from '../Navbar/NavbarComp'
import Meals from '../Meals/Meals'
import axios from 'axios'

import {useState,useEffect} from 'react'

/**
* @author
* @function Home
**/

const Home = (props) => {
const [value,setValue] = useState(0)
const [array,setArray] = useState(["not working","ue"])



const getmeal=()=>{
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      .then(response =>{
        setArray(response.data.meals);
      })
  }
 
useEffect(()=> {
    getmeal()
},[])

    /*const test=()=>{
        if(value==5){
            setValue(0)
        }
        else{setValue(5)}
    }*/
  return(
    <div>The Frigo App
        
        
        <ComboBox/>
        <Meals data={[array[0].strMeal,array[0].strMealThumb,array[0].idMeal]}></Meals>
    


    </div>
   )

 }

 export default Home