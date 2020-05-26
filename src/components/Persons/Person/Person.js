import React,{Component} from 'react';
import classes from './Person.css';
import Auxilliary from '../../../hoc/Auxilliary';


class Person extends Component {
render(){
    console.log('[Person.js] rendering')
    return(
        <Auxilliary>
    {/* // <div className={classes.Person}> */}
        <p onClick={this.props.click}>I am {this.props.name} and my age is 
    {this.props.age}</p>
    <p>{this.props.children}</p>
    <input type="text" onChange={this.props.changed} value={this.props.name} />
    {/* // </div> */}
    </Auxilliary>
    );
}
 
};
export default Person;
