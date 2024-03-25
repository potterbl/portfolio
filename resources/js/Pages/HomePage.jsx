import MainHero from "@/Components/MainHero.jsx";
import LayoutToMain from "@/Layouts/LayoutToMain.jsx";
import Container from "@/Layouts/Container.jsx";
import QuoteBlock from "@/Components/QuoteBlock.jsx";

import bg from "../../images/bg.webp"
import RecentProjects from "@/Components/RecentProjects.jsx";
import SkillsBlock from "@/Components/SkillsBlock.jsx";

const HomePage = () => {
    return (
        <LayoutToMain>
            <Container>
                <MainHero/>
            </Container>
            <Container backgroundImage={bg}>
                <QuoteBlock/>
                <RecentProjects/>
                <SkillsBlock/>
            </Container>
        </LayoutToMain>
    );
};

export default HomePage;
