import React from "react";
const IndividualData = ({ data }) => {
  return (
    
    <tr>
        <table>
            <tr>
                <th colSpan={'2'}>{data.stockName}</th>
            </tr>
            <tr>
                <td>Total Units: {data.quantity}</td>
                <td>Total Investment: {data.quantity*100}</td>
            </tr>
            <tr>
                <td>Sold Amount: {data.amount}</td>
                <td>Current Amount: {data.quantity*data.amount}</td>
            </tr>
            <tr>
                <td>Overall Profit: {data.quantity*data.amount-data.quantity*100}</td>
                <td> </td>
            </tr>
        </table>
    </tr> 
    
  );
};

export default IndividualData;