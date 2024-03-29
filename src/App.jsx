import React from "react";
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import "./assets/compiled/css/app.css"
import "./assets/compiled/css/app-dark.css"
import "./assets/extensions/perfect-scrollbar/perfect-scrollbar.min.js"
import Sidebar from './components/Sidebar/Sidebar'
import ProfileUpdate from './components/Profile/ProfileUpdate.jsx'
import ProfileDetail from './components/Profile/ProfileDetail.jsx'
import Profile from './components/Profile/Profile.jsx'
import SidebarToggler from './components/Sidebar/SidebarToggler.jsx'
import CompanyList from './components/Company/CompanyList.jsx'
import CompanyAdd from './components/Company/CompanyAdd.jsx'
import NotFound from "./components/Error/NotFound.jsx";
import CompanyDetail from "./components/Company/CompanyDetail.jsx";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <BrowserRouter>
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
      <div id="main">
        <SidebarToggler isActive={isActive} setIsActive={setIsActive} />
        <div id="app">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/update" element={<ProfileUpdate />} />
            <Route path="/detail" element={<ProfileDetail />} />
            <Route path="/company-list" element={<CompanyList />} />
            <Route path="/company-detail/:id" element={<CompanyDetail />} />
            <Route path="/company-add" element={<CompanyAdd />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
