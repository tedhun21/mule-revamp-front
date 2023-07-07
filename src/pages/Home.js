import { styled } from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 10px;
    gap: 10px;
`

const Top = styled.section`
	display: flex;
    justify-content:center;
    gap: 3%;
    padding: 30px 0px;
    height: 40%;
    max-width: 1500px;
    min-height: 240px;
`;

const Bottom = styled(Top)`
	height: 50%;
`;

const RecentBlock = styled.article`
	display: flex;
	padding: 40px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 20px;
	width: 31%;
    height: 100%;
	border-radius: 30px;
	background: linear-gradient(345deg, #c13fad 0%, #e81b4c 100%);
	box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.4);
`;

const Adver = styled.div`
	border-radius: 30px;
	box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.4);
	width: 26%;
    background-color: aqua;
`;

const CarouselContainer = styled.article`
	display: inline-flex;
	padding: 20px;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	border-radius: 30px;
	background: rgba(255, 255, 255, 0.4);
	box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
	width: 45%;
	height: 100%;
`;

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
    return (
			<MainPage>
				<Container>
					<Top>
						<RecentBlock>1</RecentBlock>
						<RecentBlock>2</RecentBlock>
						<Adver>광고</Adver>
					</Top>
					<Bottom>
						<CarouselContainer>4</CarouselContainer>
						<CarouselContainer>5</CarouselContainer>
					</Bottom>
				</Container>
			</MainPage>
		);
}

export default Home;