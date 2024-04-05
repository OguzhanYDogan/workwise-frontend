import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './Profile/Profile'
import ProfileUpdate from './Profile/ProfileUpdate'
import ProfileDetail from './Profile/ProfileDetail'
import CompanyList from './Company/CompanyList'
import CompanyDetail from './Company/CompanyDetail'
import CompanyAdd from './Company/CompanyAdd'
import CompanyManagerAdd from './CompanyManager/CompanyManagerAdd'
import CompanyManagerList from './CompanyManager/CompanyManagerList'
import PersonelAdd from './Personel/PersonelAdd'
import Sidebar from './Sidebar/Sidebar'
import SidebarToggler from './Sidebar/SidebarToggler'
import NotFound from './Error/NotFound'

function Template({ theme, setTheme }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <Sidebar isActive={isActive} setIsActive={setIsActive} theme={theme} setTheme={setTheme} />
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
                        <Route path="/company-manager-add" element={<CompanyManagerAdd />} />
                        <Route path="/company-manager-list" element={<CompanyManagerList />} />
                        <Route path="/personel-add" element={<PersonelAdd />} />
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
        </>
    )
}

export default Template