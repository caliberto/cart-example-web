import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IProduct, IProductCart } from '../../models/products';
import { getProducts } from './productsAPI';

export interface ProductsState {
  items: IProduct[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductsState = {
  items: [],
  status: 'idle',
};

export const loadProductsAsync = createAsyncThunk(
  'products/fetch',
  async () : Promise<IProduct[]> => {
    const response = await getProducts();
    return response;
  }
);

export const productsSlice = createSlice({
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

export const { add, remove } = productsSlice.actions;

export const countProductsItems = (state: RootState) => state.products.items.length;

export default productsSlice.reducer;