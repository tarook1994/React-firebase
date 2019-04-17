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
      this.setState({database : Object.values(state)
      });
      console.log('DATA RETRIEVED');
    });
   
   
  }

  onClickHandler = () => {
    let ref = Firebase.database().ref('/');
    ref.push({name: this.state.input}, msg => {
      console.log(msg)
    })
  }

  onChangeHandler = (event) => {
   const data =  event.target.value;
   this.setState({
     input : data
   })
  }

  componentWillMount() {
    this.getUserData();
  }


  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.database !== nextState.database){
      console.log(this.state.database +"  zas" + nextState.database)
      return true;
    }
    console.log(false)
    return false;
  }


  
  render() {

   

    return (

        <div className="App">
         <div>
           {this.state.database? <Cards cards = {this.state.database}/>: <div></div>}
          

         </div>

         <div>
           <input type="text" onChange={(event) => this.onChangeHandler(event) }></input>
           <br></br>
           <button onClick={this.onClickHandler}> Submit </button>
         </div>
        </div>

    );
  }
}

export default App;
