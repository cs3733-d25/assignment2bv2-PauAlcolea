import React from 'react';

const Table2: React.FC = () => {
  return (
    <div className="table">
      <h2>Placeholder Table</h2>
      <table className="collapse">
        <caption>Placeholder Caption</caption>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Item 1A</td>
            <td>Item 1B</td>
            <td>Item 1C</td>
          </tr>
          <tr>
            <td>Item 2A</td>
            <td>Item 2B</td>
            <td>Item 2C</td>
          </tr>
          <tr>
            <td>Item 3A</td>
            <td>Item 3B</td>
            <td>Item 3C</td>
          </tr>
          <tr>
            <td>Item 4A</td>
            <td>Item 4B</td>
            <td>Item 4C</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table2; 