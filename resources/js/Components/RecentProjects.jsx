import "../../css/RecentProjects.css"
import {route} from "ziggy-js";
const RecentProjects = () => {
    return (
        <div className="recent-projects">
            <div className="recent-projects_head">
                <div className="recent-projects_head-left">
                    <p className="px32 bold"><span className="purple">#</span>projects</p>
                    <hr className="recent-projects_head-left_hr"/>
                </div>
                <a href={route('projects.index')} className="px16">
                View all ~~&gt;
                </a>
            </div>
            <div className="recent-projects_body">
                <div className="recent-project_item">
                    <div className="recent-project_item-head">

                    </div>
                    <div className="recent-project_item-body">

                    </div>
                    <div className="recent-project_item-footer">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentProjects;
