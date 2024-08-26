import appleImg from './assets/apple.png';
import bananaImg from './assets/banana.png';
import orangeImg from './assets/orange.png';
import mangoImg from './assets/mango.png';

export const initialState = {
    items: [
      { id: 1, name: 'Apple', price: 50, quantity: 0 , img: appleImg},
      { id: 2, name: 'Banana', price: 20, quantity: 0, img: bananaImg},
      { id: 3, name: 'Orange', price: 40, quantity: 0, img: orangeImg},
      { id: 4, name: 'Mango', price: 50, quantity: 0, img: mangoImg},
    ],
  };
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREASE':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      case 'DECREASE':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
          ),
        };
      case 'RESET':
        return {
          ...state,
          items: state.items.map(item => ({ ...item, quantity: 0 })),
        };
      default:
        return state;
    }
  };
  