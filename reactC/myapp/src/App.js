import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import EmployeeCard from './components/employee/employeeCard';
import EmployeeContainer from './components/employee/employeeContainer';
import CreateEmployee from './components/employee/createEmployee';
import EmployeeDetails from './components/employee/employeeDetails';

function App() {
  return (
    <Router>
      <Route path="/" exact component={EmployeeContainer} />
      <Route path="/container/" component={EmployeeCard} />
      <Route path="/create-employee" component= {CreateEmployee} />
      <Route path="/employee-details" component= {EmployeeDetails} />
    </Router>
  );
}

export default App; 
