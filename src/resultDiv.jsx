import React from "react";
import { render } from "react-dom";

var ResultDiv = (props) => {
    console.log(props)
    if (Object.keys(props.exerciseData.length !== 0)){
        console.log(props.exerciseData.data?.exercises)
    var renderExercises = props.exerciseData.data?.exercises.map((oneExercise => {
        return (<div key={oneExercise.tag_id}> By {oneExercise.name} for {oneExercise.duration_min} minutes, you burn {oneExercise.nf_calories} calories </div>)
    }));
    }
    console.log(renderExercises, 'awef');
    return (
    <div onClick={props.APIgetRequest}> 
        these are the list of your activities:
        {renderExercises}
    </div>)
}


export default ResultDiv;