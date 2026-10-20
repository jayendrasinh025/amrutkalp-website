import React from 'react';
import { useCart } from '../context/CartContext';
import { BRAND } from '../data/brand';
import { CheckCircle2, PackageCheck, Printer, MessageCircle, X, MapPin, Truck } from 'lucide-react';

export const OrderConfirmationModal: React.FC = () => {
  const { activeOrder, setActiveOrder } = useCart();

  if (!activeOrder) return null;

  const handleWhatsAppHelp = () => {
    const text = `Hello Amrutkalp, I have placed order ${activeOrder.orderId} for ₹${activeOrder.total}. Please provide shipment tracking updates.`;
    window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Dimmed backdrop */}
      <div 
        onClick={() => setActiveOrder(null)}
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-xl border border-stone-200">
          
          {/* Header */}
          <div className="p-6 bg-[#111915] text-white flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-amber-300 uppercase">
                  Order Successfully Placed
                </span>
                <h3 className="font-serif text-2xl font-bold tracking-tight">
                  Thank You, {activeOrder.customer.fullName}
                </h3>
              </div>
            </div>
            <button
              onClick={() => setActiveOrder(null)}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            
            {/* Status Strip */}
            <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-emerald-900 font-semibold">
                <Truck className="w-4 h-4 text-emerald-700" />
                <span>Status: Preparing for Fast Dispatch</span>
              </div>
              <div className="text-right">
                <span className="text-stone-500 text-[10px] block">Order Identifier</span>
                <span className="font-mono font-bold text-stone-900 text-xs">{activeOrder.orderId}</span>
              </div>
            </div>

            {/* Delivery Destination */}
            <div className="text-xs space-y-1.5 p-3.5 bg-stone-50 rounded-xl border border-stone-200">
              <div className="flex items-center gap-1.5 text-stone-500 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#c99a45]" />
                <span>Delivery Address</span>
              </div>
              <p className="font-semibold text-stone-900">
                {activeOrder.customer.addressLine1}
                {activeOrder.customer.addressLine2 ? `, ${activeOrder.customer.addressLine2}` : ''}
              </p>
              <p className="text-stone-600">
                {activeOrder.customer.city}, {activeOrder.customer.state} - {activeOrder.customer.pincode}
              </p>
              <p className="text-stone-600">
                Phone: <strong>{activeOrder.customer.phoneNumber}</strong> · Payment: <strong className="uppercase">{activeOrder.customer.paymentMethod}</strong>
              </p>
            </div>

            {/* Items Summary */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-600">
                Remedy Package Contents
              </h4>
              <div className="divide-y divide-stone-100 text-xs">
                {activeOrder.items.map(item => (
                  <div key={item.product.id} className="py-2.5 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-stone-900">{item.product.name}</span>
                      <span className="text-stone-500 block text-[11px]">
                        {item.product.weightOrQuantity} × {item.quantity}
                      </span>
                    </div>
                    <span className="font-semibold text-stone-900 tabular-nums">
                      ₹{item.product.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-stone-200 space-y-1 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="tabular-nums">₹{activeOrder.subtotal}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Shipping</span>
                  <span>{activeOrder.shipping === 0 ? 'FREE' : `₹${activeOrder.shipping}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-stone-950 pt-2 border-t border-stone-100">
                  <span>Total Amount Paid / Due on Delivery</span>
                  <span className="tabular-nums">₹{activeOrder.total}</span>
                </div>
              </div>
            </div>

            {/* Next Steps Card */}
            <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-950 space-y-1">
              <strong className="block font-semibold">What happens next?</strong>
              <p className="text-stone-700 leading-relaxed text-[11px]">
                Your package is being hand-packed at our Surat dispensary with authentic batch seals. You will receive an SMS and WhatsApp tracking update from Amrutkalp as soon as the courier scans the parcel.
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleWhatsAppHelp}
                className="w-full sm:flex-1 py-2.5 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 text-xs shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Track via WhatsApp (+91 {BRAND.phone})</span>
              </button>

              <button
                onClick={handlePrint}
                className="w-full sm:w-auto py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 text-xs cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Receipt</span>
              </button>

              <button
                onClick={() => setActiveOrder(null)}
                className="w-full sm:w-auto py-2.5 px-4 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors text-xs cursor-pointer"
              >
                Done
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
