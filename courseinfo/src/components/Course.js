import React from 'react';

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Total = ({ part }) => {
    //console.log(part);
    const sum = part.map(x=>x.exercises).reduce((x, value) => {
        return x + value
    })
    return(
      <p><b>total of {sum} exercises</b></p>
    ) 
  }
  
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  const Content = ({ part }) => {
    return (
      <div>
        {part.map(x => <Part key={x.id} part={x} />)}
      </div>
    )
  }

  const Course = ({course}) => {
    const part = [...course.parts]
    //console.log(part)
    return (
        <div>
          <Header course={course} />
          <Content part={part} />
          <Total part={part} />
        </div>
      )
  }

  export default Course;