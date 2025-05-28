import React from 'react'
// import './App.css'
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import Dashboard from './Component/Dashboard/Dashboard';
import Activity from './Component/Dashboard/Activity';
import Calandar from './Component/Dashboard/Calandar';

function App() {


  return (
    <>
      <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <Dashboard />
        <Activity />
        <Calandar />
        </div>
    </div>

    </>
  )
}

export default App
