import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// const Hello = (props) => {
//   const { name, age } = props

//   console.log(props)

//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>Hello {props.name}!</p>
//       <p>Are you really {props.age} years old?!</p>
//       <p>That means that you were born in {bornYear()}, right!</p>
//     </div>
//   )
// }

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}!</p>
      <p>Are you really {age} years old?!</p>
      <p>That means that you were born in {bornYear()}, right!</p>
    </div>
  )
}


// const App = () => {
//   const now = new Date()
//   const [obj, setObj] = useState({name: 'Yousef', age: 22})

//   console.log('rendering...', obj)

//   const increment = () =>
//     setObj({ ...obj, age: obj.age + 1 })

//   const decrement = () =>
//     setObj({ ...obj, age: obj.age - 1 })

//   const reset = () =>
//     setObj({ ...obj, age: 22 })

//   return (
//     <div>
//       <Hello name='Yousef' age={2 + 20} />
//       <p>it is now {now.toString()}</p>

//       <br></br>

//       <Display counter={obj.age} />

//       <Button
//         onClick={increment}
//         text='+'
//       /> 
//       <Button
//         onClick={decrement}
//         text='-'
//       /> 
//       <Button
//         onClick={reset}
//         text='Reset'
//       /> 

//     </div>
//   )
// }

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

// const App = () => {


  
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)

//     setTotal(total + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)

//     setTotal(total + 1)
//   }

//   return (
//     <div>
//       {left}
//       <Button onClick={handleLeftClick} text='Left' />
//       <Button onClick={handleRightClick} text='Right' />


//       {right}

//       <History allClicks={allClicks} />

//     </div>
//   )
// }


// const App = () => {
//   const [value, setValue] = useState(10)
  

//   const setToValue = (newValue) => () => {
//     console.log('value now', newValue)  // print the new value to console
//     setValue(newValue)
//   }
  
//   return (
//     <div>
//       {value}

//       <button onClick={setToValue(1000)}>thousand</button>
//       <button onClick={setToValue(0)}>reset</button>
//       <button onClick={setToValue(value + 1)}>increment</button>
//     </div>
//   )
// }

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  const friends = [ 'Peter', 'Maya']

  return (
    <div>
      <p>{friends}</p>
    </div>
  )

  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>
        thousand
      </button>
      <button onClick={() => setToValue(0)}>
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
        increment
      </button>
    </div>
  )
}


const Display = (props) => {
  return (
    <div>
      <p>{props.counter}</p>
    </div>
  )
}

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default App
