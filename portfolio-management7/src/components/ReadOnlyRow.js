import React from "react";

const ReadOnlyRow = ({ data, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{data.stockName}</td>
      <td>{data.transactionType}</td>
      <td>{data.quantity}</td>
      <td>{data.amount}</td>
      <td>{data.transactionDate}</td>
      <td>
        {/* <button
          type="button"
          onClick={(event) => handleEditClick(event, data)}
        >
          Edit
        </button> */}
        <button type="button" onClick={() => handleDeleteClick(data.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
