import React from "react";

import NutritionFacts from "./nutritionFacts";

var FoodConverterForm = (props) => {
  var renderNutritionFacts = null;
  if (props.showNutritionFacts) {
    renderNutritionFacts = <NutritionFacts toggleNutritionFacts={props.toggleNutritionFacts}/>
  }
    return (
    <form>

      <label> <br />
        Activity: <br/>
        <textarea className="inputBox" 
        type="textarea" 
        value={props.activity}
        onChange={(e) => {props.handleChange(e, "activity")}}
        placeholder="ex: 30 minutes of sleeping" 
        />
      </label> 

      <label> <br/>
        Food: <br/>
        <textarea className="inputBox" 
        type="textarea" 
        value={props.food}
        onChange={(e) => {props.handleChange(e, "food")}} 
        placeholder="ex: 1 potato"/>
      </label> <br />

      <input type="button" value="Submit" value="clear forms" onClick={(e) => {
          props.handleSubmit()
          props.toggleNutritionFacts()}}/>
      <br/>
      <button onClick={e=>{
          e.preventDefault();
          console.log("clicked...")}}> Do nothing! </button>

      {renderNutritionFacts}
    </form>
    )
}

export default FoodConverterForm;
      