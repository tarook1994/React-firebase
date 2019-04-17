import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Firebase from 'firebase'
import config from './config'
import Cards from './Components/Cards/Cards'
import { stat } from 'fs';

class App extends Component {


  constructor(props){
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      input :'',
      database : null
    }

  }

  writeUserData = () => {
    Firebase.database().ref('/movies').set(this.state);
    console.log('DATA SAVED');
  }
  
  getUserData = () => {
    let ref = Firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      console.log(state)
      this.setState({database : state});
    });
    console.log('DATA RETRIEVED');
   
  }

  onClickHandler = (input) => {
    let ref = Firebase.database().ref('/');
    ref.push({name: input}, msg => {
      console.log(msg)
    })
  }

  componentWillMount() {
    this.getUserData();
  }
  
  render() {

   

    return (

        <div className="App">
         <div>
           {this.state.database? <Cards cards = {this.state.database}/>: <div></div>}
          

         </div>

         <div>
           <input type="text"></input>
           <br></br>
           <button > Submit </button>
         </div>
        </div>

    );
  }
}

export default App;
