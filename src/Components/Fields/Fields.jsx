import React from 'react'

const Fields = (prop) => {
  return (
    <div className="Fields">
        
            <label>{prop.label}</label>
            <input type={prop.type} name={prop.name} placeholder={prop.placeholder} />
            <button type="submit">{prop.buttonText}</button>
            
    </div>    
  )
}

export default Fields