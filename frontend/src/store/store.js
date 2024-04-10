// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cartslice';

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
