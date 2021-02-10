import React from "react";
import axios from "axios";

import Button from "./getButton";
import FoodConverterForm from "./foodConverterForm"
import ActivityList from "./activityList";
import FoodData from "./foodData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: '',
      activity: '',
      exerciseAPIData: {},
      foodAPIData: {},
      fullExerciseList: {},
      fullFoodList: {}
      
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.APIPostForFoods = this.APIPostForFoods.bind(this);
    this.APIPostForExercises = this.APIPostForExercises.bind(this);
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
        console.log(result)

        this.setState({"foodAPIData": result})
        return result})
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
        console.log(result)

        this.setState({"exerciseAPIData": result})
        return result})
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

  componentDidMount() {
    this.APIPostForExercises("1 hour walking, 1 hour bouldering, 1 hour sleeping");
    this.APIPostForFoods();
  }

  render() {

    return (
      <div>
        <h3>
          Input either a food amount or an activity with a time duration and press get data to get info from the API.
        </h3>
              
      <FoodConverterForm 
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        food={this.state.food}
        activity={this.state.activity}
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
      <ActivityList 
        exerciseData={this.state.exerciseAPIData}
      /> 
      <br/>
      <FoodData
        foodData={this.state.foodAPIData}
      /> 

      

      <br/><br/><br/>
      </div>
    );
  }
}

export default App;