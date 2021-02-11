import React from "react";
import axios from "axios";

import Button from "./getButton";
import FoodConverterForm from "./foodConverterForm"
import ActivityList from "./activityList";
import FoodData from "./foodData";
import QueryHistory from "./queryHistory";
import Results from "./results";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: '',
      activity: '',
      exerciseAPIData: {},
      foodAPIData: {},
      fullExerciseList: [],
      fullFoodList: [],
      sliderValue: 60,
      showNutritionFacts: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.APIPostForFoods = this.APIPostForFoods.bind(this);
    this.APIPostForExercises = this.APIPostForExercises.bind(this);
    this.changeResultState = this.changeResultState.bind(this);
    this.sliderChange = this.sliderChange.bind(this);
    this.toggleNutritionFacts = this.toggleNutritionFacts.bind(this);
  }

  APIPostForFoods(query) {
    return axios.post(`https://trackapi.nutritionix.com/v2/natural/nutrients`, {
        "query": query || "potatoes"
      }, {
        headers: {
          'x-app-id': window.APIKEYyy,
          'x-app-key': window.APIIDdd
        }
        })
      .then(result => {

        this.setState({"foodAPIData": result})
        return result})
      .catch(err => {console.log(err)})
      //update full list
      .then(result => {

        this.setState((state) => {
          state.fullFoodList.push(result);
          return {
            fullFoodList: state.fullFoodList
          }
        })
      })
      .catch(err => {console.log(err)})
      
  }

  APIPostForExercises(query) {
    return axios.post(`https://trackapi.nutritionix.com/v2/natural/exercise`, {
        "query": query || "sleeping for 1 hour"
      }, {
        headers: {
          'x-app-id': window.APIKEYyy,
          'x-app-key': window.APIIDdd
        }
        })
      .then(result => {

        this.setState({"exerciseAPIData": result})
        return result})
      .catch(err => {console.log(err)})
      //update full list
      .then(result => {

        this.setState((state) => {
          state.fullExerciseList.push(result);
          return {
            fullExerciseList: state.fullExerciseList
          }
        })
      })
      .catch(err => {console.log(err)})
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log("clicked!")
    this.setState({
      "food": '',
      "activity": ''
    })
  }

  handleChange(e, stateName) {
    this.setState({
      [stateName]: e.target.value
    })
  }

  //use previous query data to change current data
  changeResultState() {
    console.log("changes result state");
  }

  sliderChange(e) {
    if (e.target.value >= 180) {
      e.target.value = 180
    }
    if (e.target.value <= 0) {
      e.target.value = 0
    }
    this.setState({
      sliderValue: e.target.value
    })
  }

  toggleNutritionFacts() {
    this.setState((state) => {
      return {showNutritionFacts: !state.showNutritionFacts}
    })
  }

  componentDidMount() {
  //   this.APIPostForExercises("1 hour walking");
  //   this.APIPostForFoods()
  //   .then(potatoResults => this.setState((state) => ({potatoData: state.foodAPIData,
  // })))
    // .catch(err => {console.log(err)})

  }

  render() {

    return (
      <div>
        <h1 className="title"> Potato to Activity Converter</h1>
        <h3>
          Input either a food amount or an activity with a time duration to get info from the API. <br/>
          The app starts with queries for walking and potatoes.
        </h3>
              
      <FoodConverterForm 
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        food={this.state.food}
        activity={this.state.activity}
        showNutritionFacts={this.state.showNutritionFacts}
        toggleNutritionFacts={this.toggleNutritionFacts}
      />

      <Button onClickFunction={this.APIPostForFoods} 
      message="press me to get potato data!"/>

      <Button onClickFunction={this.APIPostForFoods} 
        message="i want my food query!"
        queryString={this.state.food}/>

      <Button onClickFunction={this.APIPostForExercises} 
        message="i want my activity query!"
        queryString={this.state.activity}/>
      <br/>
      Based on data from the API...
      <Results 
        exerciseData={this.state.exerciseAPIData}
        foodData={this.state.foodAPIData}
        sliderValue={this.state.sliderValue}
        sliderChange={this.sliderChange}
      />

      <ActivityList 
        exerciseData={this.state.exerciseAPIData}
      /> 
      <br/>
      <FoodData
        foodData={this.state.foodAPIData}
        toggleNutritionFacts={this.toggleNutritionFacts}
      /> 

      <QueryHistory 
      history={{
        "exercisesQueries": this.state.fullExerciseList,
        "foodsQueries": this.state.fullFoodList}} />

      <br/><br/><br/>
      <a href="https://en.wikipedia.org/wiki/Metabolic_equivalent_of_task" target="_blank">Wikipedia article for MET(Metabolic_equivalent_of_task)</a>  
      </div>
    );
  }
}

export default App;