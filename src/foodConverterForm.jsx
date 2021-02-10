import React from "react";

var FoodConverterForm = (props) => {
    return (
    <form>
      <label>
        Food: <br/>
        <textarea className="inputBox" 
        value={props.food}
        onChange={(e) => {props.handleChange(e, "food")}} 
        placeholder="ex: 1 potato"/>
      </label> <br />

      <input type="button" value="Submit" value="clearAll" onClick={props.handleSubmit}/>

      <label> <br />
        Activity: <br/>
        <textarea className="inputBox"  
        value={props.activity}
        onChange={(e) => {props.handleChange(e, "activity")}}
        placeholder="ex: 30 minutes of sleeping" 
        />
      </label> <br/>
      <button onClick={e=>{
          e.preventDefault();
          console.log("clicked...")}}> Do nothing! </button>
    </form>
    )
}

export default FoodConverterForm;
      