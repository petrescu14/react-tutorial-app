import React from 'react';
import { createRoot } from 'react-dom/client';
import Game from './Component/Game';
import './index.css';




// ========================================

const container = document.getElementById("root")
if (container) {
  const root = createRoot(container)
  root.render(<Game />)
}


