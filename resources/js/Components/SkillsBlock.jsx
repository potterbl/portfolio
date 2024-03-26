import "../../css/SkillsBlock.css"
import img from "../../images/skills_img.webp"

const SkillsBlock = () => {
    return (
        <div className="skills-block">
            <div className="skills-block_head">
                <h2 className="px32 bold"><span className="purple">#</span>skills</h2>
                <hr className="skills-block_head-hr"/>
            </div>
            <div className="skills-block_body">
                <img src={img} alt="skills image" className="skills-block_body-img"/>
                <div className="skills-block_body-content">
                    <div className="skills-block_item">
                        <div className="skills-block_item-head">
                            <h3 className="px16 bold">Languages</h3>
                        </div>
                        <div className="skills-block_item-body">

                        </div>
                    </div>
                    <div className="skills-block_item">
                        <div className="skills-block_item-head">
                            <h3 className="px16 bold">Databases</h3>
                        </div>
                        <div className="skills-block_item-body">

                        </div>
                    </div>
                    <div className="skills-block_item">
                        <div className="skills-block_item-head">
                            <h3 className="px16 bold">Tools</h3>
                        </div>
                        <div className="skills-block_item-body">

                        </div>
                    </div>
                    <div className="skills-block_item">
                        <div className="skills-block_item-head">
                            <h3 className="px16 bold">Frameworks</h3>
                        </div>
                        <div className="skills-block_item-body">

                        </div>
                    </div>
                    <div className="skills-block_item">
                        <div className="skills-block_item-head">
                            <h3 className="px16 bold">Other</h3>
                        </div>
                        <div className="skills-block_item-body">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsBlock;
