import React from 'react'

const Meals = (props) => {
    return(
        <div>
        <img src={props.data[1]} className="sprite"/>
       
        <div>{props.data[0]}</div>
      </div>
     )
  
   }
  
   export default Meals