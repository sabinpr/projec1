import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="stockName"
          required="required"
          placeholder="Enter Stock Name..."
          value={editFormData.stockName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="transactionType"
          required="required"
          placeholder="Enter Transaction Type..."
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="amount"
          name="quantity"
          required="required"
          placeholder="Enter Quantity..."
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="amount"
          name="amount"
          required="required"
          placeholder="Enter Amount..."
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          name="transactionDate"
          required="required"
          placeholder="Enter Transaction Date..."
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
