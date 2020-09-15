import React, { Component } from 'react';
import {Cardlist} from './components/card-list/cardlist';

import './searchboxc.css'

import './App.css';



class App  extends Component{ 
  constructor(){
    super();
    this.state={
      monster:[],
      searchfield:''
      
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monster:users}));
    console.log(this.state.monster);

  };
  render(){
    const { monster,searchfield } = this.state;
    const filteredmonster = monster.filter(monster =>
       monster.name.toLowerCase().includes(searchfield.toLowerCase()));
       console.log(filteredmonster);
    
   
  return (
    
    <div className='App'>
    <h1 className="apph">Monsters</h1>
    
    <input className="searchbox" type='search' placeholder='search monster' onChange={e=>{
      this.setState({searchfield: e.target.value}
      );
      console.log(this.state);
    }}/>
    <Cardlist  monster={filteredmonster}/>

    </div>
  );
  }
}

export default App;
