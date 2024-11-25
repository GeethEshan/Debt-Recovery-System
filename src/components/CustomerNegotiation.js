import React from "react";
import "./customerNegotiation.css";

const CustomerNegotiation = () => {
  return (
    <div className="container">
      <div className="headercpe">
        <div className="cpe-center">CPE Collect</div>
        <div className="icons"></div>
      </div>
      <div className="main-content">
        <main className="main">
          <div className="outer-container">
            <div className="customer-detail">
              <h2 className="customer-detail-title">Customer Detail</h2>
              <div className="details">
 
 
  <div className="detail-item">
    <p>Case ID</p>
  </div>
  <hr />
  <div className="detail-item">
    <p>Name</p>
  </div>
  <hr />
  <div className="detail-item">
    <p>Arrears Amount</p>
  </div>
  <hr />
  <div className="detail-item">
    <p>Contact Number</p>
  </div>
  <hr />
</div>

            </div>
          </div>

          <div className="table-container">
            <div className="table-background">
              <table className="table">
                <thead>
                  <tr>
                    <th>Telephone No</th>
                    <th>Service Type</th>
                    <th>Model</th>
                    <th>Serial No</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array(1)
                    .fill(0)
                    .map((_, index) => (
                      <tr key={index}>
                        <td>0112234566</td>
                        <td>Peo</td>
                        <td>
                          <input
                            type="text"
                            placeholder="Enter"
                            className="input"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Enter"
                            className="input"
                          />
                        </td>
                        <td>
                          <button className="submit-btn2">Submit</button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomerNegotiation;
