import React from 'react';
import './App.css'; // Import your CSS file
import uniswapLogo from './uniswap-logo.png'; // Import the Uniswap logo image
import { Swap } from '@swing.xyz/ui';
import '@swing.xyz/ui/theme.css';
import Navbar from './NavBar'; // Assuming Navbar component file is in the same directory


/**
 * Renders the main application component.
 * @returns {JSX.Element} The main application component.
 */
/**
 * Renders the main application component.
 * @returns {JSX.Element} The main application component.
 */
function App() {
  return (
    <div className="">
    <div className="App">
      
      <header className="App-header">
      <Navbar />
      </header>
      <main className="main-boby">
      
        <Swap projectId="allen-joseph" />

        
      </main>
      </div>
    </div>
  );
}

export default App;
