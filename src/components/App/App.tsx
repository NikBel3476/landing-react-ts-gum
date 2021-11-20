import React from 'react';

import Intro from "../Intro";
import CookieNotice from "../CookieNotice";
import ShoppingPanel from "../ShoppingPanel";
import EnergyAndFocus from "../EnergyAndFocusComponent";

import '../../styles/fonts.css';
import '../../styles/common.css';

function App() {
  return (
    <div>
        <Intro />
        <CookieNotice />
        <ShoppingPanel />
        <EnergyAndFocus />
    </div>
  );
}

export default App;
