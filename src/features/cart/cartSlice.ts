import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IProductCart } from '../../models/products';
import { buyCart } from './cartAPI';

export interface CartState {
  items: IProductCart[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CartState = {
  items: [],
  status: 'idle',
};

export const buyCartAsync = createAsyncThunk(
  'cart/buyCart',
  async (body: object) => {
    const response = await buyCart(body);
    return response;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IProductCart> ) => {
      const product = action.payload;
      const cartItem = state.items.find((item) => item.productID === product.productID && item.productDetailID === product.productDetailID)

      if(cartItem){
        cartItem.quantity += 1;
      } else {
        state.items.push(product);
      }
    },
    remove: (state, action: PayloadAction<IProductCart>) => {
      const product = action.payload;
      const cartItem = state.items.find((item) => item.productID === product.productID && item.productDetailID === product.productDetailID)
      const cartItemIndex = state.items.findIndex((item) => item.productID === product.productID && item.productDetailID === product.productDetailID)

      if(cartItem){
        cartItem.quantity -= 1;

        if(cartItem.quantity === 0)
          state.items.splice(cartItemIndex, 1)
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(buyCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(buyCartAsync.fulfilled, (state) => {
        state.status = 'idle';
        state.items = [];
      })
      .addCase(buyCartAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { add, remove } = cartSlice.actions;

export const countCartItems = (state: RootState) => state.cart.items.length;

export default cartSlice.reducer;
