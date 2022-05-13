import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IProduct, IProductCart } from '../../models/products';
import { getProducts } from './productAPI';

export interface ProductsState {
  items: IProduct[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductsState = {
  items: [],
  status: 'idle',
};

export const loadProductsAsync = createAsyncThunk(
  'products',
  async () : Promise<IProduct[]> => {
    const response = await getProducts();
    return response;
  }
);

export const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IProductCart> ) => {
      const product = action.payload;
      const item = state.items.find((item) => item.id === product.productID)

      if(item) {
        const itemDetail = item.details.find(detail => detail.id === product.productDetailID)
        if(itemDetail) {
          itemDetail.quantity += 1;
        }
      }
    },
    remove: (state, action: PayloadAction<IProductCart>) => {
      const product = action.payload;
      const item = state.items.find((item) => item.id === product.productID)

      if(item) {
        const itemDetail = item.details.find(detail => detail.id === product.productDetailID)
        if(itemDetail) {
          itemDetail.quantity -= 1;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadProductsAsync.fulfilled, (state, {payload}) => {
        state.status = 'idle';
        state.items = payload;
      })
      .addCase(loadProductsAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { add, remove } = cartSlice.actions;

export const countCartItems = (state: RootState) => state.cart.items.length;

export default cartSlice.reducer;
