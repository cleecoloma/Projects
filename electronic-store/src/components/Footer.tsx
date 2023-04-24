import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="text-light">Copyright ⓒ Chester Lee Coloma {year}</p>
    </footer>
  );
}

export default Footer;
