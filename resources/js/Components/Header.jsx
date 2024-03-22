import "../../css/Header.css"
import {usePage} from "@inertiajs/react";
import {route} from "ziggy-js";

const Header = () => {
    const currentPath = window.location.pathname;
    return (
        <div className="header">
            <a href={route('main.index')} className="px16 bold">Vladislav P.</a>
            <div className="header-right">
                <ul>
                    <li>
                        <a className={`px16 ${currentPath === "/" ? 'bold' : ''}`} href={route('main.index')}><span className="purple">#</span>home</a>
                    </li>
                    <li>
                        <a className={`px16 ${currentPath === "/projects" ? 'bold' : ''}`} href=""><span className="purple">#</span>projects</a>
                    </li>
                    <li>
                        <a className={`px16 ${currentPath === "/about" ? 'bold' : ''}`} href=""><span className="purple">#</span>about-me</a>
                    </li>
                    <li>
                        <a className={`px16 ${currentPath === "/contacts" ? 'bold' : ''}`} href=""><span className="purple">#</span>contacts</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
