// import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";


import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
const YourComponent = () => {
  const genAI = new GoogleGenerativeAI('AIzaSyDtiBA7Z3cIgjqzSktQUm0zGj3uQBAWuso');
    const [search, setSearch] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    async function aiRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `you are a engineer emplyed to work on planes,this is the fault that you have found now tell me how to fix it ${search}`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
    }

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = () => {
        aiRun();
    }
    

    return (
        <div className="container mt-4">
            
            <div className="d-flex">
                <input
                    className="form-control"
                    placeholder='What is you issue?'
                    onChange={(e) => handleChangeSearch(e)}
                />
                <button
                    className="btn btn-primary ml-2" 
                    style={{
                        marginTop : '10rem',
                        marginLeft:'2rem',
                        paddingLeft:'2rem',
                        paddingRight:'2rem',
                    }}
                    onClick={() => handleClick()}
                >
                    Search
                </button>
            </div>

            {loading && !aiResponse ? (
                <p className="mt-3">Loading...</p>
            ) : (
                aiResponse && (
                    <div className="mt-3">
                        <p>{aiResponse}</p>
                    </div>
                )
            )}
        <Particle></Particle>
        </div>
    );
}

export default YourComponent;
