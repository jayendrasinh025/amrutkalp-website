import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, CustomerOrderDetails, PlacedOrder } from '../types';
import { BRAND } from '../data/brand';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  shippingFee: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
  grandTotal: number;
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (open: boolean) => void;
  isCheckoutModalOpen: boolean;
  setIsCheckoutModalOpen: (open: boolean) => void;
  activeOrder: PlacedOrder | null;
  setActiveOrder: (order: PlacedOrder | null) => void;
  instantBuyNow: (product: Product, quantity?: number) => void;
  placeOrder: (customer: CustomerOrderDetails) => PlacedOrder;
  generateWhatsAppOrderUrl: (customer?: CustomerOrderDetails) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'amrutkalp_cart_v1';
const RECENT_ORDER_KEY = 'amrutkalp_last_order_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState<PlacedOrder | null>(() => {
    try {
      const saved = localStorage.getItem(RECENT_ORDER_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartDrawerOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  
  const freeShippingThreshold = BRAND.shippingThreshold;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 70;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const grandTotal = subtotal + shippingFee;

  const instantBuyNow = (product: Product, quantity = 1) => {
    addToCart(product, quantity);
    setIsCartDrawerOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const placeOrder = (customer: CustomerOrderDetails): PlacedOrder => {
    const orderNumber = 'AK-' + Math.floor(100000 + Math.random() * 900000);
    const order: PlacedOrder = {
      orderId: orderNumber,
      items: [...cart],
      customer,
      subtotal,
      shipping: shippingFee,
      total: grandTotal,
      createdAt: new Date().toISOString(),
      status: 'confirmed'
    };

    setActiveOrder(order);
    try {
      localStorage.setItem(RECENT_ORDER_KEY, JSON.stringify(order));
    } catch (e) {
      console.warn('Failed to save order', e);
    }

    clearCart();
    return order;
  };

  const generateWhatsAppOrderUrl = (customer?: CustomerOrderDetails): string => {
    const itemList = cart
      .map(item => `• ${item.product.name} (${item.product.weightOrQuantity}) x ${item.quantity} = ₹${item.product.price * item.quantity}`)
      .join('\n');

    let text = `*New Order Inquiry - AMRUTKALP Ayurvedic Herbals*\n\n`;
    text += `*Order Items:*\n${itemList || '• No items selected yet'}\n\n`;
    text += `*Subtotal:* ₹${subtotal}\n`;
    text += `*Shipping:* ${shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}\n`;
    text += `*Total Amount:* ₹${grandTotal}\n\n`;

    if (customer && customer.fullName) {
      text += `*Customer Details:*\n`;
      text += `• Name: ${customer.fullName}\n`;
      text += `• Phone: ${customer.phoneNumber}\n`;
      text += `• Address: ${customer.addressLine1}${customer.addressLine2 ? ', ' + customer.addressLine2 : ''}\n`;
      text += `• City/State: ${customer.city}, ${customer.state} - ${customer.pincode}\n`;
      text += `• Payment Preference: ${customer.paymentMethod.toUpperCase()}\n`;
      if (customer.notes) {
        text += `• Note: ${customer.notes}\n`;
      }
    } else {
      text += `Hello Amrutkalp team, I would like to place an order for the items above. Please assist with delivery confirmation.`;
    }

    const encoded = encodeURIComponent(text);
    return `https://wa.me/${BRAND.whatsappNumber}?text=${encoded}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        shippingFee,
        freeShippingThreshold,
        amountNeededForFreeShipping,
        grandTotal,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        isCheckoutModalOpen,
        setIsCheckoutModalOpen,
        activeOrder,
        setActiveOrder,
        instantBuyNow,
        placeOrder,
        generateWhatsAppOrderUrl
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
