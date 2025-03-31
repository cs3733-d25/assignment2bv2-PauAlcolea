import React from 'react';

const Table2: React.FC = () => {
  return (
    <div className="table">
      <h2>Some Paintings and Drawings of the 20th and 19th Centuries</h2>
      <table className="collapse">
        <caption>Artwork of Three Artists</caption>
        <thead>
          <tr>
            <th>Pablo Picasso</th>
            <th>Henri Matisse</th>
            <th>Claude Monet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Guernica</td>
            <td>Jazz</td>
            <td>Poppy Field</td>
          </tr>
          <tr>
            <td>The Old Guitarist</td>
            <td>Window at Tangier</td>
            <td>Impression, Sunrise</td>
          </tr>
          <tr>
            <td>Don Quijote</td>
            <td>Dance</td>
            <td>Woman with a Parasol</td>
          </tr>
          <tr>
            <td>Portrait of Gertrude Stein</td>
            <td>Two Dancers</td>
            <td>Water Lillies</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table2; 