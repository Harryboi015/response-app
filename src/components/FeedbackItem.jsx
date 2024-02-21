import React, { useContext } from 'react'
import Card from './shared/card';
import { FaEdit, FaTimes} from "react-icons/fa";
import FeedbackContext from "../context/Feedbackcontext"
import { Link } from "react-router-dom"
import { useAuth } from '../context/AuthContext';

function FeedbackItem({feedbackitem}) {
  const{ deleteFeedback, editHandler } = useContext (FeedbackContext)
  const [state, dispatch] = useAuth();
  const isAuthenticated = state.accessToken != null;
  return (
    <Card >
      <div className="num-display">{feedbackitem.rating}</div> 
      {isAuthenticated && (
        <>
      <button type='button' className='delete' onClick={() => deleteFeedback (feedbackitem._id)}>
        <FaTimes />
      </button> 
      <button type='button' className='edit' onClick={() => editHandler (feedbackitem)}>
        <FaEdit />
      </button>
        </>
      )}
     
      <div className="text-display">
        {feedbackitem.text}
      </div>

      <Link to={`/api/feedback/${feedbackitem._id}`}>view more</Link>
    </Card>
  ) 
}

export default FeedbackItem
