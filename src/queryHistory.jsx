import React from "react";
import QueryItem from "./queryItem";

var QueryHistory = (props) => {

    var c=0;
    return (
    <div> 
        <h2> Previously Searched Activity History </h2>
        {props.history.exercisesQueries?.map(query => {
            return query.data.exercises.map(exercise => {
                c++;
                return (<div key={c} onClick={(e)=> {console.log('replace with a useful function')}}> {exercise.name} </div>)
            })
        })}

        <h2> Previously Searched Food History </h2>
        {props.history.foodsQueries?.map(query => {
            return query.data.foods.map(food => {
                c++;
                return (<div key={c} onClick={(e)=> {
                    props.changeCompareFood(food.food_name, food.nf_calories)
                }}> name: {food.food_name} calories: {food.nf_calories}</div>)
            })
        })}

    </div>)
}


export default QueryHistory;