import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import PizzaMan from "../assets/PizzaMan.png"
import "./Checkout.css"

const Checkout = ({ ingredient }) => {
    let history=useHistory()
    const [success,setSuccess]=useState(false)
    return (
        <div className="checkout-container">
            <div className="checkout-block">
                <div >
                    <h1>My Ingredient</h1>
                    {Object.keys(ingredient).reduce((acc, ing) => {
                        return acc + ingredient[ing] ? 1 : 0
                    }, 0) === 0 && <p>No ingredient selected</p>}
                   
                    {Object.keys(ingredient).map((ing,i) => {
                        return (
                            ingredient[ing]&&
                            <p key={i}>{ing[0].toUpperCase()}{ing.substr(1)}</p>
                        )
                    })}
                    <button className="button" onClick={()=>setSuccess(true)}>
                        Confirm
                    </button>
                    <button className="button" onClick={()=>history.push("/")}>
                       Go Back
                    </button>
              </div>
            </div>
            <div className="success-conatiner">
                {
                    success && (
                        <div className="success-block">
                            <img src={PizzaMan} alt="pizzaman" height="300px" />
                            <div className="success-title">
                                We have recieved your order, Thank you
                                </div>
                            <div className="order">
                                Order #{Math.round(Math.random()*100000)}
                            </div>
                            <div className="subtitle">
                                will be ready in 20-30 mins.
                            </div>
                        </div>
                    )
               }
            </div>
        </div>
    )
}

export default Checkout
