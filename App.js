import React from 'react';

export default function App() {
  return (
    <div style={{ fontFamily:'Arial', padding:20 }}>
      <h1>Résidence Meriem 1</h1>
      <p>Bienvenue dans l'application de gestion de copropriété.</p>
      <button onClick={()=>alert('Demo activé !')}>Connexion demo</button>
    </div>
  );
}
