import "../../css/AboutMeBlock.css"
const AboutMeBlock = () => {
    return (
        <div className="about-me">
            <div className="about-me_head">
                <h2 className="px32 bold"><span className="purple">#</span>about-me</h2>
                <hr className="about-me_head-hr"/>
            </div>
            <div className="about-me_body">
                <p className="px16 gray">
                    Hello, I'm Vlad!
                    <br/><br/>
                    As a developer, I constantly strive to improve my skills and stay updated with the latest technologies and industry practices. I believe in a collaborative approach to development and am confident that I can contribute to your team's success and help achieve its goals.
                    <br/><br/>
                    I am particularly interested in joining your company, as I recognize it as one of the industry leaders. It would be an honor to work alongside the talented team and contribute to its continued success.
                </p>
            </div>
        </div>
    );
};

export default AboutMeBlock;
