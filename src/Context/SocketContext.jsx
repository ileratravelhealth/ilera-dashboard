import React from 'react'
import { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import { useGetProfileQuery } from '../Redux/Apis/authApi';

const SocketContextData = createContext();

export const useSocketContext = () => {
    return useContext(SocketContextData);
};

const SocketContext = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { data, isLoading, isError, error, isFetching } = useGetProfileQuery()
    console.log(onlineUsers)
    useEffect(() => {
        if (data?.data) {
            const socket = io(`http://103.161.9.133:5000?userId=${data?.data?._id}`);
            setSocket(socket);
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });
            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [data]);
    return <SocketContextData.Provider value={{ socket, onlineUsers }}>{children}</SocketContextData.Provider>;
}

export default SocketContext
