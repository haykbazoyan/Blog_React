import React from "react";

const Input=(props)=>{

    
      return (
        
          <input
            className='text-gray-800 border-2 border-blue-900 py-2.5 px-6 mb-2 rounded leading-tight focus:outline-none'
            type={props.type}
            onChange={props.func}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            
          />
        
      );
  
  }
  export default Input