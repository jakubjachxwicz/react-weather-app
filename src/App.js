import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Pages from "./pages/Pages";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";



function App() {
    return (
        <main style={mainStyle}>
            <PageWrapper>
                <Header />
                <MainWrapper>
                    <BrowserRouter>
                        <Navbar />
                        <Pages />
                    </BrowserRouter>
                </MainWrapper>
            </PageWrapper>
            <Footer />
        </main>
    );
}


const mainStyle = {
    display: "flex",
    flexDirection: "column",
    // width: "100vw",
    minHeight: "100%"
};


const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
`;

const MainWrapper = styled.div`
    width: 60%;
    margin: 5rem auto;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 1007px) 
    {
        width: 90%;
        flex-direction: column;
        margin-top: 1rem; 
    }

    @media (min-width: 1141px)
    {
        width: 40%;
    }
`;

export default App;