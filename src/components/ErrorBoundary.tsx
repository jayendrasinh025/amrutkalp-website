import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ShieldAlert, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in AMRUTKALP application:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.hash = '';
    window.location.reload();
  };

  private handleReset = () => {
    try {
      localStorage.removeItem('amrutkalp_cart_v1');
    } catch {
      // ignore
    }
    window.location.hash = '';
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#fbfaf7] text-stone-900 flex items-center justify-center p-6 font-sans">
          <div className="max-w-lg w-full bg-white rounded-2xl border border-stone-200 p-8 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center mx-auto border border-amber-200">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#c99a45] font-semibold">
                AMRUTKALP Pure Ayurvedic Herbals
              </span>
              <h1 className="text-2xl font-serif font-bold text-stone-900">
                Application Recovered
              </h1>
              <p className="text-sm text-stone-600 leading-relaxed">
                The page encountered an unexpected rendering issue. You can safely return to the home page or reload the store.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#111915] text-amber-100 font-semibold text-sm hover:bg-stone-800 transition-colors cursor-pointer shadow-xs"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Application</span>
              </button>

              <button
                onClick={this.handleReset}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 font-semibold text-sm transition-colors cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Clear Cache & Restart</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
