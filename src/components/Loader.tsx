import { useState, useEffect } from 'react';

interface LoaderState {
  isVisible: boolean;
  message?: string;
}

let loaderState: LoaderState = { isVisible: false };
let listeners: ((state: LoaderState) => void)[] = [];

const notifyListeners = () => {
  listeners.forEach(listener => listener({ ...loaderState }));
};

export const showLoader = (message?: string) => {
  loaderState = { isVisible: true, message };
  notifyListeners();
};

export const hideLoader = () => {
  loaderState = { isVisible: false };
  notifyListeners();
};

const Loader = () => {
  const [state, setState] = useState<LoaderState>({ isVisible: false });

  useEffect(() => {
    const listener = (newState: LoaderState) => {
      setState(newState);
    };

    listeners.push(listener);

    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);

  if (!state.isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm flex items-center justify-center animate-fade-in">
      <div className="bg-white rounded-2xl p-8 max-w-sm mx-4 text-center shadow-strong">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {state.message || 'Loading...'}
        </h3>
        <p className="text-sm text-gray-500">
          Please wait while we process your request
        </p>
      </div>
    </div>
  );
};

export default Loader;