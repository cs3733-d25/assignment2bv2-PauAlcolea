import React from 'react';
import List2 from './List2';
import Table2 from './Table2';
import Form2 from './Form2';

const Hobby2: React.FC = () => {
  return (
    <div className="hobby">
      <h2>Placeholder Hobby</h2>
      <img src="/placeholder.jpg" alt="Placeholder Hobby" width="640" />
      <p>
        Placeholder description
      </p>
      
      <List2 />
      <Table2 />
      <Form2 />
    </div>
  );
};

export default Hobby2; 