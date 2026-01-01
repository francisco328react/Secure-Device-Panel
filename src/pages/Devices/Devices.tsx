import { useDevices } from "../../hooks/useDevices"
import { DeviceForm } from "../../components/DeviceForm/DeviceForm"
import { canAccess } from "../../utils/permissions/permissions"
import { useAuth } from "../../contexts/AuthContext"

export function Devices() {
    const { devices, performAction } = useDevices()
    const { user } = useAuth()

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Dispositivos</h2>
            <DeviceForm />
            <table className="w-full bg-white rounded shadow">
                <thead>
                    <tr className="border-b">
                        <th className="p-2 text-left">ID</th>
                        <th className="p-2 text-left">Nome</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map((d) => (
                        <tr key={d.id} className="border-b">
                            <td className="p-2">{d.id}</td>
                            <td className="p-2">{d.title}</td>
                            <td className="p-2 text-center">
                                {d.completed ? 'Ativo' : 'Inativo'}
                            </td>
                            <td className="p-2 text-center space-x-2">
                                {user && canAccess(user.role, 'manage_devices') && (
                                    <button
                                        onClick={() => performAction(d.id, 'block')}
                                        className="px-2 py-1 bg-red-500 text-white rounded cursor-pointer"
                                    >
                                        Bloquear
                                    </button>
                                )}

                                {user && canAccess(user.role, 'manage_devices') && (
                                    <button
                                        onClick={() => performAction(d.id, 'unblock')}
                                        className="px-2 py-1 bg-green-500 text-white rounded cursor-pointer"
                                    >
                                        Desbloquear
                                    </button>
                                )}

                                {user && canAccess(user.role, 'manage_devices') && (
                                    <button
                                        onClick={() => performAction(d.id, 'reset')}
                                        className="px-2 py-1 bg-yellow-500 text-white rounded cursor-pointer"
                                    >
                                        Reset
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}