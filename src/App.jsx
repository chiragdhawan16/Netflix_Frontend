import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Error from "./pages/error/Error";
import {
  BrowserRouter as Router,

  Route,
  Navigate,
  Routes,
  
  
} from "react-router-dom";


import { useAuth } from './context/auth';



const App = () => {
  
  const[auth]=useAuth();
  
  
 
  return (
    <Router>
      <Routes>
     
        {/* <Route  path="/" element=
          {auth.token ? <Home /> : <Navigate to="/register" />}>
        </Route> */}
        

        {auth.token ?
        <>
        <Route exact path="/" element={ <Home /> }></Route>
        <Route  path="/home" element={ <Home /> }></Route>
        <Route path="/movies" element= {<Home type="movie" />} ></Route>
        <Route path="/series" element={ <Home type="series" /> }></Route>
        <Route  path="/watch" element={ <Watch /> }></Route>
        <Route path="/register" element={<Home /> }></Route>
        <Route path="/login" element={<Home /> }></Route>

        
        </>  
        
        :
        <>
        <Route  path="/" element={ <Register /> }></Route>
        <Route  path="/home" element={ <Register /> }></Route>
        <Route path="/movies" element= {<Register />} ></Route>
        <Route path="/series" element={ <Register /> }></Route>
        <Route  path="/watch" element={ <Register /> }></Route>
        <Route  path="/register" element={ <Register /> }></Route>
        <Route  path="/login" element={ <Login /> }></Route>
       
        </>
        }

        
         
          {/* <Route path="/movies" element={auth.token ? <Home type="movie" /> : <Navigate to="/login" />}
          ></Route>
          <Route path="/series" element={auth.token ? <Home type="series" /> : <Navigate to="/login" />}></Route>
          <Route exact path="/watch" element={auth.token ? <Watch /> : <Navigate to="/login" />}></Route> */}
          
       
        <Route path='*' element={<Error/>}/>
            


      </Routes>
    </Router>
  );
};

export default App;





