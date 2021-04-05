import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'
import ListMeals from '../ListMeals/ListMeals'
import {useState,useEffect} from 'react'




export default function ComboBox() {

const [listIngredients,setArray] = useState(["",""])
const [inputValue, setInputValue] = React.useState('');
const getingr=()=>{
    axios
      .get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then(response =>{
        setArray(response.data.meals);
      })
  }
  useEffect(()=> {
    getingr();
},[])
  return (
    <div>
    <Autocomplete
      id="combo-box-ingr"
      inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
      options={listIngredients}
      getOptionLabel={(option) => option.strIngredient}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
    <ListMeals data={inputValue}></ListMeals>
    </div>

  );
}

