import React, {useState} from 'react'
import Stick from './Stick'

import './button.css'
function Button({stateOfButton,clickHandle}) {

  return (
    <button onClick={clickHandle}>
       <Stick css="horizontal"/>
       {
         stateOfButton &&(
           <Stick css="vertical"/>
         )
       }
    </button>
  )
}

export default Button