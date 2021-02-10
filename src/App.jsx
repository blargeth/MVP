import React from "react";
import axios from "axios";

import Button from "./getButton";
import FoodConverterForm from "./foodConverterForm"
import ResultDiv from "./resultDiv";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      potatoData : undefined,
      food: '',
      activity: ''
    }

    this.APIgetRequest = this.APIgetRequestforPotatoes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.APIPostForFoods = this.APIPostForFoods.bind(this);
    this.APIPostForExercises = this.APIPostForExercises.bind(this);
  }

  APIgetRequestforPotatoes() {
    console.log('running the api request!!')
    return axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query="potato"&detailed=true`, {
      headers: {
        'x-app-id': 'a68bfb58',
        'x-app-key': '873ad07273ee8534c33943bf98f26e23'
      }
      })
      .then(result => {
        console.log(result)

        this.setState({potatoData: result})
        return result})
      .catch(err => {console.log(err)})
  };

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

        this.setState({potatoData: result})
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

        this.setState({potatoData: result})
        return result})
      .catch(err => {console.log(err)})
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log("clicked!")
  }

  handleChange(e, stateName) {
    this.setState({
      [stateName]: e.target.value
    })
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
      <ResultDiv/> <br/><br/><br/>
      <Button onClickFunction={this.APIgetRequestforPotatoes} message="press me to get potato data!"/>
      <Button onClickFunction={this.APIPostForFoods} 
      message="i want my food query!"
      queryString={this.state.food}/>
      <Button onClickFunction={this.APIPostForExercises} 
      message="i want my exercise query!"
      queryString={this.state.activity}/>
      </div>
    );
  }
}

export default App;