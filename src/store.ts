import { create } from "zustand";
import { CartItem } from "./types/CartItem";
import { Product } from "./types/Product";

type CartStore = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  clearCart: () => void;
  removeCartItem: (productId: Product["id"]) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({
      cart: [product, ...state.cart],
    })),
  clearCart: () => set(() => ({ cart: [] })),
  removeCartItem: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
}));
