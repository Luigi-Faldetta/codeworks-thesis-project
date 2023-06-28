import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CreateEventForm from "./Components/UserDashboard/CreateEventForm";
import Users from "./reduxFiles/slices/users";
import UserDashboardPage from "./Components/UserDashboard/UserDashboardPage";
import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Nav from './Components/NavTest';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    <div className="App">
      {/* <UserDashboardPage></UserDashboardPage> */}
    </div>
    </>
  );
};

export default App;
