import "../../css/Header.css"
import {Link, usePage} from "@inertiajs/react";
import {route} from "ziggy-js";
import {useEffect, useState} from "react";

const Header = () => {
    const currentPath = window.location.pathname;

    const [offsetLeftValue, setOffsetLeftValue] = useState(0);

    useEffect(() => {
        const updateOffsetLeft = () => {
            const container = document.querySelector('.container');
            if (container) {
                const newOffsetLeftValue = container.getBoundingClientRect().left;
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
        <header className="header" style={{left: offsetLeftValue}}>
            <Link href={route('main.index')} className="px16 bold">Vladislav P.</Link>
            <div className="header-right">
                <ul>
                    <li>
                        <Link className={`px16 ${currentPath === "/" ? 'bold' : ''}`} href={route('main.index')}><span className="purple">#</span>home</Link>
                    </li>
                    <li>
                        <Link className={`px16 ${currentPath === "/projects" ? 'bold' : ''}`} href=""><span className="purple">#</span>projects</Link>
                    </li>
                    <li>
                        <Link className={`px16 ${currentPath === "/about" ? 'bold' : ''}`} href=""><span className="purple">#</span>about-me</Link>
                    </li>
                    <li>
                        <Link className={`px16 ${currentPath === "/contacts" ? 'bold' : ''}`} href={route('contacts.index')}><span className="purple">#</span>contacts</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
