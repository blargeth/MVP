import React from "react";

var FoodData = (props) => {
    // console.log(props)
    if (Object.keys(props.foodData.length !== 0)){

    var renderFoods = props.foodData.data?.foods.map((oneFood => {
        return (
        <div key={oneFood.tags.tag_id}> 
          <img 
            src={oneFood.photo.thumb} 
            alt={`pic of ${props.name}`} 
            width="50" 
            height="60"
            onClick={(e)=> {
              props.toggleNutritionFacts();
            }}>
          </img> 
          {oneFood.serving_qty} {oneFood.serving_unit} of {oneFood.food_name} will provide {oneFood.nf_calories} calories of energy 
        </div>)
    }));
    }

    return (
    <div onClick={props.APIgetRequest}> 
        <h4>list of your foods: </h4> <br/>
        [quantity] [unit] of [food] will provide [calories] of energy
        {renderFoods}
    </div>)
}


export default FoodData;