import React, { useState } from 'react';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'


//<div>debug: {newName}</div> - temporarily added to rendered component to help debup passing state and other variables

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '123-456-7890'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('') //for controlling the form input method
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const addName = (e) => {
    e.preventDefault();
    const personsObj = {
      name: newName,
      number: newNumber,
    };
    //eslint-disable-next-line
    if (persons.every((x) => x.name != personsObj.name)) {
      setPersons(persons.concat(personsObj));
    } else {
      window.alert(`${newName} is already added to phonebook`);
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (e) => {
    //console.log(e.target.value)
    setNewName(e.target.value)
  };
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  };

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <PersonForm addName={addName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App