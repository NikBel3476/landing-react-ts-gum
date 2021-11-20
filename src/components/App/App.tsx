import React from 'react';

import Intro from "../Intro";
import CookieNotice from "../CookieNotice";
import ShoppingPanel from "../ShoppingPanel";
import EnergyAndFocus from "../EnergyAndFocus";
import CalmAndClarity from "../CalmAndClarity";
import IdealState from "../IdealState";
import Subscribe from "../Subscribe";
import OurMission from "../OurMission";
import Science from "../Science/Science";
import Prefooter from "../Prefooter";

import '../../styles/fonts.css';
import '../../styles/common.css';

function App() {
  return (
    <div>
        <Intro />
        <CookieNotice />
        <ShoppingPanel />
        <EnergyAndFocus />
        <CalmAndClarity />
        <IdealState />
        <Subscribe />
        <OurMission />
        <Science />
        <Prefooter />
    </div>
  );
}

export default App;
