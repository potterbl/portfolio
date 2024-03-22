import MainHero from "@/Components/MainHero.jsx";
import LayoutToMain from "@/Layouts/LayoutToMain.jsx";
import Container from "@/Layouts/Container.jsx";

const HomePage = () => {
    return (
        <LayoutToMain>
            <Container>
                <MainHero/>
            </Container>
            <Container>

            </Container>
        </LayoutToMain>
    );
};

export default HomePage;
