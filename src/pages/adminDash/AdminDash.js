// AdminDash.js
// Dashboard: An overview of key metrics like number of sessions, speakers, and registered users.
// Session Management: CRUD operations (Create, Read, Update, Delete) for sessions.
// Speaker Management: CRUD operations for speakers.
// User Management: Manage user roles and permissions.
// Reports: Generate reports on session attendance and feedback.
/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
    const [metrics, setMetrics] = useState({
        sessions: 0,
        speakers: 0,
        users: 0,
    });

    useEffect(() => {
        // Mock API call to fetch metrics data
        // Replace this with actual API call
        fetchMetrics();
    }, []);

    const fetchMetrics = async () => {
        // Mock data for now
        const data = {
            sessions: 45,
            speakers: 20,
            users: 150,
        };

        setMetrics(data);
    };

    return (
        <div className="admin-dashboard">
            <header className="admin-header">
                <h1>Admin Dashboard</h1>
            </header>
            <section className="admin-metrics">
                <h2>Key Metrics</h2>
                <div className="metrics-grid">
                    <div className="metric">
                        <h3>Sessions</h3>
                        <p>Number of sessions: {metrics.sessions}</p>
                    </div>
                    <div className="metric">
                        <h3>Speakers</h3>
                        <p>Number of speakers: {metrics.speakers}</p>
                    </div>
                    <div className="metric">
                        <h3>Registered Users</h3>
                        <p>Number of users: {metrics.users}</p>
                    </div>
                </div>
            </section>
            <section className="admin-management">
                <h2>Management</h2>
                <div className="management-grid">
                    <Link to="/admin/sessions" className="management-link">
                        <h3>Session Management</h3>
                        <p>Manage sessions (Create, Read, Update, Delete)</p>
                    </Link>
                    <Link to="/admin/speakers" className="management-link">
                        <h3>Speaker Management</h3>
                        <p>Manage speakers (Create, Read, Update, Delete)</p>
                    </Link>
                    <Link to="/admin/users" className="management-link">
                        <h3>User Management</h3>
                        <p>Manage user roles and permissions</p>
                    </Link>
                    <Link to="/admin/reports" className="management-link">
                        <h3>Reports</h3>
                        <p>Generate reports on session attendance and feedback</p>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default AdminDashboard;

// todo:

// GET /api/metrics - to get the metrics data
// GET /api/sessions - to get the list of sessions
// POST /api/sessions - to create a new session
// PUT /api/sessions/:id - to update an existing session
// DELETE /api/sessions/:id - to delete a session
// GET /api/speakers - to get the list of speakers
// POST /api/speakers - to create a new speaker
// PUT /api/speakers/:id - to update an existing speaker
// DELETE /api/speakers/:id - to delete a speaker
// GET /api/users - to get the list of users
// PUT /api/users/:id - to update a user's role or permissions
// GET /api/reports - to generate and fetch reports
