import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51KxKi9Lqbkur86CxtvdJlIh58MzUjNqididRdnSYk9cDwnt1XXa3YQdvtLvCWzOS8pP9bJB89s4K1UmxFWgaKqqh00fZIr5Gzu');

function App() {
  const [{}, dispatch] = useStateValue();

  //useEffect keeps track of the user that is logged in.
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>>', authUser);

      if(authUser){
        //if user just logged in or the user was already logged in.

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
       
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/checkout" element = {<div> <Header /> <Checkout />  </div>}></Route>
          <Route path="/payment" element={<div> <Header /><Elements stripe={promise}> <Payment/></Elements></div>}> </Route>  
          <Route path="/" element={ <div> <Header /> <Home /> </div>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
