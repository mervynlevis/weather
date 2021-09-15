import React from "react";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div data-testid="Footer" className="footer">
      <p>Mervyn Levis {year} </p>
    </div>
  );
}

export default Footer;
