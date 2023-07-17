import { BrowserRouter, Route, Routes } from "react-router-dom";
import BreakFast from "./Componenets/BreakFast";
import HomePage from "./Componenets/HomePage";
import Navbar from "./Componenets/Navbar";
import Register from "./Componenets/Register";
import Lunch from "./Componenets/Lunch";
import Dinner from "./Componenets/Dinner";
import Roti from "./Componenets/Roti";
import Drinks from "./Componenets/Drinks";
import { useState } from "react";
import BillingPage2 from "./Componenets/BillingPage2";
import PaymentSuccess from "./Componenets/PaymentSuccess";


function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [customerInfo, setCustomerInfo] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route
            path="/breakfast"
            element={<BreakFast setSelectedItems={setSelectedItems} />}
          />
          <Route
            path="/register"
            element={<Register setCustomerInfo={setCustomerInfo} />}
          />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/roti" element={<Roti />} />
          <Route path="/bevarages" element={<Drinks />} />
          <Route
            path="/billingpage2"
            element={<BillingPage2 selectedItems={selectedItems} />}
          />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
