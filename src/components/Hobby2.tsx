import React from 'react';
import List2 from './List2';
import Table2 from './Table2';
import Form2 from './Form2';

const Hobby2: React.FC = () => {
  return (
    <div className="hobby">
      <h2>Art and Museums</h2>
      <img src="/public/museum.jpg" alt="Placeholder Hobby" width="640" />
      <p>
          My interest in art has begun quite recently,
          after going to museums in Worcester, Boston and other cities.
          Museums are always an amazing way for me to relax and reflect,
          and I think that that has influenced my interest in the actual
          art they display.
          I have recently been studying art from the XX century
          more specifically by reading from an art book at my house
      </p>
      
      <List2 />
      <Table2 />
      <Form2 />
    </div>
  );
};

export default Hobby2; 