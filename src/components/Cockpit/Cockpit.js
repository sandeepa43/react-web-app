import React, { useEffect } from "react";

import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[cockpit.js] useEffect");
    setTimeout(() => {
      alert("saved data to cloud!");
    }, 1000);
  }, []);

  useEffect(() => {
    console.log("[cockpit.js] 2nd useeffect");
    return () => {
      console.log("[cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>It's working!!!</p>
      <button className={btnClass} onClick={props.clicked}>
        Switch Name{" "}
      </button>
    </div>
  );
};

export default React.memo(cockpit);
