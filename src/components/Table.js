import React, { useState } from 'react';
import './Table.css';

const Table = () => {
  const data = [
    { id: 'RC001', account: '0115678', service: 'PEO TV', amount: '54,000', status: 'FTL', agent: 'CMS', rtom: 'AD', created: '11/12/2024', lastPaid: '11/12/2024' },
    { id: 'RC002', account: '8765946', service: 'LTE', amount: '-', status: 'Write Off', agent: 'Prompt', rtom: 'GM', created: '23/4/2023', lastPaid: '23/4/2023' },
    { id: 'RC003', account: '3754918', service: 'Fiber', amount: '43,750', status: 'Being Settled', agent: 'ACCIVA', rtom: 'KU', created: '2/5/2024', lastPaid: '2/5/2024' },
    // Add more data rows here for pagination demonstration
    { id: 'RC004', account: '2345678', service: 'PEO TV', amount: '55,000', status: 'FTL', agent: 'CMS', rtom: 'AD', created: '12/12/2024', lastPaid: '12/12/2024' },
    { id: 'RC005', account: '6543210', service: 'LTE', amount: '-', status: 'Write Off', agent: 'Prompt', rtom: 'GM', created: '25/4/2023', lastPaid: '25/4/2023' },
    { id: 'RC006', account: '2389675', service: 'Fiber', amount: '60,000', status: 'Being Settled', agent: 'ACCIVA', rtom: 'KU', created: '5/5/2024', lastPaid: '5/5/2024' },
  ];

  const rowsPerPage = 3; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last item on the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  // Slice the data to display only the rows for the current page
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Function to change the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div>
      <table className="case-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Account No.</th>
            <th>Service Type</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Agent</th>
            <th>RTOM</th>
            <th>Created Date</th>
            <th>Last Paid Date</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.account}</td>
              <td>{row.service}</td>
              <td>{row.amount}</td>
              <td>{row.status}</td>
              <td>{row.agent}</td>
              <td>{row.rtom}</td>
              <td>{row.created}</td>
              <td>{row.lastPaid}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        {currentPage > 1 && (
          <button
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </button>
        )}
        <span>Page {currentPage} of {totalPages}</span>
        {currentPage < totalPages && (
          <button
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Table;
