import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer id="footer">
            <p>Copyright ⓒ Chester Lee Coloma {year}</p>
        </footer>
    );
}

export default Footer;