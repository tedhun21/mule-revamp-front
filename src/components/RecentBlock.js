import { styled } from "styled-components";

const Block = styled.article`
	display: flex;
	padding: 30px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 20px;
	width: 31%;
	height: 100%;
	border-radius: 30px;
	background: linear-gradient(345deg, #c13fad 0%, #e81b4c 100%);
	box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.4);
	overflow: hidden;
    min-width: 170px;
`;

const Header = styled.header`
	font-weight: 900;
	font-size: 20px;
	color: white;
`;

const BlockContent = styled.main`
	overflow: hidden;
`;

const BlockItem = styled.li`
	height: 20px;
	overflow: hidden;
	color: white;
	margin: 20px 0px;
`;

export default function RecentBlock({ items, isNotice }) {
	

	return (
		<Block>
			<Header>{isNotice ? "Recent Notice" : "Recent News"}</Header>
			<BlockContent>
				{items.slice(0, 4).map((item, index) => (
					<BlockItem key={index}>{item.title}</BlockItem>
				))}
			</BlockContent>
		</Block>
	);
}
