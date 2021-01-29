import './App.css';
import React, { useEffect, useState } from 'react'

// rafce react arrow component
// imn import module

// react er virtual dome ekhane compare kore je ja sile ekhon ki ki change hoise je tuku change hoise sei tuku main dome change kore dite bole
const style = { width: 250, padding: 20, border: '1px solid', borderRadius: '50px' }
const App = () => {
  // let names = ['Imran', 'Bappy', 'Rakib', 'Raka', 'Hemel', 'Fesa']
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setUser(users))

  }, [])


  return (
    <div>

      <ul>
        {
          user.map(user => <ol key={user.id} style={style}>{user.name}</ol>)
        }
      </ul>

      {/* <MovieCounter /> */}
      {/* {
        names.map(name => <Learn name={name}></Learn>)
      } */}
    </div>
  )
}


const MovieCounter = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    return () => {
      console.log('useEffect ' + count);
    }
  }, [count])

  return (
    <div style={style}>
      <button onClick={() => setCount(count + 1)}>Add Movie</button>
      <h3>Number of movies: {count}</h3>
    </div >
  )
}


const Learn = (props) => {
  let name = props.name || 'Fake Name'
  return (
    <div style={style}>
      <h1>{name}</h1>
    </div>
  )
}


export default App


