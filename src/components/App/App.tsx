import React from 'react';

import Intro from "../Intro";

import '../../styles/fonts.css';
import '../../styles/common.css';
import CookieNotice from "../CookieNotice";

function App() {
  return (
    <div>
        <Intro />
        <CookieNotice />
    </div>
  );
}

export default App;
