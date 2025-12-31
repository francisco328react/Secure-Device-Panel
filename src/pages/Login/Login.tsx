import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export function Login() {
    const { signIn } = useAuth()
    const navigate = useNavigate()

    function handleLogin() {
        signIn({ name: 'Admin', role: 'admin' })
        navigate("/")
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <button
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer"
                onClick={handleLogin}
            >
                Entrar
            </button>
        </div>
    )
}