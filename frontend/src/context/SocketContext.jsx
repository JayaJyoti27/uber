import React, { createContext, useEffect } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();

const socket = io(`${import.meta.env.VITE_BASE_URL}`);

function SocketProvider({ children }) {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Connected to server:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("⚠️ Disconnected from server");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      <div>Socket Connected ✅</div> {/* UI Debugging Text */}
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
