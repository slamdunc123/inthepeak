import React, { useState, useEffect } from 'react';

const Clock = props => {
  const [date, setDate] = useState(new Date()); // set initial state, equates to - date: new Date()

  useEffect(() => {
    let newDate = setInterval(() => tick(), 1000); // runs the tick function every second which assigns new Date() to variable newDate

    const cleanup = () => {
      clearInterval(newDate); // clears the value in newDate to prevents memory leaks
    };
    return cleanup; // prevents warning stating cleanup assiged value but never used
  });

  const tick = () => {
    // sets a new value of new Date() to date in state
    setDate(new Date());
  };

  return (
    <div>
      <div>{date.toLocaleDateString()}</div>{' '}
      {/* takes date value and extracts date as a string */}
      <div>{date.toLocaleTimeString()}</div>{' '}
      {/* takes date value and extracts time as a string */}
    </div>
  );
};

export default Clock;
