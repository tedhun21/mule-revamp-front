import { styled } from "styled-components";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	padding: 10px;
	gap: 10px;
`;

const Top = styled.section`
	display: flex;
	justify-content: center;
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

export const MainPage = styled.main`
	width: 90%;
	height: 100%;
	border-radius: 30px 0px 0px 0px;
	background: rgba(255, 255, 255, 0.8);
	box-shadow: -4px 0px 20px 0px rgba(0, 0, 0, 0.3);
	overflow-y: scroll;
	padding-left: 20px;

	&::-webkit-scrollbar {
		display: none;
	}
`;
const Home = () => {
	const [carouselItems, setCarouselItems] = useState([]);

	useEffect(() => {
		Promise.all([
			fetch("http://localhost:3001/market").then((res) => res.json())
		])
			.then(([marketData]) => {
				const carouselData = marketData.marketItems;
				setCarouselItems(carouselData);
			})
			.catch((error) => {
				console.error("Error fetching carousel items:", error);
			});
	}, []);

	return (
		<MainPage>
			<Container>
				<Top>
					<RecentBlock>1</RecentBlock>
					<RecentBlock>2</RecentBlock>
					<Adver></Adver>
				</Top>
				<Bottom>
					{carouselItems.length > 0 ? (
						<>
							<Carousel items={carouselItems} />
						</>
					) : (
						<div>Loading...</div>
					)}
				</Bottom>
			</Container>
		</MainPage>
	);
};

export default Home;
