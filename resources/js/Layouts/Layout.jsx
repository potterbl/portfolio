import Container from "@/Layouts/Container.jsx";
import Header from "@/Components/Header.jsx";
import ContactsLine from "@/Components/ContactsLine.jsx";

const Layout = ({children}) => {
    return (
        <Container>
            <ContactsLine/>
            <Header/>
            <main className="main">
                {children}
            </main>
            <footer>

            </footer>
        </Container>
    );
};

export default Layout;
