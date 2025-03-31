import React from 'react';

const Form2: React.FC = () => {
  return (
    <div className="form">
      <h2>A Little Art Questionnaire</h2>
      <form>
        <div>
          <label htmlFor="name2">Your Name:</label>
          <input type="text" id="name2" name="name2" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="email2">Email Address:</label>
          <input type="email" id="email2" name="email2" placeholder="Enter your email" />
        </div>

        <h3>What museums have you been to?</h3>
        <div>
          <input type="checkbox" id="option1" name="options" value="option1" />
          <label htmlFor="option1">Worcester Art Museum</label>
        </div>
        <div>
          <input type="checkbox" id="option2" name="options" value="option2" />
          <label htmlFor="option2">MoMA</label>
        </div>
        <div>
          <input type="checkbox" id="option3" name="options" value="option3" />
          <label htmlFor="option3">Museum Fine Arts, Boston</label>
        </div>
        <div>
          <input type="checkbox" id="option4" name="options" value="option4" />
          <label htmlFor="option4">None of the above</label>
        </div>

        <h3>When was the last time you painted?</h3>
        <div>
          <input type="radio" id="radio1" name="radio_options" value="radio1" />
          <label htmlFor="radio1">Recently (within this last year)</label>
        </div>
        <div>
          <input type="radio" id="radio2" name="radio_options" value="radio2" />
          <label htmlFor="radio2">Between 1-5 years ago</label>
        </div>
        <div>
          <input type="radio" id="radio3" name="radio_options" value="radio3" />
          <label htmlFor="radio3">More than 5 years ago</label>
        </div>
        <div>
          <input type="radio" id="radio4" name="radio_options" value="radio4" />
          <label htmlFor="radio4">Never :(</label>
        </div>

        <div>
          <label htmlFor="dropdown">What type of museums do you prefer?</label>
          <select id="dropdown" name="dropdown">
            <option value="option1">--Select Something--</option>
            <option value="option2">Modern Art</option>
            <option value="option3">Natural Sciences</option>
            <option value="option4">Classical Fine Arts</option>
            <option value="option5">Historical</option>
          </select>
        </div>

        <div>
          <label htmlFor="comments2">Comments / Art Recommendations</label>
          <textarea id="comments2" name="comments2" rows={4} cols={50}></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form2; 