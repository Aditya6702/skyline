import React, { useState } from 'react';
import AiwithText from './components/AiwithText';
import AiwithImage from './components/AiwithImage';
import { Button,ButtonGroup } from 'react-bootstrap';
const Home = () => {
  const [aiWith, setLAiWith] = useState('text');

  const handleAiWith = (value) => {
    setLAiWith(value);
  }

  return (
    <div>
      

      <ButtonGroup
      style={{
        marginTop:'10rem',
      }}
      >
        <Button
          onClick={() => handleAiWith('text')}
          variant={aiWith === 'text' ? 'primary' : 'secondary'}
        >
          Text
        </Button>

        <Button
          style={{ marginLeft: '20px',
        padding:'1.5rem',

    }}
          onClick={() => handleAiWith('image')}
          variant={aiWith === 'image' ? 'primary' : 'secondary'}
        >
          Image
        </Button>
      </ButtonGroup>

      {
        aiWith == 'text' ?
          <AiwithText />
          :
          <AiwithImage />
      }
    </div>
  );
};

export default Home;