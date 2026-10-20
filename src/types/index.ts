export interface IngredientDetail {
  name: string;
  botanicalName?: string;
  role: string;
  source?: string;
  percentage?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  sanskritName?: string;
  category: 'vitality' | 'pain-relief' | 'bundle' | 'general';
  categoryLabel: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  weightOrQuantity: string;
  servingCount: string;
  rating: number;
  reviewCount: number;
  images: string[];
  primaryImage: string;
  shortDescription: string;
  fullDescription: string;
  campaignKicker?: string;
  campaignSlogan?: string;
  keyHighlights: string[];
  verifiedBenefits: string[];
  safetyPrecautions: string[];
  howToUse: {
    timing: string;
    dosage: string;
    liquidVehicle: string;
    instructions: string[];
  };
  ingredients: IngredientDetail[];
  authenticityTests: {
    title: string;
    description: string;
    result: string;
  }[];
  transparencyStatus: {
    verifiedBy: string;
    originLocation: string;
    batchStatus: string;
    pendingLaboratoryReports?: string;
  };
  inStock: boolean;
  freeShipping: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerOrderDetails {
  fullName: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  notes?: string;
  paymentMethod: 'cod' | 'online' | 'whatsapp';
}

export interface PlacedOrder {
  orderId: string;
  items: CartItem[];
  customer: CustomerOrderDetails;
  subtotal: number;
  shipping: number;
  total: number;
  createdAt: string;
  status: 'confirmed' | 'dispatched' | 'delivered';
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  excerpt: string;
  content: {
    sectionHeading: string;
    body: string[];
  }[];
}
