import axios from "axios";
import React from "react";

var Button = (props) => {

    return <button onClick={(e) => props.onClickFunction(props.queryString)}> {props.message}</button>
      
}

export default Button;