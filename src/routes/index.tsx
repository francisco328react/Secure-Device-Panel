import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../components/Layout/Layout"
import { Dashboard } from "../pages/Dashboard/Dashboard"
import { Devices } from "../pages/Devices/Devices"
import { Logs } from "../pages/Logs/Logs"
import { Login } from "../pages/Login/Login"
import { PrivateRoute } from "./PrivateRoute"
import { AuthProvider } from "../contexts/AuthContext"
import { LogProvider } from "../contexts/LogContext"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <LogProvider>
                    <Routes>
                        <Route path="/login" element={<Login />} />

                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <Layout>
                                        <Dashboard />
                                    </Layout>
                                </PrivateRoute>
                            }
                        />

                        <Route
                            path="/devices"
                            element={
                                <PrivateRoute>
                                    <Layout>
                                        <Devices />
                                    </Layout>
                                </PrivateRoute>
                            }
                        />

                        <Route
                            path="/logs"
                            element={
                                <PrivateRoute>
                                    <Layout>
                                        <Logs />
                                    </Layout>
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </LogProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}