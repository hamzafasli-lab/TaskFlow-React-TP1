import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// Import your new AuthProvider [cite: 93]
import { AuthProvider } from './features/auth/AuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Wrap App here [cite: 97, 98] */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);