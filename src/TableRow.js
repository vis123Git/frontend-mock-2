import React from "react";

const TableRow = ({ coin }) => {
  return (
    <tr>
      <td>
        <img src={coin.image} alt={coin.name} style={{ height: "20px" }} />
      </td>
      <td>{coin.name}</td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price}</td>
      <td>Mkt Cap : ${coin.total_volume.toLocaleString()}</td>
    </tr>
  );
};

export default TableRow;
