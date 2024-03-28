import './App.css'
import "./assets/compiled/css/app.css"
import "./assets/compiled/css/app-dark.css"
import "./assets/extensions/perfect-scrollbar/perfect-scrollbar.min.js"
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProfileUpdate from './components/ProfileUpdate/ProfileUpdate.jsx'
import ProfileDetail from './components/ProfileDetail/ProfileDetail.jsx'
import Profile from './components/Profile/Profile.jsx'
import SidebarToggler from './components/SidebarToggler/SidebarToggler.jsx'
import { useState } from 'react'
import CompanyList from './components/CompanyList/CompanyList.jsx'
import Error from './components/Error/Error.jsx'

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
      <div id="main">
        <SidebarToggler isActive={isActive} setIsActive={setIsActive} />
        <div id="app">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/update" element={<ProfileUpdate />} />
            <Route path="/detail" element={<ProfileDetail />} />
            <Route path="/company-list" element={<CompanyList />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
