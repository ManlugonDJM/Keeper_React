import React from "react";

const Footer = () => {
    let date = new Date();
    return (
        <footer>
            <p>Copyright &copy; {date.getFullYear()}</p>
        </footer>

    );
}

export default Footer;