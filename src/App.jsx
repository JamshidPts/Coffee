import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Order from "./components/order/Order"
import OrderConfirm from "./components/orderConfirmed/OrderConfirm"

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/confirm" element={<OrderConfirm />} />
      </Routes>
    </>
  )
}

export default App
