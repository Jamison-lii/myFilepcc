import React from 'react'
import './Fields.css'

const Fields = (prop) => {
  return (
    <div className="Fields">
        
            <label id={prop.labelid} for={prop.name}>{prop.label}</label>
            <input id={prop.id} type={prop.type} name={prop.name} placeholder={prop.placeholder} />
           {/* <button type="submit">{prop.buttonText}</button>*/}
            
    </div>    
  )
}

export default Fields