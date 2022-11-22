import React from 'react'
import Pushbutton from './Pushbutton.jsx'

const Card = ({ randomPhrase, randomColors, getRandomAll }) => {

  const objectStyle = {
    color: randomColors
  }
  const objectBgStyle = {
    backgroundColor: randomColors
  }

  return (
    <article className='card' style={objectStyle}>
      <header className='card__phrase'>
        <i className="fa-solid fa-quote-left"></i>
        <p className='card__text'>{randomPhrase.quote}</p>
      </header>
      <div className='card__container'>
        <p className="card__author">{randomPhrase.author}</p>
      <Pushbutton getRandomAll={getRandomAll} objectBgStyle={objectBgStyle}/>
      </div>
    </article>
  )
}

export default Card