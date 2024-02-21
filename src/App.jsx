import {useState} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
// import SelectRated from "./components/SelectRated";
import { FeedbackProvider } from "./context/Feedbackcontext";
import AboutPage from "./pages/AboutPage";
import FeedbackDetails from "./components/FeedbackDetails";
import Register from "./pages/Register";
import Login from "./pages/Login"; 
import AuthProvider from "./context/AuthContext";
import useLocalStorage from "./hooks/useLocalStorage";




function App() {
     const {getItem} = useLocalStorage("X-auth-token");
     const token = getItem();
     const initialState =  { accessToken: token ?? null }
  return (
    <AuthProvider  defaultState={initialState}>
    <FeedbackProvider >
    <Router> 
      <Header />
      <div className="container">
        <Routes>
           <Route path="/" element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList /> 
              </>
           }/>

           <Route path="/about" element={<AboutPage/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/api/feedback/:id" element={<FeedbackDetails/>}/>
        </Routes>
      </div>  
    </Router>
    </FeedbackProvider>
    </AuthProvider>
  )
}

export default App;


// function App() {
//   const person = "vincent";
//   const people = {
//     name:"Tade",
//     age:54
//   }

//   const students = [
//     {id: 1, name: "Harrison"},
//     {id: 2, name: "Vincent"},
//     {id: 3, name: "Idris"},
//     {id: 4, name: "Iremide"},
//     {id: 5, name: "Dennis"},
//     {id: 6, name: "Lucy"}
//   ]

//   const showStudent = true;
//   return (
//     <>
//     <Header />
//       <h1>Hello {person}...</h1>
//       <div className="container">
//         <h4>Myname is {people.name} i am {people.age} years old</h4>
//         {showStudent &&
//         (<ul>
//           {students.map((stud, index) =>(
//           <li key={index}>{stud.name}</li>
//           ))}
//         </ul>
//         )}


//         {/* {showStudent ?
//         (<ul>
//           {students.map((stud, index) =>(
//           <li key={index}>{stud.name}</li>
//           ))}
//         </ul>)
//           : <p>No items yet</p>} */}

//       </div>
//     </>
//   )
// }

// export default App;
