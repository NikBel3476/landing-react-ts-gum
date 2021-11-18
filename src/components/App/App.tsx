import React from 'react';

import Intro from "../Intro";
import CookieNotice from "../CookieNotice";
import ShoppingPanel from "../ShoppingPanel";

import '../../styles/fonts.css';
import '../../styles/common.css';

function App() {
  return (
    <div>
        <Intro />
        <CookieNotice />
        <ShoppingPanel />
    </div>
  );
}

export default App;
