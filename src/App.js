import React, { useState,useEffect } from "react"
import Header from "./component/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Customize from "./component/Customize"
import Checkout from "./component/Checkout"

function App() {
  const [ingredient, setIngredient] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  })
  useEffect(() => {
    const data = localStorage.getItem("ingredient")
    if (data) {
      setIngredient(JSON.parse(data))
    }
  },[])
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Customize ingredient={ingredient} setIngredient={setIngredient} />
          </Route>
          <Route exact path="/checkout">
            <Checkout ingredient={ingredient}/>
            </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
