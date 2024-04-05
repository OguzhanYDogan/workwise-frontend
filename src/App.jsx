import React from "react";
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import "./assets/compiled/css/app.css"
import "./assets/compiled/css/auth.css"
import "./assets/compiled/css/app-dark.css"
import "./assets/extensions/perfect-scrollbar/perfect-scrollbar.min.js"
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar/Sidebar'
import ProfileUpdate from './components/Profile/ProfileUpdate.jsx'
import ProfileDetail from './components/Profile/ProfileDetail.jsx'
import Profile from './components/Profile/Profile.jsx'
import SidebarToggler from './components/Sidebar/SidebarToggler.jsx'
import CompanyList from './components/Company/CompanyList.jsx'
import CompanyAdd from './components/Company/CompanyAdd.jsx'
import NotFound from "./components/Error/NotFound.jsx";
import CompanyDetail from "./components/Company/CompanyDetail.jsx";
import CompanyManagerAdd from "./components/CompanyManager/CompanyManagerAdd.jsx";
import CompanyManagerList from "./components/CompanyManager/CompanyManagerList.jsx";
import { ToastContainer } from 'react-toastify';
import Login from "./components/Authentication/Login.jsx";
import ForgotPassword from "./components/Authentication/ForgotPassword.jsx";
import ResetPassword from "./components/Authentication/ResetPassword.jsx";
import PersonelAdd from "./components/Personel/PersonelAdd.jsx";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <BrowserRouter>
      <Sidebar isActive={isActive} setIsActive={setIsActive} theme={theme} setTheme={setTheme} />
      <div id="main">
        <SidebarToggler isActive={isActive} setIsActive={setIsActive} />
        <div id="app">
          <ToastContainer theme={theme} hideProgressBar={false} />
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/update" element={<ProfileUpdate />} />
            <Route path="/detail" element={<ProfileDetail />} />
            <Route path="/company-list" element={<CompanyList />} />
            <Route path="/company-detail/:id" element={<CompanyDetail />} />
            <Route path="/company-add" element={<CompanyAdd />} />
            <Route path="/company-manager-add" element={<CompanyManagerAdd />} />
            <Route path="/company-manager-list" element={<CompanyManagerList />} />
            <Route path="/personel-add" element={<PersonelAdd />} />
            <Route path="/login" element={<Login theme={theme} setTheme={setTheme} />} />
            <Route path="/forgot-password" element={<ForgotPassword theme={theme} setTheme={setTheme} />} />
            <Route path="/reset-password" element={<ResetPassword theme={theme} setTheme={setTheme} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <footer>
          <hr />
          <div class="footer clearfix mb-0 text-muted">
            <div class="float-start">
              <p>2024 © WorkWise</p>
            </div>
            <div class="float-end">
              <p>All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
