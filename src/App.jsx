import './App.css'
import "./assets/compiled/css/app.css"
import "./assets/compiled/css/app-dark.css"
import "./assets/extensions/perfect-scrollbar/perfect-scrollbar.min.js"
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProfileUpdate from './components/ProfileUpdate/ProfileUpdate.jsx'
import ProfileDetail from './components/ProfileDetail/ProfileDetail.jsx'
import Profile from './components/Profile/Profile.jsx'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/update" element={<ProfileUpdate />} />
          <Route path="/detail" element={<ProfileDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
