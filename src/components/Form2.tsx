import React from 'react';

const Form2: React.FC = () => {
  return (
    <div className="form">
      <h2>Placeholder Feedback Form</h2>
      <form>
        <div>
          <label htmlFor="name2">Your Name:</label>
          <input type="text" id="name2" name="name2" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="email2">Email Address:</label>
          <input type="email" id="email2" name="email2" placeholder="Enter your email" />
        </div>

        <h3>Placeholder Questions:</h3>
        <div>
          <input type="checkbox" id="option1" name="options" value="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div>
          <input type="checkbox" id="option2" name="options" value="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
        <div>
          <input type="checkbox" id="option3" name="options" value="option3" />
          <label htmlFor="option3">Option 3</label>
        </div>

        <h3>Placeholder Radio Options:</h3>
        <div>
          <input type="radio" id="radio1" name="radio_options" value="radio1" />
          <label htmlFor="radio1">Radio 1</label>
        </div>
        <div>
          <input type="radio" id="radio2" name="radio_options" value="radio2" />
          <label htmlFor="radio2">Radio 2</label>
        </div>
        <div>
          <input type="radio" id="radio3" name="radio_options" value="radio3" />
          <label htmlFor="radio3">Radio 3</label>
        </div>

        <div>
          <label htmlFor="dropdown">Placeholder Dropdown:</label>
          <select id="dropdown" name="dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>

        <div>
          <label htmlFor="comments2">Additional Comments:</label>
          <textarea id="comments2" name="comments2" rows={4} cols={50}></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form2; 