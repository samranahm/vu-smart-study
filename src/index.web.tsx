import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Web-specific rendering (for React Native Web)
const rootTag = document.getElementById('app-root');
if (rootTag) {
  const root = createRoot(rootTag);
  root.render(<App />);
}
