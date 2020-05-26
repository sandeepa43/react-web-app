import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("[persons.js] shouldComponentUpdate");
//     if (
//       nextProps.persons !== this.props.persons ||
//       nextProps.changed !== this.props.changed ||
//       nextProps.clicked !== this.props.clicked
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[persons.js] getsnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[persons.js] componentDidUpdate");
    console.log(snapshot);
  }
  componentWillUnmount() {
    console.log("[persons.js] ComponentWillUnmount");
  }
  render() {
    console.log("[Persons.js] rendering........");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default Persons;
