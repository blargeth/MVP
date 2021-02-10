import React from "react";

var ActivityList = (props) => {
    // console.log(props)
    if (Object.keys(props.exerciseData.length !== 0)){

    var renderExercises = props.exerciseData.data?.exercises.map((oneExercise => {
        return (<div key={oneExercise.tag_id}> By {oneExercise.name} for {oneExercise.duration_min} minutes, you burn {oneExercise.nf_calories} calories </div>)
    }));
    }

    return (
    <div> 
        list of your activities:
        {renderExercises}
    </div>)
}


export default ActivityList;