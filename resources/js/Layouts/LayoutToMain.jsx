import Container from "@/Layouts/Container.jsx";
import Header from "@/Components/Header.jsx";
import ContactsLine from "@/Components/ContactsLine.jsx";

const Layout = ({children}) => {
    return (
        <>
                <ContactsLine/>
                <Header/>
            <main className="main">
                {children}
            </main>
            <Container>
                <footer>

                </footer>
            </Container>
        </>
    );
};

export default Layout;
