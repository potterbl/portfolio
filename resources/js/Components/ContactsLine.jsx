import "../../css/ContactsLine.css"
import {useEffect, useState} from "react";

import github from "../../images/github.webp"
import linkedin from "../../images/linkedin.webp"
import email from "../../images/email.webp"
import discord from "../../images/discord.webp"

const ContactsLine = () => {
    const [offsetLeftValue, setOffsetLeftValue] = useState(0);

    useEffect(() => {
        const updateOffsetLeft = () => {
            const container = document.querySelector('.container');
            if (container) {
                const newOffsetLeftValue = container.getBoundingClientRect().left / 2;
                setOffsetLeftValue(newOffsetLeftValue);
            }
        };

        updateOffsetLeft();

        window.addEventListener('resize', updateOffsetLeft);

        return () => {
            window.removeEventListener('resize', updateOffsetLeft);
        };
    }, []);

    return (
        <div className="contacts-line" style={{left: offsetLeftValue - 16}}>
            <span className="contact_line"></span>
            <a href="https://github.com/potterbl">
                <img src={github} alt="github link" width="32" height="32" title="github link" fetchPriority="high" loading="eager" className="contacts-line_img"/>
            </a>
            <a href="https://www.linkedin.com/in/potterbl/">
                <img src={linkedin} alt="linkedin link" width="32" height="32" title="linkedin link" fetchPriority="high" loading="eager" className="contacts-line_img"/>
            </a>
            <a href="mailto:zeexamplegtp@gmail.com">
                <img src={email} alt="email link" width="32" height="32" title="email link" fetchPriority="high" loading="eager" className="contacts-line_img"/>
            </a>
            <a href="https://discordapp.com/users/406371638339174402">
                <img src={discord} alt="discord link" width="32" height="32" title="discord link" fetchPriority="high" loading="eager" className="contacts-line_img"/>
            </a>
        </div>
    );
};

export default ContactsLine;
