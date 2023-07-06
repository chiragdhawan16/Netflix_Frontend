import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const LoginApiCall = async (user, dispatch) => {
  
 // dispatch(loginStart());
  try {
     const res = await axios.post("http://localhost:8080/api/auth/login", user);
    
    console.log(res)
    // dispatch(loginSuccess(res.data));

    
  } catch (err) {
    dispatch(loginFailure());
  }
};
