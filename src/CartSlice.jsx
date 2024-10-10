import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
  },
  reducers: {
    addItem: (state, action) => {
      if(state.items.filter((item) => item.name === action.payload.name).length === 0) {
        state.items.push(action.payload);
      } else {
        state.items = state.items.map((item) => {
          if(item.name === action.payload.name) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      }
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
