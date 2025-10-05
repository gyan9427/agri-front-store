import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  category: 'npk' | 'organic' | 'foliar' | 'specialty';
  price: number;
  image: string;
  description: string;
  inStock: boolean;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  // Cart
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;

  // Theme
  theme: 'light' | 'dark';
  toggleTheme: () => void;

  // Language
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;

  // Filters
  filters: {
    category: string[];
    priceRange: [number, number];
    inStock: boolean;
  };
  setFilters: (filters: Partial<StoreState['filters']>) => void;
  resetFilters: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      // Cart state
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        })),
      clearCart: () => set({ cart: [] }),

      // Theme state
      theme: 'light',
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

      // Language state
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),

      // Filter state
      filters: {
        category: [],
        priceRange: [0, 1000],
        inStock: false,
      },
      setFilters: (newFilters) =>
        set((state) => ({
          filters: { ...state.filters, ...newFilters },
        })),
      resetFilters: () =>
        set({
          filters: {
            category: [],
            priceRange: [0, 1000],
            inStock: false,
          },
        }),
    }),
    {
      name: 'panama-crops-storage',
    }
  )
);
