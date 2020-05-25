import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons : [
      {id:'12fd3',name:'Sandeepa', age:22},
      {id:'12fd6',name:'prince', age:23},
      {id:'12fd7',name:'Abhinav', age:17}
    ],
    showPersons:false,
  };
  
deletePersonHandler = (personIndex) =>{
  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons : persons});
}

  nameChangeHandler = (event, id) => {
const personIndex = this.state.persons.findIndex(p => {
  return p.id === id;
});
const person ={ ...this.state.persons[personIndex] };

// const person = Object.assign({},this.state.persons[personIndex]);

person.name = event.target.value;
const persons = [...this.state.persons];
persons[personIndex] = person;


    this.setState({
      persons : persons})
    }
    toggleNameHandler=()=>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow })
    }
  render() { 
    const style={
      backgrounColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'auto',
      cursor:'pointer',
      // ':hover':{ backgroundColor: 'lightGreen', color: 'black'}
    }
    let persons = null;
    if(this.state.showPersons){
      persons=(
      <div>
        {this.state.persons.map((person, index) =>{
          return <Person
          click={()=> this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event)=>this.nameChangeHandler(event, person.id)}
          />
        })}
      </div>
      );
      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor : 'hotPink',
        color:'black'
      };
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push(' bold');
    }
    return ( 
  
      <div className = "App" >
      <h1>React App</h1>
      <p className={classes}>It's working!!!</p>
      <button
      style={style} 
      onClick={this.toggleNameHandler
      }>Switch Name </button>
    
{persons}
      </div>

    );
  }
};
export default App;