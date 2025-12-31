import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../components/Layout/Layout"
import { Dashboard } from "../pages/Dashboard/Dashboard"
import { Devices } from "../pages/Devices/Devices"
import { Logs } from "../pages/Logs/Logs"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/devices" element={<Devices />} />
                    <Route path="/logs" element={<Logs />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}