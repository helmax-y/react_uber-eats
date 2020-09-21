import React from 'react';

const DishInstructions = () => (
  <section>
    <h2 className="custom__head custom__title">
      Special instructions
    </h2>
    <input
      className="custom__comment"
      type="textarea"
      placeholder="Leave a note to kitchen"
    />
  </section>
);

export default DishInstructions;
