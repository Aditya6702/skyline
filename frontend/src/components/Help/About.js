import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';  // Make sure you have the correct import statements
import AiwithText from './components/AiwithText';  // Adjust the import path based on your project structure
import AiwithImage from './components/AiwithImage';  // Adjust the import path based on your project structure
import Particle from '../Particle';  // Adjust the import path based on your project structure

const Home = () => {
  const [aiWith, setAiWith] = useState('text');

  const handleAiWith = (value) => {
    setAiWith(value);
  }

  return (
    <div>
      <ButtonGroup
        style={{
          marginTop: '10rem',
        }}
      >
        <Button
          onClick={() => handleAiWith('text')}
          variant={aiWith === 'text' ? 'primary' : 'secondary'}
        >
          Text
        </Button>

        <Button
          style={{
            marginLeft: '20px',
            padding: '1.5rem',
          }}
          onClick={() => handleAiWith('image')}
          variant={aiWith === 'image' ? 'primary' : 'secondary'}
        >
          Image
        </Button>
      </ButtonGroup>

      {aiWith === 'text' ? <AiwithText /> : <AiwithImage />}
      <Particle></Particle>
    </div>
  );
};

export default Home;