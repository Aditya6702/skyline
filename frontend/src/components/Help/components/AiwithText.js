import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const AiwithText = () => {
    const genAI = new GoogleGenerativeAI('AIzaSyDtiBA7Z3cIgjqzSktQUm0zGj3uQBAWuso');

    const [search, setSearch] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    /**
     * Generative AI Call to fetch text insights
     */
    async function aiRun() {
        


        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `if the user greets else if the following is the observation or issue in observed in the flight maintenence help me with fixes and solutions fo the same${search} `;
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
<div className="container mt-3">
            <div className="d-flex">
                <input className="form-control" placeholder='What is your issue?' onChange={(e) => handleChangeSearch(e)} />
                <button className="btn btn-primary ml-3" onClick={() => handleClick()}
                style={{
                    marginTop:'10rem',
                    marginLeft:'2rem'
                }}
                >Search</button>
            </div>

            {loading && aiResponse === '' ? (
                <p className="mt-3 text-white">Loading ...</p>
            ) : (
                <div className="mt-3">
                    <p className="text-white">{aiResponse}</p>
                </div>
            )}
        </div>
    
    );
};

export default AiwithText;