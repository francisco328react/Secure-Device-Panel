import { Link } from "react-router-dom"

export function Sidebar() {
    return (
        <aside className="w-60 h-screen bg-slate-900 text-white flex flex-col p-4">
            <h1 className="text-xl font-bold mb-6">Secure Panel</h1>
            <nav className="flex flex-col gap-3">
                <Link to="/" className="hover:text-blue-400 cursor-pointer">Dashboard</Link>
                <Link to="/devices" className="hover:text-blue-400 cursor-pointer">Dispositivos</Link>
                <Link to="/logs" className="hover:text-blue-400 cursor-pointer">Logs</Link>
            </nav>
        </aside>
    )
}