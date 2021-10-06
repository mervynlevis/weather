import React from "react";
// import brandLogo from "../images/branding copy.png";
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

function Nav() {
  
  return (
    <div data-testid="Nav" className="Nav">
      <nav>
        {/* <a href="/" alt="home link"><img className="brandLogo" src={brandLogo} alt="brand logo" /></a> */}
        <a href="/" alt="home link" className="brandLogo"><BeachAccessIcon /></a>
      </nav>
    </div>
  );
}

export default Nav;
