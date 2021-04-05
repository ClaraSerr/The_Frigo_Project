import React from 'react'
import './style.css'
import ComboBox from '../ComboBox/ComboBox'
import NavbarComp from '../Navbar/NavbarComp'

import axios from 'axios'

import {useState,useEffect} from 'react'

/**
* @author
* @function Home
**/

const Home = (props) => {
const [value,setValue] = useState(0)
const [array,setArray] = useState(["not working","ue"])

/*

const getmeal=()=>{
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      .then(response =>{
        setArray(response.data.meals);
      })
  }
 
useEffect(()=> {
    getmeal()
},[])*/

    /*const test=()=>{
        if(value==5){
            setValue(0)
        }
        else{setValue(5)}
    }*/
  return(
    <div>The Frigo App
        
        
        <ComboBox/>
        
    


    </div>
   )

 }

 export default Home