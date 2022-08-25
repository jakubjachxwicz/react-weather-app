import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";



function App() {
    return (
        <main>
            <Header />
            <Navbar />
            <MainWrapper>
                <BrowserRouter>
                    <Pages />
                </BrowserRouter>
            </MainWrapper>
        </main>
    );
}


const MainWrapper = styled.div`
    width: 60%;
    margin: 5rem auto;

    @media (max-width: 1007px) 
    {
        width: 90%;
        margin-top: 1rem;    
    }
`;

export default App;