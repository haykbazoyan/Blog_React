import React from "react";

export default function Textarea(props) {
      return (
        <div>
          <textarea
            className='text-gray-800 border-2 border-blue-900 w-11/12 py-2.5 px-6 mb-2 mr-2 rounded resize-none leading-tight focus:outline-none'
            type={props.type}
            onChange={props.func}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            cols={props.cols}
            rows={props.rows}
          />
        </div>
      );
  
  }
  