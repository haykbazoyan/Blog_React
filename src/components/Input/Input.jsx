import React from "react";

export default class Input extends React.Component {
    state = {
      value: "",
    };
  
    handleInputChange = (e) => {
      e.stopPropagation();
      this.setState({
        value: e.target.value,
      });
  
      // this.props.onChange(e.target.value);
    };
  
    render() {
      const { type, value, placeholder, name, onClick } = this.props;
      const { value: stateValue } = this.state;
  
      return (
        <div>
          <input
            className='text-gray-800 border-2 border-blue-900 py-2.5 px-6 mb-2 mr-2 rounded leading-tight focus:outline-none'
            type={type}
            value={typeof value === "undefined" ? stateValue : value}
            placeholder={placeholder}
            name={name}
            onChange={this.handleInputChange}
            onClick={onClick}
          />
        </div>
      );
    }
  }