import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About the Ingredients AI App</h1>
      <p className="about-subtitle">
        Welcome to the Ingredients AI App, an innovative solution designed to help you discover the ingredients of any meal by simply uploading a photo.
      </p>
      <p className="about-description">
        Our app is not a restaurant, but a powerful tool built using ReactJS and the Gemini API. The app allows users to upload pictures of meals, and using advanced AI algorithms, it identifies the ingredients used in the dish. This process is seamless, fast, and intuitive, making it easier for food enthusiasts, chefs, and anyone curious about meal composition to get accurate results quickly.
      </p>
      <p className="about-details">
        The Ingredients AI App provides you with a list of ingredients for any uploaded dish, allowing you to experiment with recipes, plan meals, and understand the nutritional value of the foods you enjoy. Whether you're creating a new recipe or just exploring, our app empowers you to take your culinary journey to the next level.
      </p>
      
      <p className="about-footer">
        Built with love using ReactJS and the Gemini API to bring you a smarter way of understanding meals!
      </p>
    </div>
  );
};

export default About;
