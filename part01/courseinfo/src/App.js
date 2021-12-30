import React from 'react'

// Returns the sum of the array
function arraySum(array) {
    let count = 0;
    for(let i=0, n=array.length; i < n; i++)
    {
        count += array[i];
    }
    return count
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercise}
        </p>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercises}/>
            <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises}/>
            <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercises}/>
        </div>
    )
}

const Total = (props) => {
    const courseParts = props.course.parts
    const coursePartsExercises = courseParts.map(part => part.exercises)
    return (
        <p>Number of exercises {arraySum(coursePartsExercises)}</p>
    )
}


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
        </div>
    )
}

export default App
