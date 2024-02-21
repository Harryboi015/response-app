import React, { useContext } from 'react'
import FeedbackContext from "../context/Feedbackcontext"

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
    let avgRate = feedback.reduce((accumulator,currentvalue) => {
         return accumulator + currentvalue.rating;
    }, 0) / feedback.length

  return (
    <div className="feedback-stats">
      <h4>feedback: {feedback.length}</h4>
      <h4>Average: {isNaN(avgRate) ? 0 : avgRate.toFixed(1)}</h4>
    </div>
  )
}

export default FeedbackStats
{FeedbackStats}
