import { useState } from 'react'
import './App.css'

import thanks from './images/illustration-thank-you.svg'

const App = () => {

  const [selected, setSelected] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const ratingClickHandler = (event) => {
    event.preventDefault()
    setSelected(event.currentTarget.innerText)
  }

  const StarIcon = () => {
    return (
      <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
        <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/>
      </svg>
    )
  }

  const CircleHighlight = (props) => {
    return (
      <button className='btn__rating' onClick={props.onClick}>{props.rating}</button>
    )
  }

  const ratings = [1, 2, 3, 4, 5].map(rating => {
    return (
      <CircleHighlight onClick={ratingClickHandler} key={rating} rating={rating}/>
    )
  })

  const RatingComponent = () => {
    return (
      <div className="card">
        <div className="card__content">
          <div className="icon">
            <StarIcon />
          </div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
          <ul className="ratings">
            {ratings}
          </ul>
          <button 
            className="btn__submit" 
            onClick={() => setSubmitted(true)}
          >
            SUBMIT
          </button>
        </div>
      </div>
    )
  }

  const ThankYou = () => {
    return (
      <div className="card">
        <div className="card__submit">
          <img src={thanks} alt="thank-you-graphic"></img>
          <p className="submission__info">You selected {selected} out of 5</p>
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="body">
      {submitted ? <ThankYou /> : <RatingComponent />}
    </div>
  )
}

export default App