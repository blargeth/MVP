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
  }

  APIgetRequestforPotatoes() {
    console.log('running the api request!!')
    console.log(APIID, APPIKEY)
    return axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query="potato"&detailed=true`, {
      headers: {
          'x-app-id': window.APIKEY,
          'x-app-key': window.APIID,
        }
      })
      .then(result => {
        console.log(result)

        this.setState({potatoData: result})
        return result})
      .catch(err => {console.log(err)})
  };

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
      <Button APIgetRequestforPotatoes={this.APIgetRequestforPotatoes} />
      </div>
    );
  }
}

export default App;