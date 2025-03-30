import React from 'react';

const Table1: React.FC = () => {
  return (
    <div className="table">
      <h2>Famous Tennis Grand Slams</h2>
      <table className="collapse">
        <caption>Major Tennis Tournaments</caption>
        <thead>
          <tr>
            <th>Tournament</th>
            <th>Location</th>
            <th>Surface</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Australian Open</td>
            <td>Melbourne, Australia</td>
            <td>Hard Court</td>
          </tr>
          <tr>
            <td>French Open</td>
            <td>Paris, France</td>
            <td>Clay</td>
          </tr>
          <tr>
            <td>Wimbledon</td>
            <td>London, UK</td>
            <td>Grass</td>
          </tr>
          <tr>
            <td>US Open</td>
            <td>New York, USA</td>
            <td>Hard Court</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table1; 