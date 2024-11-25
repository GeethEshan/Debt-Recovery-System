import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CaseDetailsFilter from './components/CaseDetailsFilter';
import Table from './components/Table';
import CustomerNegotiation from './components/CustomerNegotiation';
import Customer from './components/Customer'; // Import the Customer component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              {/* Define Routes for different components */}
              <Route path="/" element={
                <>
                  <CaseDetailsFilter />
                  <Table />
                </>
              } />
              <Route path="/customer-negotiation" element={<CustomerNegotiation />} />
              {/* Customer route now directly links to /customer */}
              <Route path="/customer" element={<Customer />} /> {/* Direct route to Customer */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
