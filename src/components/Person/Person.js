import React from 'react';

function Person({name, age, children}) {
  return (
    <div className="person">
      <h1>{name}</h1>
      <p>your age: {age} {children}</p>
    </div>
  );
}

export default Person;