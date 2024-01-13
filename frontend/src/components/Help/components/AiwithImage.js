import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64 } from './imageHelper';
import { Container, Row, Col, InputGroup, FormControl, Button, Image, Spinner } from 'react-bootstrap';

const AiwithImage = () => {
    const genAI = new GoogleGenerativeAI('AIzaSyDtiBA7Z3cIgjqzSktQUm0zGj3uQBAWuso');

    const [image, setImage] = useState('');
    const [imageInineData, setImageInlineData] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    /**
     * Generative AI Call to fetch image insights
     */
    async function aiImageRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
        const result = await model.generateContent([
            "What's in this photo?", imageInineData
        ]);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
    }

    const handleClick = () => {
        aiImageRun();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        // getting base64 from file to render in DOM
        getBase64(file)
            .then((result) => {
                setImage(result);
            })
            .catch(e => console.log(e))

        // generating content model for Gemini Google AI
        fileToGenerativePart(file).then((image) => {
            setImageInlineData(image);
        });
    }

    // Converts a File object to a GoogleGenerativeAI.Part object.
    async function fileToGenerativePart(file) {
        const base64EncodedDataPromise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.readAsDataURL(file);
        });

        return {
            inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
    }

    return (
        <Container>
      <Row>
        <Col>
          <div style={{ display: 'flex' }}>
            <InputGroup>
              <FormControl type='file' onChange={(e) => handleImageChange(e)} />
            </InputGroup>
            <Button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>Search</Button>
          </div>
          {image && <Image src={image} style={{ width: '30%', marginTop: '30px' }} />}
        </Col>
      </Row>

      <Row style={{ margin: '30px 0' }}>
        <Col>
          {loading && !aiResponse ? (
            <p>Loading...</p>
          ) : (
            <div>
              <p>{aiResponse}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
    );
};

export default AiwithImage;