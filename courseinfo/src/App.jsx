// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header course_name={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div >
//   )
// }

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course =>
        < Course key={course.id} course={course} />
      )}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course_name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div >
  )
}


const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course_name}</h1>
    </div>
  )
}

const Content = ({ parts }) => {
  console.log(parts)
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Part = ({ part }) => {
  console.log(part)
  return (
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  )
}

const Total = ({ parts }) => {
  console.log(parts)
  return (
    <div>
      <p>
        Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}
      </p>
    </div>
  )
}

export default App