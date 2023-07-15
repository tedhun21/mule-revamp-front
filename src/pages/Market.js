import { styled } from "styled-components";
import { MainPage } from "./Home";
import { useState, useEffect } from "react";
import { Announcement, HotDiv, MainNotice } from "./Notice";
import MarketItem from "../components/MarketItem";
import Modal from "../components/MarketSearchModal";

const MarketPage = styled(MainPage)``;

const GridSection = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	gap: 40px;
`;

const Market = () => {
	const [marketItems, setMarketItems] = useState([]);
	const [filteredMarketItems, setFilteredMarketItems] = useState([]);


	useEffect(() => {
		fetch("http://localhost:3001/market")
			.then((res) => res.json())
			.then((data) => {
				setMarketItems(data.marketItems);
				setFilteredMarketItems(data.marketItems);
			});
	}, []);

	return (
		<MarketPage>
			<MainNotice>
				<HotDiv>HOT</HotDiv>
				<Announcement>[필독] 뮬 장터규정 업데이트 안내</Announcement>
				<Modal
					marketItems={marketItems}
					setFilteredMarketItems={setFilteredMarketItems}
				/>
			</MainNotice>
			<GridSection>
				{filteredMarketItems.map((item) => {
					return <MarketItem key={item.id} item={item} />;
				})}
			</GridSection>
		</MarketPage>
	);
};

export default Market;
