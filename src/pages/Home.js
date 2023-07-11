import { styled } from "styled-components";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import RecentBlock from "../components/RecentBlock";
import axios from "axios";

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
	justify-content: space-around;
	gap: 30px;
	padding: 30px 0px;
	height: 40%;
	max-width: 1500px;
	min-height: 240px;
	overflow: hidden;
`;

const Bottom = styled(Top)`
	height: 50%;
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
	const [marketItems, setMarketItems] = useState([]);
	const [noticeItems, setNoticeItems] = useState([]);
	const [newsItems, setNewsItems] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3001/market")
			.then((res) => setMarketItems(res.data.marketItems));
		axios
			.get("http://localhost:3001/notice")
			.then((res) => setNoticeItems(res.data.noticeItems));
		axios
			.get("http://localhost:3001/news")
			.then((res) => setNewsItems(res.data.newsItems));
	}, []);

	return (
		<MainPage>
			<Container>
				<Top>
					<RecentBlock items={noticeItems} isNotice={true}/>
					<RecentBlock items={newsItems} isNotice={false}/>
					<Adver></Adver>
				</Top>
				<Bottom>
					{marketItems.length > 0 ? (
						<>
							<Carousel items={marketItems} />
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
