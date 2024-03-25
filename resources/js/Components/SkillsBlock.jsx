import "../../css/SkillsBlock.css"
import img from "../../images/skills_img.webp"

const SkillsBlock = () => {
    return (
        <div className="skills-block">
            <div className="skills-block_head">
                <p className="px32 bold"><span className="purple">#</span>skills</p>
                <hr className="skills-block_head-hr"/>
            </div>
            <div className="skills-block_body">
                <img src={img} alt="skills image" className="skills-block_body-img"/>
                <div className="skills-block_body-content">

                </div>
            </div>
        </div>
    );
};

export default SkillsBlock;
