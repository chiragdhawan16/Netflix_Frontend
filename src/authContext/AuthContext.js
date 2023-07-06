import AuthReducer from "./AuthReducer";
import { createContext, useEffect, useReducer } from "react";

const data=JSON.parse(localStorage.getItem("user"))
const INITIAL_STATE = {
  user: data ? data.user:null,
  accesstoken:"",
  isFetching: false,
  error: false,
};




export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    
    //  localStorage.setItem("user", JSON.stringify(state));
  }, [state]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        accesstoken:state.accesstoken,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
