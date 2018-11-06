 import React from 'react'

 import './person.css';
 const person = (props ) =>{
     return (
     <div className="Person" >
         <p onClick={props.click}>I'm {props.name}, a person goddamit! I'm {props.age}years old!</p>
         <p>{props.children} </p>
          <input type="text" onChange={props.changed} value={props.name}/>
         </div>
     )
 };

 export default person;