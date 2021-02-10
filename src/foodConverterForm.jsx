import React from "react";

var FoodConverterForm = (props) => {
    return (
    <form>
      <label>
        Food: <br/>
        <input className="inputBox" 
        type="text" 
        value={props.food}
        onChange={(e) => {props.handleChange(e, "food")}} 
        placeholder="ex: 1 potato"/>
      </label> <br />
      <input type="button" value="Submit" value="swap" onClick={props.handleSubmit}/>
      <label> <br />
        Activity: <br/>
        <input className="inputBox" 
        type="text" 
        value={props.activity}
        onChange={(e) => {props.handleChange(e, "activity")}}
        placeholder="ex: 30 minutes of sleeping" 
        />
      </label> <br/>
      <button > Get data! </button>
    </form>
    )
}

export default FoodConverterForm;
      