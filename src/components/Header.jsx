import PropTypes from 'prop-types';
import { Link, NavLink } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import useLocalStorage from '../hooks/useLocalStorage';

function Header({text, bdColor, textColor}) {
  const styleHandler ={
    backgroundColor: bdColor,
    textColor: textColor,
  };
  const [state, dispatch] = useAuth()
  const {deleteItem} = useLocalStorage("x-auth-token")

  function logoutHandler () {
   deleteItem()
   dispatch({type: "setToken", payload: null })
  }

  const isAuthenticated = state.accessToken != null;
  return ( 
    <header style={styleHandler}>  
                  <div>{text}</div>
                       {/* {isAuthenticated && <>
                       <button onClick={logoutHandler}>logout</button>
                       </>} */}
                  <ul>
                       <li>
                          <NavLink to={"/"} className={"links"} >Home</NavLink>
                       </li>
                       <li>
                          <NavLink to={"/about"} className="links" >About</NavLink>
                       </li>
                       {isAuthenticated ?(
                        <>
                       <button onClick={logoutHandler}>logout</button>
                       </>
                       ):(
                        <>
                       <li>
                          <NavLink to={"/Login"} className="links" >Login</NavLink>
                       </li>
                       <li>
                          <NavLink to={"/Register"} className="links" >Register</NavLink>
                       </li>
                       </>
                       )
                       }
                      
                    </ul>
      </header>
  )
}

Header.defaultProps = {
         text: "Response App",
         bdColor: "rgba(0,0,0,0.4)",
         textColor: "pink"
}
Header.proptypes = {
         text: PropTypes.string,
         bdColor: PropTypes.string
}
export default Header;


