import { createContext, useContext, useState } from 'react';
import type { Log } from '../types/Log/Log';

type LogContextType = {
  logs: Log[];
  addLog: (log: Log) => void;
};

const LogContext = createContext({} as LogContextType);

export function LogProvider({ children }: { children: React.ReactNode }) {
  const [logs, setLogs] = useState<Log[]>([]);

  function addLog(log: Log) {
    setLogs((prev) => [...prev, log]);
  }

  return (
    <LogContext.Provider value={{ logs, addLog }}>
      {children}
    </LogContext.Provider>
  );
}

export const useLogs = () => useContext(LogContext);
