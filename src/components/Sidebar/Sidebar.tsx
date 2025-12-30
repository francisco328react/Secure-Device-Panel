export function Sidebar() {
    return (
        <aside className="w-60 h-screen bg-slate-900 text-white flex flex-col p-4">
            <h1 className="text-xl font-bold mb-6">Secure Panel</h1>
            <nav className="flex flex-col gap-3">
                <a className="hover:text-blue-400 cursor-pointer">Dashboard</a>
                <a className="hover:text-blue-400 cursor-pointer">Dispositivos</a>
                <a className="hover:text-blue-400 cursor-pointer">Logs</a>
            </nav>
        </aside>
    )
}