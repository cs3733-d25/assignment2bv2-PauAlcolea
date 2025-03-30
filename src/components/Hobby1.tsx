import React from 'react';
import List1 from './List1';
import Table1 from './Table1';
import Form1 from './Form1';

const Hobby1: React.FC = () => {
  return (
    <div className="hobby">
      <h2>Why I Love Tennis</h2>
      <img src="/tennis_banner.jpg" alt="Tennis Banner" width="640" />
      <p>
        Tennis is an amazing sport that offers both physical and mental benefits. 
        It is one of the few ways aside from golf that allows me to connect and 
        enjoy free time with my dad. It also keeps me active and focused, while 
        also being a fun way to spend time outdoors.
      </p>
      
      <List1 />
      <Table1 />
      <Form1 />
    </div>
  );
};

export default Hobby1; 