import React from 'react';

const Persons = ({ persons, filter }) => {
  const regexp = new RegExp(filter, "i");
  const newArr = persons.filter((x) => regexp.test(x.name));
  if (filter) {
    return (
      <>
        {newArr.map((x) => (
          <div key={x.name}>
            {x.name} {x.number}
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        {persons.map((x) => (
          <div key={x.name}>
            {x.name} {x.number}
          </div>
        ))}
      </>
    );
}}

export default Persons