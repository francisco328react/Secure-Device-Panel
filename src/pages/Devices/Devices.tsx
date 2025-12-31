import { useDevices } from "../../hooks/useDevices"

export function Devices() {
    const { devices } = useDevices()

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Dispositivos</h2>
            <table className="w-full bg-white rounded shadow">
                <thead>
                    <tr className="border-b">
                        <th className="p-2 text-left">ID</th>
                        <th className="p-2 text-left">Nome</th>
                        <th className="p-2">Status</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}