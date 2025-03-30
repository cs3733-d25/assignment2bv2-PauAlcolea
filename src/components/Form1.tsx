import React from 'react';

const Form1: React.FC = () => {
  return (
    <div className="form">
      <h2>Tennis Feedback Form</h2>
      <form>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>

        <h3>What equipment do you own?</h3>
        <div>
          <input type="checkbox" id="racket" name="equipment" value="racket" />
          <label htmlFor="racket">Tennis Racket</label>
        </div>
        <div>
          <input type="checkbox" id="shoes" name="equipment" value="shoes" />
          <label htmlFor="shoes">Tennis Shoes</label>
        </div>
        <div>
          <input type="checkbox" id="bag" name="equipment" value="bag" />
          <label htmlFor="bag">Tennis Bag</label>
        </div>

        <h3>How often do you play?</h3>
        <div>
          <input type="radio" id="weekly" name="frequency" value="weekly" />
          <label htmlFor="weekly">Weekly</label>
        </div>
        <div>
          <input type="radio" id="monthly" name="frequency" value="monthly" />
          <label htmlFor="monthly">Monthly</label>
        </div>
        <div>
          <input type="radio" id="rarely" name="frequency" value="rarely" />
          <label htmlFor="rarely">Rarely</label>
        </div>

        <div>
          <label htmlFor="skill">Skill Level:</label>
          <select id="skill" name="skill">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="pro">Professional</option>
          </select>
        </div>

        <div>
          <label htmlFor="comments">Additional Comments:</label>
          <textarea id="comments" name="comments" rows={4} cols={50}></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form1; 