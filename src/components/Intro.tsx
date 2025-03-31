import React from 'react';

interface IntroProps {
  name1: string;
  name2: string;
}

const Intro: React.FC<IntroProps> = ({ name1, name2 }) => {
  return (
    <div className="intro">
      <p>
        Hello! My name is {name1} and I'm a CS junior at WPI. I love playing tennis and have been playing since I was 16.
      </p>
      <p>
        And I'm {name2}, and I'm an RBE / ME junior, also WPI. I have recently gotten into art through museums and books.
      </p>
    </div>
  );
};

export default Intro; 