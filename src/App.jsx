import { useState } from 'react'
import './App.css'
import phrases from './json/phrases.json'
import Card from './components/Card'
import colors from './utils/colors'

function App() {
  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  let phraseRandom = getRandomElement(phrases)
  let colorRandom = getRandomElement(colors)

  const [randomPhrase, setRandomPhrase] = useState(phraseRandom)
  const [randomColors, setRandomColors] = useState(colorRandom)

  const getRandomAll = () => {
    phraseRandom = getRandomElement(phrases)
    colorRandom = getRandomElement(colors)
    setRandomPhrase(phraseRandom)
    setRandomColors(colorRandom)
    console.log("si funciono")
  }

  const objectBgStyle = {
    backgroundColor: randomColors
  }

  return (
    <div className="App" style={objectBgStyle}>
      <Card getRandomAll={getRandomAll}
      randomPhrase={randomPhrase}
      randomColors={randomColors} />
    </div>
  )
}

export default App
