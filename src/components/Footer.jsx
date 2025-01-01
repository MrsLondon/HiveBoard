import "../style/Footer.css";

import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                <a
                    href="https://github.com/MrsLondon/HiveBoard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                >
                    <FaGithub className="icon" /> GitHub Repositry 
                </a>
            </p>
        </footer>
    );
};


export default Footer;