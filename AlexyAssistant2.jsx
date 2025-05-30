import React from 'react';

const AlexyAssistant = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      backgroundColor: '#f5f5f5' 
    }}>
      <img 
        src="/AlexyOP.jpg" 
        alt="Alexy Avatar" 
        style={{ 
          width: '300px', 
          borderRadius: '20px', 
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)' 
        }} 
      />
      <h1>Hello, I’m Alexy</h1>
      <p>Your private assistant is now awake.</p>
    </div>
  );
};

export default AlexyAssistant;
