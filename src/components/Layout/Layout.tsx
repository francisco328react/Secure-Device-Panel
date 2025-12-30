import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

export function Layout({ children }: {children: React.ReactNode}) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 main-h-screen bg-gray-100">
                <Header />
                <main className="p-6">{children}</main>
            </div>
        </div>
    )
}