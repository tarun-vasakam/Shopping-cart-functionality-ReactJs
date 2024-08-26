import React from 'react';

const Card = ({ item, dispatch }) => {
  return (
    <div className="card">
      <img src={item.img} height={150} alt={item.name}></img>
      <h3>{item.name}</h3>
      <div className='price-item'>
      <p>Price: {item.price.toFixed(2)}</p>
      <div className='quantity'>
        <button onClick={() => dispatch({ type: 'INCREASE', payload: item.id })}>+</button>
        <p>{item.quantity}</p>
        <button onClick={() => dispatch({ type: 'DECREASE', payload: item.id })}>-</button>
      </div>
      </div>
    </div>
  );
};

export default Card;