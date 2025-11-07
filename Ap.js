import React, { useState } from 'react';

export default function App() {
  const [view, setView] = useState('dashboard');

  const navButtons = [
    { key:'dashboard', label:'🏠 Dashboard' },
    { key:'buildings', label:'🏢 Immeubles' },
    { key:'lots', label:'🏠 Lots' },
    { key:'tickets', label:'📝 Tickets' }
  ];

  const buttonStyle = {
    marginRight:10,
    padding:'10px 18px',
    background:'#1e63b6',
    color:'white',
    border:'none',
    borderRadius:6,
    cursor:'pointer',
    fontSize:15,
    transition:'all 0.2s'
  };

  const buttonHover = {
    transform:'scale(1.05)',
    boxShadow:'0 2px 6px rgba(0,0,0,0.2)'
  };

  const headerStyle = {
    display:'flex',
    alignItems:'center',
    background:'#1e63b6',
    color:'white',
    padding:16,
    boxShadow:'0 3px 6px rgba(0,0,0,0.2)'
  };

  const logoStyle = {
    width:60,
    height:60,
    marginRight:14
  };

  const sectionStyle = {
    padding:25,
    background:'#f9f9f9',
    borderRadius:8,
    marginTop:12,
    boxShadow:'0 1px 4px rgba(0,0,0,0.1)',
    transition:'all 0.2s'
  };

  return (
    <div style={{ fontFamily:'Arial', minHeight:'100vh', background:'#e7f0ff' }}>

      {/* Header */}
      <header style={headerStyle}>
        <svg style={logoStyle} viewBox="0 0 150 50" xmlns="http://www.w3.org/2000/svg">
          <rect width="150" height="50" fill="white"/>
          <text x="75" y="32" fontSize="18" textAnchor="middle" fill="#1e63b6" fontFamily="Arial">RM1</text>
        </svg>
        <h1 style={{ margin:0, fontSize:26 }}>Résidence Meriem 1</h1>
      </header>

      <div style={{ maxWidth:900, margin:'20px auto', padding:10 }}>

        {/* Navigation */}
        <nav style={{ marginBottom:20 }}>
          {navButtons.map(btn => (
            <button 
              key={btn.key} 
              style={buttonStyle} 
              onClick={()=>setView(btn.key)}
              onMouseOver={e => Object.assign(e.target.style, buttonHover)}
              onMouseOut={e => Object.assign(e.target.style, buttonStyle)}
            >
              {btn.label}
            </button>
          ))}
        </nav>

        {/* Sections */}
        {view === 'dashboard' && (
          <section style={sectionStyle}>
            <h2>Bienvenue dans Résidence Meriem 1</h2>
            <p>Appuyez sur le bouton ci-dessous pour tester le compte demo.</p>
            <button 
              style={buttonStyle} 
              onClick={()=>alert('Compte demo activé !')}
              onMouseOver={e => Object.assign(e.target.style, buttonHover)}
              onMouseOut={e => Object.assign(e.target.style, buttonStyle)}
            >
              Connexion demo
            </button>
          </section>
        )}

        {view === 'buildings' && (
          <section style={sectionStyle}>
            <h2>Immeubles</h2>
            <p>Liste des immeubles (démo).</p>
          </section>
        )}

        {view === 'lots' && (
          <section style={sectionStyle}>
            <h2>Lots</h2>
            <p>Liste des lots (démo).</p>
          </section>
        )}

        {view === 'tickets' && (
          <section style={sectionStyle}>
            <h2>Tickets</h2>
            <p>Liste des tickets (démo).</p>
          </section>
        )}

      </div>
    </div>
  );
}
