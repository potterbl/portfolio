import "../../css/ContactsLine.css"
import {useEffect, useMemo, useState} from "react";

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
        <div className="contacts-line" style={{left: -offsetLeftValue - 16}}>
            <span className="contact_line"></span>
            <a href="">
                <img src={github} alt="github link" className="contacts-line_img"/>
            </a>
            <a href="">
                <img src={linkedin} alt="linkedin link" className="contacts-line_img"/>
            </a>
            <a href="">
                <img src={email} alt="email link" className="contacts-line_img"/>
            </a>
            <a href="">
                <img src={discord} alt="discord link" className="contacts-line_img"/>
            </a>
        </div>
    );
};

export default ContactsLine;
