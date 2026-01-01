import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Device } from "../types/Devices/Devices";
import type { DeviceAction } from "../types/DeviceAction/DeviceAction";

export function useDevices() {
    const [devices, setDevices] = useState<Device[]>([])

    useEffect(() => {
        api.get<Device[]>('/todos?_limit=10').then((response) => {
            setDevices(response.data)
        })
    }, [])

    function performAction(id: number, action: DeviceAction) {
        setDevices((prev) =>
            prev.map((d) =>
                d.id === id
                ? {
                    ...d,
                    completed: action === 'block' ? false : true,
                    }
                : d,
            ),
        );
    }

    return { devices, performAction }
}