import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Device } from "../types/Devices/Devices";

export function useDevices() {
    const [devices, setDevices] = useState<Device[]>([])

    useEffect(() => {
        api.get<Device[]>('/todos?_limit=10').then((response) => {
            setDevices(response.data)
        })
    }, [])

    return { devices }
}