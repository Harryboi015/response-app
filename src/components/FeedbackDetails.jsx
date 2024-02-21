import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "./shared/card";
import FeedbackContext from "../context/Feedbackcontext";



function FeedbackDetails() {
         const { feedback } = useContext(FeedbackContext);
         const params = useParams();
         const navigate = useNavigate();
         const currentvalue = feedback.find((feedback) => feedback.id ===
          params._id );
         
          const navHandler = () => {
                  console.log("successful navigation or redirect");
                  navigate("/");
          };
  return (
    <Card>
      <div className="num-display">{currentvalue.rating}</div>
      <div className="text-display">
         {currentvalue.text}
      </div>
      <button type={"button"} onClick={navHandler}>Back to home</button>
    </Card>
  )
};

export default FeedbackDetails

// import React, { useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Card from "./shared/card";
// import FeedbackContext from "../context/Feedbackcontext";



// function FeedbackDetails() {
//          const { feedback } = useContext(FeedbackContext)
//          const params = useParams();
//          const navigate = useNavigate();
//          const currentvalue = feedback.find((feedback) => feedback.id ===
//           params.id || +params.id );
         
//           const navHandler = () => {
//                   console.log("successful navigation or redirect");
//                   navigate("/");
//           };
//   return (
//     <Card>
//       <div className="num-display">{currentvalue.rating}</div>
//       <div className="text-display">
//          {currentvalue.text}
//       </div>
//       <button type={"button"} onClick={navHandler}>Back to home</button>
//     </Card>
//   )
// };

// export default FeedbackDetails

