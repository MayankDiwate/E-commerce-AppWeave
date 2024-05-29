import { Product } from "@/types/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  products: (Product & { quantity: number })[];
  total: number;
};

const initialState: CartState = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<Product & { quantity: number }>
    ) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
        state.products = state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: existingProduct.quantity,
            };
          }
          return product;
        });
      } else {
        state.products.push(action.payload);
      }

      state.total += action.payload.price * action.payload.quantity;
    },
    removeFromCart: (
      state,
      action: PayloadAction<Product & { quantity: number }>
    ) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.total = state.total - action.payload.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
