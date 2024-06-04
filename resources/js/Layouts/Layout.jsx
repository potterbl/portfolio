import Container from "@/Layouts/Container.jsx";
import Header from "@/Components/Header.jsx";
import ContactsLine from "@/Components/ContactsLine.jsx";
import "../../css/Layout.css"

const Layout = ({children}) => {
    const currentPath = window.location.pathname;
    return (
        <Container>
            <ContactsLine/>
            <Header/>
            <main className="main-layout">
                <h1 className="px32 bold"><span className="purple">/</span>{currentPath.substring(1, currentPath.length)}</h1>
                {children}
            </main>
            <footer>

            </footer>
        </Container>
    );
};

export default Layout;
