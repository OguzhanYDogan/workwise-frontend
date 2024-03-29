import React from "react";
import { Link, useLocation } from 'react-router-dom';

function SidebarMenuItem({ to, label, icon }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <li className={`sidebar-item ${isActive ? 'active' : ''}`}>
            <Link to={to} className="sidebar-link">
                <i className={`bi ${icon}`} style={{ fontSize: "1.3rem" }}></i>
                <span>{label}</span>
            </Link>
        </li>
    );
}

export default SidebarMenuItem;