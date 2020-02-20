import React, { useState } from 'react'
import '../styles/App.scss'
import PlantImage from './PlantImage'

function App() {

  const [state, setState] = useState({name: 'Petey'})

  const updateObj = (prop) => (val) => (obj) => {
    if (typeof val === 'number') {
      return { ...obj, [prop]: (obj[prop] || 0) + val }
    } else {
      return { ...obj, [prop]: val }
    }
  }

  // plant functions
  const feed = updateObj('soil')
  const hydrate = updateObj('water')
  const lighten = updateObj('light')

  const poorFood = feed(5)
  const goodFood = feed(20)
  const poison = feed(-10)

  const trickle = hydrate(5)
  const soak = hydrate(20)
  const flood = hydrate(55)

  const sunnyDay = lighten(25)
  const cloudyDay = lighten(10)
  const sunlessDay = lighten(-5)


  return (
    <div className="App">
        <h1>
          Soon to become a functional plant simulator.
        </h1>
        <PlantImage/>
    </div>
  );
}

export default App
