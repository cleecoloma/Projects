import { Container } from "react-bootstrap";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        <p>Ecommerce Website</p>
        <p>ⓒ Copyright {year}</p>
      </div>
    </footer>
  );
}

export default Footer;
