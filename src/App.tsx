import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { SourceCodeModal } from './components/SourceCodeModal';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AuthenticityPage } from './pages/AuthenticityPage';
import { IngredientsPage } from './pages/IngredientsPage';
import { AboutPage } from './pages/AboutPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';
import { PoliciesPage } from './pages/PoliciesPage';

import { PRODUCTS, GET_PRODUCT_BY_SLUG } from './data/products';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>(null);
  const [isSourceModalOpen, setIsSourceModalOpen] = useState<boolean>(false);

  // Sync with browser URL hash for friendly navigation and back button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('product/')) {
        const slug = hash.replace('product/', '');
        setSelectedProductSlug(slug);
        setCurrentTab('product-detail');
      } else if (hash) {
        setCurrentTab(hash);
        setSelectedProductSlug(null);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProduct = (slug: string) => {
    setSelectedProductSlug(slug);
    setCurrentTab('product-detail');
    window.location.hash = `product/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSetTab = (tab: string) => {
    setCurrentTab(tab);
    setSelectedProductSlug(null);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeProduct = selectedProductSlug ? GET_PRODUCT_BY_SLUG(selectedProductSlug) : null;

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#fbfaf7] text-stone-900 selection:bg-amber-100 selection:text-amber-950">
        
        {/* Persistent Top Navigation Bar */}
        <Header
          currentTab={currentTab}
          setCurrentTab={handleSetTab}
          onSelectProduct={handleSelectProduct}
        />

        {/* Dynamic Multi-Page Router View */}
        <main className="flex-1">
          {currentTab === 'home' && (
            <HomePage
              setCurrentTab={handleSetTab}
              onSelectProduct={handleSelectProduct}
            />
          )}

          {currentTab === 'shop' && (
            <ShopPage
              onSelectProduct={handleSelectProduct}
            />
          )}

          {currentTab === 'product-detail' && activeProduct && (
            <ProductDetailPage
              product={activeProduct}
              onBackToShop={() => handleSetTab('shop')}
              onSelectProduct={handleSelectProduct}
            />
          )}

          {currentTab === 'authenticity' && (
            <AuthenticityPage
              onGoToShop={() => handleSetTab('shop')}
            />
          )}

          {currentTab === 'ingredients' && (
            <IngredientsPage
              onGoToShop={() => handleSetTab('shop')}
            />
          )}

          {currentTab === 'about' && (
            <AboutPage
              onGoToShop={() => handleSetTab('shop')}
              onGoToContact={() => handleSetTab('contact')}
            />
          )}

          {currentTab === 'journal' && (
            <JournalPage
              onSelectProduct={handleSelectProduct}
            />
          )}

          {currentTab === 'contact' && (
            <ContactPage />
          )}

          {currentTab === 'policies' && (
            <PoliciesPage />
          )}
        </main>

        {/* Persistent Footer */}
        <Footer
          setCurrentTab={handleSetTab}
          onSelectProduct={handleSelectProduct}
          onOpenSourceModal={() => setIsSourceModalOpen(true)}
        />

        {/* Global Modals & Float Elements */}
        <CartDrawer />
        <CheckoutModal />
        <OrderConfirmationModal />
        <WhatsAppFloat />
        <SourceCodeModal
          isOpen={isSourceModalOpen}
          onClose={() => setIsSourceModalOpen(false)}
        />

      </div>
    </CartProvider>
  );
}
