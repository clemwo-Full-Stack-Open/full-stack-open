const Part = ({name, exercises}) => {
    return (
        <p>
            {name} {exercises}
        </p>
    )
}

const Header = ({courseName}) => {
    return (
        <div>
            <h1>{courseName}</h1>
        </div>)
}

const Content = ({courseParts}) => {
    return (
        <div>
            {courseParts.map(part =>
                <Part key={part.id} name={part.name} exercises={part.exercises}/>)
            }
        </div>
    )
}

const Total = ({courseParts}) => {
    const total = courseParts.reduce((sum, part) => sum + part.exercises, 0)

    return (<p>Number of exercises: {total}</p>)
}

const Course = ({course}) => {
    return (
        <div>
            <Header courseName={course.name}/>
            <Content courseParts={course.parts}/>
            <Total courseParts={course.parts}/>
        </div>
    )
}

const Courses = ({courses}) => {
    return (
        <div>
            {courses.map(course =>
                <Course key={course.id} course={course}/>
            )}
        </div>)
}

export default Courses