import MainHero from "@/Components/MainHero.jsx";
import LayoutToMain from "@/Layouts/LayoutToMain.jsx";
import Container from "@/Layouts/Container.jsx";
import QuoteBlock from "@/Components/QuoteBlock.jsx";

import bg from "../../images/bg.webp"
import RecentProjects from "@/Components/RecentProjects.jsx";
import SkillsBlock from "@/Components/SkillsBlock.jsx";
import AboutMeBlock from "@/Components/AboutMeBlock.jsx";
import ContactsBlock from "@/Components/ContactsBlock.jsx";

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
                <AboutMeBlock/>
                <ContactsBlock/>
            </Container>
        </LayoutToMain>
    );
};

export default HomePage;
