import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import IndividualData from "./components/IndividualData";
import DashBoard from "./components/DashBoard";

const App = () => {
  const [datas, setdatas] = useState(data);
  const [addFormData, setAddFormData] = useState({
    stockName: "",
    transactionType: "",
    quantity: "",
    amount: "",
    transactionDate: "",
  });

  const [editFormData, setEditFormData] = useState({
    stockName: "",
    transactionType: "",
    quantity: "",
    amount: "",
    transactionDate: "",
  });

  const [editDataId, setEditDataId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newData = {
      sn: nanoid(),
      stockName: addFormData.stockName,
      transactionType: addFormData.transactionType,
      quantity: addFormData.quantity,
      amount: addFormData.amount,
      transactionDate: addFormData.transactionDate,
    };

    const newDatas = [...datas, newData];
    setdatas(newDatas);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedData = {
      sn: editDataId,
      stockName: editFormData.stockName,
      transactionType: editFormData.transactionType,
      quantity: editFormData.quantity,
      amount: editFormData.amount,
      transactionDate: addFormData.transactionDate,
    };

    const newDatas = [...datas];

    const index = datas.findIndex((data) => data.id === editDataId);

    newDatas[index] = editedData;

    setdatas(newDatas);
    setEditDataId(null);
  };

  const handleEditClick = (event, data) => {
    event.preventDefault();
    setEditDataId(data.id);

    const formValues = {
      stockName: data.stockName,
      transactionType: data.transactionType,
      quantity: data.quantity,
      amount: data.amount,
      transactionDate: data.transactionDate,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditDataId(null);
  };

  const handleDeleteClick = (DataId) => {
    const newDatas = [...datas];

    const index = datas.findIndex((data) => data.id === DataId);

    newDatas.splice(index, 1);

    setdatas(newDatas);
  };

  return (
    <div className="app-container">
      <div className='header'>
        <h1>Portfolio Management</h1>
      </div>     
      <div className='index'>
        <a href='#history'>Transaction History</a>
        <a href='#bs'>Buy/Sell</a> 
        <a href='#db'> Dashboard</a>
        <a href='#ipl'> Individual Profit/Loss</a>
      </div>
      
      <h2 id='history'>Transaction History</h2>

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Stock Name</th>
              <th>Transaction Type</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Transaction Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <Fragment>
                {editDataId === data.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    data={data}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2 id='bs'>Add New Transaction</h2>
      <form onSubmit={handleAddFormSubmit}>
        <table>
          <tr>
          <td>Enter Stock Name:</td>
            <input
              type="text"
              id="dname"
              name="stockName"
              required="required"
              placeholder="Stock Name"
              onChange={handleAddFormChange}
            />
          </tr>
          <tr>
          <td>Enter Transaction Type:</td>
          <select
              type="text"
              name="transactionType"
              required="required"
              placeholder="Buy/Sell"
              defaultValue={"BUY"}
              onChange={handleAddFormChange}
            >
              <option value="BUY">BUY</option>
              <option value="SELL">SELL</option>
            </select>
          </tr>
          <tr>
          <td>Enter Quantity:</td>
            <input
              type="number"
              min="10" 
              max="90000"
              step="10"
              id="dqty"
              name="quantity"
              defaultValue={"10"}
              required="required"
              placeholder="Quantity"
              onChange={handleAddFormChange}
            />
          </tr>
          <tr>
            <td>Enter Amount:</td>
            <input
              type="number"
              name="amount"
              min="0"
              max="9000000"
              id="damt"
              defaultValue={"100"}
              step="10"
              required="required"
              placeholder="Amount"
              onChange={handleAddFormChange}
            />
          </tr>
            <td>Enter Transaction Date:</td>
            <input
              type="date"
              name="transactionDate"
              required="required"
              defaultValue={"10"}
              placeholder="Transaction Date"
              onChange={handleAddFormChange}
            />
          <tr>
            <button type="submit">Add</button>
          </tr>
        </table>
      </form>

      <h2 id='db'>DashBoard</h2>
      <table>
      {datas.map((data) => (
                <Fragment>
                  {(
                    <DashBoard
                      data={data}
                    />
                  )}
                </Fragment>
              ))}
      </table>
      
      <h2 id='ipl'>Individual Profit/Loss</h2>
        <table>
          {datas.map((data) => (
                <Fragment>
                  {(
                    <IndividualData
                      data={data}
                    />
                  )}
                </Fragment>
              ))}                   
        </table>




    </div>
  );
};

export default App;
