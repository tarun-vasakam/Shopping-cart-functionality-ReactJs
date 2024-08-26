import React, { useReducer } from 'react';
import { initialState, reducer } from './reducer';
import Card from './Card';
import Title from './Title';
import './styles.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  return (
    <div className="app">
      <Title name="Online Fruits Market"/>
      <div className="cart">
        {state.items.map(item => (
          <Card key={item.id} item={item} dispatch={dispatch} />
        ))}
      </div>
      <div className="footer">
        <h2>Total Price: {totalPrice}</h2>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset All</button>
      </div>
    </div>
  );
};

export default App;