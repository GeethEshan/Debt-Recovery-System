import React, { useState } from "react";
import './CaseDetailsFilter.css';

const CaseDetailFilter = () => {
  // State to store selected values
  const [filters, setFilters] = useState({
    RTOM: "",
    agent: "",
    arrearsAmount: "",
    status: "",
    serviceType: "",
    DTM: "",
    from: "",
    to: "",
  });

  // Dropdown options
  const RTOMOptions = ["AD", "GM", "KU"];
  const agentOptions = ["CMS", "Prompt", "ACCIVA"];
  const arrearsOptions = ["Below 50,000", "50,000-100,000", "Above 100,000"];
  const statusOptions = ["FTL", "Write Off", "Being Settled"];
  const serviceTypeOptions = ["PEO TV", "LTE", "Fiber"];
  const DTMOptions = ["Option 1", "Option 2", "Option 3"];

  // Handle change for all filters
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Submit action
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Applied Filters:", filters);
  };

  return (
    <div className="case-details-filter">
      <h3>Case Details (Filter)</h3>
      <form onSubmit={handleSubmit} className="filter-form">
        <div className="left-side">
          {/* Dropdowns on the left */}
          <div className="horizontal-line">
            <select name="RTOM" value={filters.RTOM} onChange={handleFilterChange} className="input-field">
              <option value="">RTOM</option>
              {RTOMOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select name="agent" value={filters.agent} onChange={handleFilterChange} className="input-field">
              <option value="">Agent</option>
              {agentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="horizontal-line">
            <select name="serviceType" value={filters.serviceType} onChange={handleFilterChange} className="input-field">
              <option value="">Service Type</option>
              {serviceTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select name="DTM" value={filters.DTM} onChange={handleFilterChange} className="input-field">
              <option value="">DTM</option>
              {DTMOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="horizontal-line">
            <select name="arrearsAmount" value={filters.arrearsAmount} onChange={handleFilterChange} className="input-field">
              <option value="">Arrears Amount</option>
              {arrearsOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select name="status" value={filters.status} onChange={handleFilterChange} className="input-field">
              <option value="">Status</option>
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date Inputs and Submit Button on the right */}
        <div className="right-side">
          <div className="date-input">
            <label htmlFor="from">From</label>
            <input
              type="date"
              name="from"
              value={filters.from}
              onChange={handleFilterChange}
              className="input-field"
            />
          </div>

          <div className="date-input">
            <label htmlFor="to">To</label>
            <input
              type="date"
              name="to"
              value={filters.to}
              onChange={handleFilterChange}
              className="input-field"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CaseDetailFilter;
