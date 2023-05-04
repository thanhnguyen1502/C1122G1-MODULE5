import './App.css';
import Header from "./Header";
import Home from "./Home";
import {Route, Routes} from "react-router-dom";
import FacilityList from "./component/facility/FacilityList";
import AddFacility from "./component/facility/addFacility";
import CustomerList from "./component/customer/CustomerList";
import CustomerCreate from "./component/customer/CustomerCreate";
import CustomerUpdate from "./component/customer/CustomerUpdate";
import ContractList from "./component/contract/ContractList";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />

        {/*facility*/}
        <Route path="/facility" element={<FacilityList />} />
        <Route path="/facility-create" element={<AddFacility />} />


        {/*customer*/}
        <Route path="/customer" element={<CustomerList />} />
        <Route path="/customer-create" element={<CustomerCreate />} />
        <Route path="/customer-update/:id" element={<CustomerUpdate/>} />

        {/*contract*/}
        <Route path="/contract" element={<ContractList />} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
