import { styled } from "styled-components"

export const MainPage = styled.main`
    width: 90%;
    height: 100%;
    border-radius: 30px 0px 0px 0px;
    background: rgba(255, 255, 255, 0.80);
    box-shadow: -4px 0px 20px 0px rgba(0, 0, 0, 0.30);
    overflow-y: scroll;
    padding-left: 20px;

    &::-webkit-scrollbar {
        display: none;
    }
`
const Home = () => {
    return <MainPage>Hi</MainPage>
}

export default Home;