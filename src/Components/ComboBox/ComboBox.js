import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'
import ListMeals from '../ListMeals/ListMeals'

export default function ComboBox(props) {
const [value, setValue] = React.useState(props.data[0]);

const ingr = []

for (const [index, valeur] of props.data.entries()) {
  ingr.push(valeur.strIngredient)
}

  return (
    <div>
    <Autocomplete
      id="combo-box-ingr"
      value={value}
        onChange={(event, newValue) => {
          
            setValue(newValue);
        }}
      options={props.data}
      getOptionLabel={(option) => option.strIngredient}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Ingredient" variant="outlined" />}
    />
    <ListMeals data={value.strIngredient}></ListMeals>
    </div>

  );
}

