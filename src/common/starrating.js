import React, { useState } from 'react';

const StarRating = ({ onChange }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    onChange(newRating);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <p style={{ marginRight: '10px'}}>{rating}</p>
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          style={{ cursor: 'pointer', color: index <= rating ? 'gold' : 'gray' }}
          onClick={() => handleRatingChange(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
