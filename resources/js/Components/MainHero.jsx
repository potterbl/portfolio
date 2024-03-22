import "../../css/MainHero.css"
import {route} from "ziggy-js";

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
                <a href={route('contacts.index')} style={{width: "max-content"}}>
                    <button className="px16">
                        Contact me
                    </button>
                </a>
            </div>
            <div className="main-hero_right">

            </div>
        </div>
    );
};

export default MainHero;
