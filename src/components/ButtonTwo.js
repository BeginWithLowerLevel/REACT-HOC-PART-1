import React from "react";
import stylesWrapper from './../HOC/stylesWrapper';

const ButtonTwo = (props) => {
  return (
    <div>
      <button style={props.styles}>Sahan Kumarasiri with HOC</button>
    </div>
  );
}

export default stylesWrapper(ButtonTwo); //wrap the component with the function
