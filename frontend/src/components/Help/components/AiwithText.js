import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

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
        const prompt = `based on the text, provide some fixes and help for flight maintenance for fixing the problem ${search} category with images `;
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
        <Container>
            <Row>
                <Col>
                    <div style={{ display: 'flex' }}>
                        <InputGroup>
                            <FormControl
                                placeholder='What is your issue?'
                                onChange={(e) => handleChangeSearch(e)}
                            />
                        </InputGroup>
                        <Button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>
                            Search
                        </Button>
                    </div>
                </Col>
            </Row>

            <Row style={{ margin: '30px 0' }}>
                <Col>
                    {loading && aiResponse === '' ? (
                        <p>Loading...</p>
                    ) : (
                        <div style={{ margin: '30px 0' }}>
                            <p style={{
                                color: 'white', // Set text color to white
                                fontSize: '16px', // Set font size if needed
                                lineHeight: '1.6', // Set line height if needed
                                // Add other styles as needed
                            }}>{aiResponse}</p>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default AiwithText;
