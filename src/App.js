import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';




// const App = props =>{
// const [personsState,setPersonsState]  =   useState({
//     persons : [
//             {name:'Sandeepa'},
//             {name:'prince'},
//             {name:'Abhinav'}
//           ],
//   });
//  const [otherState,setOtherState]= useState('some other value');
//   console.log(personsState)
//   const switchNameHandler = () => {
//       setPersonsState({
//         persons : [
//           {name:'Sandeepa singh'},
//           {name:'prince gautam'},
//           {name:'Abhinav singh Rajput'}
//         ],
//         otherState:personsState.otherState
//       });
//     }




class App extends Component {
  state = {
    persons : [
      {name:'Sandeepa'},
      {name:'prince'},
      {name:'Abhinav'}
    ],
    showPersons:false,
  };
  switchNameHandler = (newName) => {
  this.setState({
    persons : [
      {name:'Sandeepa singh'},
      {name:newName},
      {name:'Abhinav singh Rajput'}
    ]
  })
  }
  nameChangeHandler = (newName) => {
    this.setState({
      persons : [
        {name:'Sandeepa singh', age:'20'},
        {name:newName},
        {name:'Abhinav singh Rajput'}
      ]
    })
    }
    toggleNameHandler=()=>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow })
    }
  render() { 
    const style={
      backgrounColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'auto',
      cursor:'pointer'
    }
    let persons = null;
    if(this.state.showPersons){
      persons=(
      <div>
        {this.state.persons.map(person =>{
          return <Person
          name={person.name}
          age={person.age}
          />
        })}
      {/* <Person name = {this.state.persons[0].name} />
      
      <Person name = {this.state.persons[1].name}
      click={this.switchNameHandler.bind(this,'gadha')}
      changed={this.nameChangeHandler}
      >My hobbies:fdnfd</Person>
      
      <Person name = {this.state.persons[2].name} /> */}
      </div>
      );
    }
    return ( 
      <div className = "App" >
      <h1>app here</h1>
      <button
      style={style} 
      // onClick = {this.switchNameHandler.bind(this,'prince!!!')
      onClick={this.toggleNameHandler
      }>Switch Name </button>
    
{persons}
      </div>
    );
  }
};
export default App;