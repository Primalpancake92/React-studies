
import { useState, type SyntheticEvent } from "react"
import './App.css'

function App() {
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)
  
  function handlePriceChange (e: any) { 
    setPrice(e.target.value)
  }

  function handleQuantityChange (e: any) {
    setQuantity(e.target.value)
  }

  function calculateTotal (price: number, quantity: number) {
    setTotal(price * quantity)
    console.log(total)
    return total
  }

  return (
    <>
      <form className="some-form">
        <ul>
          <li>
            <label>Price:</label>
            <br></br>
            <input type="text" onChange={handlePriceChange}  value={price}/>
          </li>
          <li>
            <label>Quantity:</label>
            <br></br>
            <input type="text" onChange={handleQuantityChange} value={quantity}/>
          </li>
        </ul>
        <div> 
          <button type="submit" onClick={calculateTotal}>Calculate</button>
        </div>
      </form>
    </>
  )
}

export default App
