import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/ChatWidget.css';

const ChatWidget = () => {
    const [open, setOpen] = useState(false);
    const [userMsg, setUserMsg] = useState('');
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!userMsg.trim()) return;

        const userMessage = { role: 'user', content: userMsg };
        const newChat = [...chat, userMessage];
        setChat(newChat);
        setUserMsg('');
        setLoading(true);

        try {
            const res = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        { role: 'system', content: 'You are a helpful software license assistant.' },
                        ...newChat,
                    ],
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer YOUR_OPENAI_API_KEY`, // Replace with your real key
                    },
                }
            );

            const reply = res.data.choices[0].message;
            setChat([...newChat, reply]);
        } catch (err) {
            const fallback = {
                role: 'assistant',
                content: "Sorry! I'm currently unable to respond. Please try again later.",
            };
            setChat([...newChat, fallback]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="chat-container">
            <div className={`chat-box ${open ? 'open' : ''}`}>
                <div className="chat-header" onClick={() => setOpen(!open)}>
                    💬 AI Assistant
                </div>
                {open && (
                    <>
                        <div className="chat-body">
                            {chat.length === 0 && (
                                <div className="chat-suggestion">
                                    <p>Example: <em>How do I sell my license?</em></p>
                                </div>
                            )}
                            {chat.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`chat-msg ${msg.role === 'user' ? 'user' : 'assistant'}`}
                                >
                                    {msg.content}
                                </div>
                            ))}
                            {loading && <div className="chat-msg assistant">Typing...</div>}
                        </div>
                        <div className="chat-input">
                            <input
                                type="text"
                                placeholder="Type a question..."
                                value={userMsg}
                                onChange={(e) => setUserMsg(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <button onClick={handleSend}>Send</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ChatWidget;
