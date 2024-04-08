import React from 'react';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <p>Copyright <span>&#169;</span> Chukwuemeke {year}</p>
    </footer>
  );
}

export default Footer;