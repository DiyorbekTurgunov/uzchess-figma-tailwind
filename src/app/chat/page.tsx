"use client";
import io from 'socket.io-client';
import {useEffect, useState} from "react";

const socket = io('http://10.10.0.130:8888', {extraHeaders: {auth: 'Bearer JWTJWTJWT'}});

interface Message {
    id: number;
    userId: number;
    message: string;
    replyTo: number;
}

export default function ChatPage() {
    const [message, setMessage] = useState('');
    const [responses, setResponses] = useState<Message[]>([]);

    useEffect(() => {
        socket.on('uzchess-server', (data: Message) => {
            setResponses([...responses, data]);
            return () => socket.off('uzchess-server');
        });
    });

    const sendMessage = () => {
        const payload = JSON.stringify({message: message, replyTo: null});
        socket.emit('uzchess-client', payload);
        setMessage('');
    }

    return (
        <div className={"flex flex-col w-250 items-center rounded-lg gap-2.5 mt-10"}>
            <div className="w-[200px] h-[150px] rounded-lg bg-[#1A1D1F]"></div>
            <input className={"border border-white mt-5"} type="text" value={message}
                   onChange={(e) => setMessage(e.target.value)}/>
            <button className={"p-0.5 bg-blue-500 rounded-lg active:bg-blue-400"} onClick={sendMessage}>Send Message
            </button>
            <div>
                {responses.map((response, index) => <p className={"font-medium text-[20px]"} key={index}>{response.message}</p>)}
            </div>
        </div>
    );
}
