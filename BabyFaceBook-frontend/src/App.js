import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import BabyShow from './components/BabyShow'
import BabyIndex from './components/BabyIndex';
import { useHistory } from 'react-router-dom'

function App() {

  let [babies, setBabies] = useState([])
  let [baby, setBaby] = useState({})
  let history = useHistory()

  useEffect ( () => {
    fetch(`http://localhost:3000/babies`)
      .then(resp => resp.json())
      .then( babies => {
        setBabies({
          ...babies
        })
      })
  }, [])

  const handleClick = (id) => {

    fetch(`http://localhost:3000/babies/${id}`)
      .then(resp => resp.json())
      .then( baby => {
        console.log(baby)
        setBaby({
          ...baby
        })
        history.push(`/babies/${baby.id}`)
      })

  }

  return (
    <BrowserRouter >
      <Route exact path="/babies" component={() => <BabyIndex babies={babies} handleClick={handleClick} /> } />
      <Route exact path="/babies/show/:id" component={() => <BabyShow baby={baby} /> } />
    </BrowserRouter>
  );
}

export default App;

