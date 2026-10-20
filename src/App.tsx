import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { SourceCodeModal } from './components/SourceCodeModal';
import { ErrorBoundary } from './components/ErrorBoundary';

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

const VALID_TABS = [
  'home',
  'shop',
  'product-detail',
  'authenticity',
  'ingredients',
  'about',
  'journal',
  'contact',
  'policies',
];

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>(null);
  const [isSourceModalOpen, setIsSourceModalOpen] = useState<boolean>(false);

  // Sync with browser URL hash for friendly navigation and back button support
  useEffect(() => {
    const handleHashChange = () => {
      try {
        const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
        
        if (!rawHash) {
          setCurrentTab('home');
          setSelectedProductSlug(null);
          return;
        }

        if (rawHash.startsWith('product/')) {
          const slug = rawHash.replace('product/', '').trim();
          const found = GET_PRODUCT_BY_SLUG(slug);
          if (found) {
            setSelectedProductSlug(found.slug);
            setCurrentTab('product-detail');
          } else {
            // Fallback to shop if product slug is unknown
            setSelectedProductSlug(null);
            setCurrentTab('shop');
          }
          return;
        }

        if (VALID_TABS.includes(rawHash)) {
          setCurrentTab(rawHash);
          setSelectedProductSlug(null);
        } else {
          // Unknown tab or anchor link - default gracefully to home
          setCurrentTab('home');
          setSelectedProductSlug(null);
        }
      } catch (err) {
        console.error('Error handling URL hash change:', err);
        setCurrentTab('home');
        setSelectedProductSlug(null);
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProduct = (slug: string) => {
    const prod = GET_PRODUCT_BY_SLUG(slug);
    if (prod) {
      setSelectedProductSlug(prod.slug);
      setCurrentTab('product-detail');
      window.location.hash = `product/${prod.slug}`;
    } else {
      setCurrentTab('shop');
      window.location.hash = 'shop';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSetTab = (tab: string) => {
    const targetTab = VALID_TABS.includes(tab) ? tab : 'home';
    setCurrentTab(targetTab);
    setSelectedProductSlug(null);
    window.location.hash = targetTab === 'home' ? '' : targetTab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeProduct = selectedProductSlug ? GET_PRODUCT_BY_SLUG(selectedProductSlug) : null;

  return (
    <ErrorBoundary>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-[#fbfaf7] text-stone-900 selection:bg-amber-100 selection:text-amber-950">
          
          {/* Persistent Top Navigation Bar */}
          <Header
            currentTab={currentTab}
            setCurrentTab={handleSetTab}
            onSelectProduct={handleSelectProduct}
          />

          {/* Dynamic Multi-Page Router View with guaranteed default fallback */}
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

            {currentTab === 'product-detail' && (
              activeProduct ? (
                <ProductDetailPage
                  product={activeProduct}
                  onBackToShop={() => handleSetTab('shop')}
                  onSelectProduct={handleSelectProduct}
                />
              ) : (
                <ShopPage
                  onSelectProduct={handleSelectProduct}
                />
              )
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

            {/* Fallback if currentTab is somehow unmatched */}
            {!VALID_TABS.includes(currentTab) && (
              <HomePage
                setCurrentTab={handleSetTab}
                onSelectProduct={handleSelectProduct}
              />
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
    </ErrorBoundary>
  );
}
