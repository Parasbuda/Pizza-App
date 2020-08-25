import React from "react"
import "./Customize.css"
import Base from "../assets/PizzaBase.png"
import Olive from "../assets/Olive.png"
import Pineapple from "../assets/Pineapple.png"
import Mushroom from "../assets/Mushroom.png"
import Basil from "../assets/Basil.png"
import Tomato from "../assets/Tomato.png"
import Cheese from "../assets/BaseCheese.png"
import { motion } from "framer-motion"
import { useHistory } from "react-router-dom"

const Customize = ({ ingredient, setIngredient }) => {
  let history = useHistory()
  const onChange = (e, name) => {
    let newIngredient = JSON.parse(JSON.stringify(ingredient))
    newIngredient[name] = e
    setIngredient(newIngredient)
    localStorage.setItem("ingredient", JSON.stringify(newIngredient))
  }
  return (
    <div className="customize">
      <div className="image_container">
        <div className="image">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredient["basil"] ? 100 : -100,
              opacity: ingredient["basil"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Basil} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredient["olive"] ? 100 : -100,
              opacity: ingredient["olive"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Olive} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredient["pineapple"] ? 100 : -100,
              opacity: ingredient["pineapple"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z3"
          >
            <img src={Pineapple} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredient["tomato"] ? 100 : -100,
              opacity: ingredient["tomato"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Tomato} alt="Tomato" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              // y: ingredients["cheese"] ? 100 : -100,
              // opacity: ingredients["cheese"] ? 1 : 0,
              scale: ingredient["cheese"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="cheese z1"
          >
            <img src={Cheese} alt="Cheese" height="100%" width="100%" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredient["mushroom"] ? 100 : -100,
              opacity: ingredient["mushroom"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Mushroom} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>

          <motion.div transition={{ duration: 1 }}>
            <img src={Base} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
        </div>
      </div>
      <div className="checkbox">
        <label className="container-checkbox">
          Basil
          <input
            type="checkbox"
            checked={ingredient["basil"]}
            onChange={(e) => onChange(e.target.checked, "basil")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Olive
          <input
            type="checkbox"
            checked={ingredient["olive"]}
            onChange={(e) => onChange(e.target.checked, "olive")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Tomato
          <input
            type="checkbox"
            checked={ingredient["tomato"]}
            onChange={(e) => onChange(e.target.checked, "tomato")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Cheese
          <input
            type="checkbox"
            checked={ingredient["cheese"]}
            onChange={(e) => onChange(e.target.checked, "cheese")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Pineapple
          <input
            type="checkbox"
            checked={ingredient["pineapple"]}
            onChange={(e) => onChange(e.target.checked, "pineapple")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Mushroom
          <input
            type="checkbox"
            checked={ingredient["mushroom"]}
            onChange={(e) => onChange(e.target.checked, "mushroom")}
          />
          <span className="checkmark"></span>
        </label>
        <button className="checkout" onClick={() => history.push("/checkout")}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  )
}

export default Customize
