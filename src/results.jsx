import React from "react";

//will calculate based on prop info

let Results = (props) => {

    var exerciseList = props.exerciseData.data?.exercises.map((oneExercise => {
        return oneExercise.name;
    })) || '[no activity]';

    var caloriesPerPotato = 160.89;
    var caloriesPerActivityPerHour = props.exerciseData.data?.exercises.reduce(((acc, currentVal) => {
        let calories = currentVal.nf_calories;
        let minutes = currentVal.duration_min;
        let CalsPerMinPerHour= (calories * props.sliderValue) / minutes;
        return acc + CalsPerMinPerHour;
    }), 0);
    // console.log(caloriesPerActivityPerHour, 'cals per hour')
    var potatoesPerActivity = (caloriesPerActivityPerHour / caloriesPerPotato) || '0';
    // console.log(exerciseList.join(', '), "exerlist")
    if (Array.isArray(exerciseList)) {
        exerciseList = exerciseList.join(', ');
    }
    return (
    <div> 
        <h1>Results from your query:</h1>
        <h2> You will need to eat <span className="potatoes"> {potatoesPerActivity} </span> potatoes for <span className="activity"> {exerciseList} </span> for {props.sliderValue} minutes</h2>
        <form onSubmit={(e) => {e.preventDefault}}>
          <input 
            type="range" 
            min={0} 
            max={180} 
            value={props.sliderValue}
            onChange={(e) => {props.sliderChange(e)}}></input>
          
        {/* TODO: Restrict text to be just numbers!! */}
          <input 
            type="number"
            value={props.sliderValue} 
            min={0}
            max={180}
            step={1}
            onChange={(e) => {props.sliderChange(e)}}/>
        </form>
    </div>)
}


export default Results;