import React, { useState } from 'react';
import AiwithText from '../components/AiwithText';
import AiwithImage from '../components/AiwithImage';
import './Home.css'; // Custom styling for Home

const Home = () => {
  const [aiWith, setLAiWith] = useState('text');

  const handleAiWith = (value) => {
    setLAiWith(value);
  }

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="title">Ingredient AI App!</h1>
        <p className="subtitle">Built with ❤️ using ReactJS + Redux + Google Gemini</p>
      </header>

      <div className="button-group">
        <button
          onClick={() => handleAiWith('text')}
          className={aiWith === 'text' ? 'aiWithActive' : ''}>
          AI with Text
        </button>

        <button
          onClick={() => handleAiWith('image')}
          className={aiWith === 'image' ? 'aiWithActive' : ''}>
          AI with Image
        </button>
      </div>

      <div className="ai-container">
        {aiWith === 'text' ? <AiwithText /> : <AiwithImage />}
      </div>
    </div>
  );
};

export default Home;
