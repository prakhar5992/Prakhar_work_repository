import React from 'react';
import ReactDOM from 'react-dom';
import CustomerTable from './CustmerDetailsTable.js'
import './CustomerDetails.css';
function Customers() {
  return (
   <div className="Customer_Details">
      <header className = "Customer_Details_Header">
        <h1>Customer Details</h1>
      </header>  
      <CustomerTable />
    </div>
    
    
  
  );
}

export default Customers;
