import "../../css/MainHero.css"
import {route} from "ziggy-js";
import {Link} from "@inertiajs/react";

const MainHero = () => {
    return (
        <div className="main-hero">
            <div className="main-hero_left">
                <h1 className="px32">
                    Vladislav is a <span className="purple">full-stack developer</span>
                </h1>
                <p className="px16 gray">
                    He crafts responsive websites where technologies meet creativity
                </p>
                <Link href={route('contacts.index')} style={{width: "max-content"}}>
                    <button className="px16">
                        Contact me
                    </button>
                </Link>
            </div>
            <div className="main-hero_right">
                <div className="main-hero_right-img">

                </div>
                <div className="main-hero_right-footer">
                    <span className="main-hero_right-footer_square"/>
                    <p className="px16 gray">Currently working at <span className="white bold">DBB Software</span></p>
                </div>
            </div>
        </div>
    );
};

export default MainHero;
