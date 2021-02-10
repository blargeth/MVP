import React from "react";
import Draggable from 'react-draggable';

var ActivityList = (props) => {
    // console.log(props)
    if (Object.keys(props.exerciseData.length !== 0)){

    var renderExercises = props.exerciseData.data?.exercises.map((oneExercise => {
        return (
        <div key={oneExercise.tag_id}> 
          <img src={oneExercise.photo.thumb} alt={`[pic of ${oneExercise.name}]`} width="50" height="60"></img> 
          By {oneExercise.name} for {oneExercise.duration_min} minutes, you burn {oneExercise.nf_calories} calories  MET: {oneExercise.met} 
        </div>
        )
    }));
    }

    return (
    <Draggable>
    <div> 
        list of your activities:
        {renderExercises}
    </div>
    </Draggable>)
}


export default ActivityList;