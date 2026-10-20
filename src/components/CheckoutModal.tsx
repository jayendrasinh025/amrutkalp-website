import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CustomerOrderDetails } from '../types';
import { BRAND } from '../data/brand';
import { X, ShieldCheck, Truck, Check, AlertCircle, MessageCircle, CreditCard, Banknote } from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    subtotal,
    shippingFee,
    grandTotal,
    isCheckoutModalOpen,
    setIsCheckoutModalOpen,
    placeOrder,
    generateWhatsAppOrderUrl
  } = useCart();

  const [formData, setFormData] = useState<CustomerOrderDetails>({
    fullName: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: 'Gujarat',
    pincode: '',
    notes: '',
    paymentMethod: 'cod'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CustomerOrderDetails, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutModalOpen) return null;

  const validate = (): boolean => {
    const errs: Partial<Record<keyof CustomerOrderDetails, string>> = {};

    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required for delivery';
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      errs.phoneNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.addressLine1.trim()) errs.addressLine1 = 'Street address is required';
    if (!formData.city.trim()) errs.city = 'City name is required';
    if (!formData.pincode.trim()) {
      errs.pincode = 'Pincode is required';
    } else if (!/^[0-9]{6}$/.test(formData.pincode.trim())) {
      errs.pincode = 'Enter a valid 6-digit Indian PIN code';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      placeOrder(formData);
      setIsSubmitting(false);
      setIsCheckoutModalOpen(false);
    }, 400);
  };

  const handleWhatsAppCheckout = () => {
    if (!validate()) return;
    const url = generateWhatsAppOrderUrl(formData);
    placeOrder(formData);
    setIsCheckoutModalOpen(false);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Dimmed backdrop */}
      <div 
        onClick={() => setIsCheckoutModalOpen(false)}
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl border border-stone-200">
          
          {/* Header */}
          <div className="p-6 border-b border-stone-200 bg-[#fbfaf7] flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold text-stone-900">
                  Checkout & Dispatch Order
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-1">
                Dispatched from Amrutkalp Surat, Gujarat within 24–48 hours
              </p>
            </div>
            <button
              onClick={() => setIsCheckoutModalOpen(false)}
              className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* Order Items Preview */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-stone-700">
                <span>Selected Formulations ({cart.length})</span>
                <span className="text-stone-900">Total: ₹{grandTotal}</span>
              </div>
              <div className="space-y-1.5 text-xs text-stone-600 max-h-28 overflow-y-auto">
                {cart.map(item => (
                  <div key={item.product.id} className="flex justify-between">
                    <span className="truncate max-w-xs">
                      {item.product.name} ({item.product.weightOrQuantity}) x {item.quantity}
                    </span>
                    <span className="font-semibold tabular-nums">
                      ₹{item.product.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-stone-200 flex justify-between text-xs text-stone-500">
                <span>Shipping: {shippingFee === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${shippingFee}`}</span>
                <span>Includes ₹5.51L Purity Guarantee</span>
              </div>
            </div>

            {/* Customer Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wide">
                1. Delivery Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Mobile Number (for delivery tracking) *
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                  {errors.phoneNumber && (
                    <span className="text-[11px] text-red-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Full House / Flat / Street Address *
                </label>
                <input
                  type="text"
                  value={formData.addressLine1}
                  onChange={e => setFormData({ ...formData, addressLine1: e.target.value })}
                  placeholder="e.g. B-402, Shivalik Residency, Near Circle"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
                {errors.addressLine1 && (
                  <span className="text-[11px] text-red-600 mt-1 block flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.addressLine1}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    City / Town *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Surat"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                  {errors.city && (
                    <span className="text-[11px] text-red-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.city}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={e => setFormData({ ...formData, state: e.target.value })}
                    placeholder="e.g. Gujarat"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={e => setFormData({ ...formData, pincode: e.target.value })}
                    placeholder="6-digit PIN"
                    maxLength={6}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                  {errors.pincode && (
                    <span className="text-[11px] text-red-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.pincode}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Special Delivery Instructions (Optional)
                </label>
                <input
                  type="text"
                  value={formData.notes || ''}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Please call before delivery, deliver in morning"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wide">
                2. Payment Preference
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                    formData.paymentMethod === 'cod'
                      ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={() => {}}
                    className="mt-0.5"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <Banknote className="w-4 h-4 text-[#c99a45]" />
                      <span className="text-xs font-bold text-stone-900">
                        Cash on Delivery (COD)
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-1">
                      Pay cash or scan UPI with the courier executive at your doorstep.
                    </p>
                  </div>
                </label>

                <label
                  onClick={() => setFormData({ ...formData, paymentMethod: 'online' })}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                    formData.paymentMethod === 'online'
                      ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={formData.paymentMethod === 'online'}
                    onChange={() => {}}
                    className="mt-0.5"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#c99a45]" />
                      <span className="text-xs font-bold text-stone-900">
                        Online UPI / Pre-Paid
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-1">
                      Instant UPI payment confirmation via WhatsApp or Merchant QR.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 py-3 px-5 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 text-sm shadow-xs cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Processing Order...</span>
                ) : (
                  <>
                    <Check className="w-4 h-4 text-[#c99a45]" />
                    <span>Confirm Order (Pay ₹{grandTotal})</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppCheckout}
                className="w-full sm:w-auto py-3 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 text-xs shadow-xs cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Submit & Order via WhatsApp</span>
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};
