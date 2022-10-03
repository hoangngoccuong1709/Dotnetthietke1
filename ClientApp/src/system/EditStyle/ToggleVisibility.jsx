import React from 'react'
import { useState } from 'react'

export default function ToggleVisibility({children}) {
    const [show,setShow] = useState();

    function toggleShow(){
        setShow(!show);
    }
    var buttonText = show? "Hide Edit " : "Show Edit ";
  return (
    <div>
    {show&&children}
<button style={ {position : "absolute", zIndex: '2'}} onClick={toggleShow} >{buttonText}</button>
    </div>
  )
}
