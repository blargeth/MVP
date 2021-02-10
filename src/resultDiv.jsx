import React from "react";

var ResultDiv = (props) => {

    return (
    <div onClick={props.APIgetRequest}> 
        these are the results from your query:
    </div>)
}


export default ResultDiv;