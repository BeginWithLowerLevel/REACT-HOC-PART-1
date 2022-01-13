import React from "react";

const styles = {
  default: {
    backgroundColor: "red",
    color: "white",
    padding: "5px",
  },
  disable: {
    backgroundColor: "gray",
    color: "black",
  },
};

export default function ButttonOne(props) {
  let _styles = { ...styles.default }; //copy the default styles via spreading

  if (props.disable) {
      _styles = {..._styles , ...styles.disable} //override the properties 
  }

  return (
    <div>
      <button style={_styles}>Sahan Kumarasiri without HOC</button>
    </div>
  );
}
