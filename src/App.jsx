import React from 'react';
import LandingPage from './LandingPage';

// Importação corrigida para o tema existente na versão 9.6.3
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css';                  
import 'primeicons/primeicons.css';                                
import 'primeflex/primeflex.css';                                  

function App() {
  return (
    <div className="app-container">
      <LandingPage />
    </div>
  );
}

export default App;