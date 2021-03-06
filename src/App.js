import { useEffect } from "react";

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App(props) {
  const [{user},dispatch]=useStateValue();
  useEffect(()=>{
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser=>{
      console.log('The user >>>', authUser);

      if(authUser){
        // the user just loggedin / the user was logged in

        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        // the user is logged out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })

  },[])



  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/login"
            element={<Login />}
            render={() =>
              window.location.pathname === "/login" ? null : <Header />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
