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
     
        <Route exact path="/" element=
          {auth.token ? <Home /> : <Navigate to="/register" />}>
        </Route>
        <Route exact path="/home" element=
          {auth.token ? <Home /> : <Navigate to="/register" />}>
        </Route>


        <Route path="/register" element={!auth.token ? <Register /> : <Navigate to="/" />}>
        </Route>
        

         <Route path="/login" element={!auth.token ? <Login /> : <Navigate to="/" />}></Route>
       
       
         
          <Route path="/movies" element={auth.token ? <Home type="movie" /> : <Navigate to="/login" />}
          ></Route>
          <Route path="/series" element={auth.token ? <Home type="series" /> : <Navigate to="/login" />}></Route>
          <Route exact path="/watch" element={auth.token ? <Watch /> : <Navigate to="/login" />}></Route>
          
       
        <Route path='*' element={<Error/>}/>
            


      </Routes>
    </Router>
  );
};

export default App;





