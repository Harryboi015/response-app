 import React, { useState, useContext, useEffect } from 'react'
 import Card from './shared/card'
 import Button from './shared/Button'
 import SelectRated from './SelectRated'
 import FeedbackContext from "../context/Feedbackcontext"
 import { useAuth } from '../context/AuthContext';
 import { Link } from 'react-router-dom'


function FeedbackForm() {
        const {addFeedback, updateFeedback, feedbackEdit} = useContext(FeedbackContext)
        const [text, setText] = useState('')
        const [btnDisabled, setBtnDisabled] = useState(true)
        const [message, setMessage] = useState('')
        const [rating, setRating] = useState(6)
        const [state, dispatch] = useAuth()

        const isAuthenticated = state .accessToken !== null;


        useEffect(() => {
          if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
          }
        }, [feedbackEdit]);

         const handleFeedback = (e) => {
                  if (text === '') {
                           setMessage(null)
                           setBtnDisabled(true)
                  }else if(text !== null && text.trim().length <= 15){
                          setMessage("You must have at least 15 characters")
                          setBtnDisabled(true)
                  }else{
                           setBtnDisabled(false)
                           setMessage("")
                  }
                  setText(e.target.value)
                  // console.log(e.target.value);
         }

         const handleSubmit = (e) => {
          if (text.trim().length > 15) {
            const newfeedback ={
              text: text,
              rating: rating
            }
            if (feedbackEdit.item === true) {
               updateFeedback(feedbackEdit.item.id, newfeedback)
            } else {
              addFeedback(newfeedback)
            }
            console.log(newfeedback);
            // addHandler(newfeedback)
            // console.log(newfeedback);
            // console.log(newfeedback);
           }
           setText("")
           e.preventDefault();
        }


        const addFeedbacks = (
          <>
           <h2>How would you like to rate our service?</h2>
         <form onSubmit={handleSubmit} >
          <SelectRated select= {(rating) => setRating(rating)} />
          <div className="input-group">
              <input type="text" value={text} placeholder='Write a review' onChange={handleFeedback} />
              <Button type={"submit"} isDisabled={btnDisabled} version={"secondary"}>send</Button>
          </div>
         </form>
         {message && <div className="message">{message}</div>}
          </>
        )
         
  return (
    <Card>                                                                                     
        {isAuthenticated ? addFeedbacks :(
          <>
          <div>
            <h3>please signin to leave a feedback</h3>
            <Button>
              <Link to="/login">Login</Link>
            </Button>
          </div>
          </>
        )}
    </Card>
  )
}

export default FeedbackForm
