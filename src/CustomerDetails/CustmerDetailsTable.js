import React from 'react';
import ReactDOM from 'react-dom'
function CustomersTable() {
  return (
    <div className="Customer_Details_Table">
      <div className = "Customer_Form">
        <label for="fname">First name:</label><br />
        <input type="text" id="fname" name="fname" value="John" /><br />
        <label for="lname">Last name:</label><br />
        <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
        <input type="submit" value="Submit" />
    </div>    
    </div>
  );
}

export default CustomersTable;
