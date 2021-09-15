import React from "react";
import brandLogo from "../images/branding copy.png";

function Nav() {
  
  return (
    <div data-testid="Nav" className="Nav">
      <nav>
        <a href="/" alt="home link"><img className="brandLogo" src={brandLogo} alt="brand logo" /></a>

      </nav>
    </div>
  );
}

export default Nav;
