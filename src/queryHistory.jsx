import React from "react";
import QueryItem from "./queryItem";

var QueryHistory = (props) => {

    // if (Object.keys(props.exerciseData.length !== 0)){

    // var renderExercises = props.exerciseData.data?.exercises.map((oneExercise => {
    //     return (
    //     <div key={oneExercise.tag_id}> 
    //       <img src={oneExercise.photo.thumb} alt={`[pic of ${oneExercise.name}]`} width="50" height="60"></img> 
    //       By {oneExercise.name} for {oneExercise.duration_min} minutes, you burn {oneExercise.nf_calories} calories 
    //     </div>)
    // }));
    // }
    var c=0;
    return (
    <div> 
        <h2> Previously Searched Activity History </h2>
        {props.history.exercisesQueries?.map(query => {
            return query.data.exercises.map(exercise => {
                c++;
                return (<div key={c} onClick={(e)=> {console.log('clicked on the thing!')}}> {exercise.name} </div>)
            })
        })}

        <h2> Previously Searched Food History </h2>
        {props.history.foodsQueries?.map(query => {
            return query.data.foods.map(food => {
                c++;
                return (<div key={c} onClick={(e)=> {console.log('clicked on the thing!')}}> {food.food_name} </div>)
            })
        })}

    </div>)
}


export default QueryHistory;