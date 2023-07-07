import { useEffect, useState } from "react";
import { styled } from "styled-components";
import NoticeItem from "../components/NoticeItem";
import { MainPage } from "./Home";
import Modal from "../components/NoticeSerchModal";

const NoticePage = styled(MainPage)``;

export const StyleUl = styled.ul`
	display: flex;
	padding: 40px;
	flex-direction: column;
	align-items: flex-start;
	gap: 30px;
	border-radius: 30px 0px 0px 0px;
	background: rgba(255, 255, 255, 0.7);
	overflow-x: hidden;
`;

export const CATNav = styled.nav`
	display: flex;
	gap: 10px;
`;

export const MainNotice = styled.div`
	display: flex;
	padding: 30px 0px;
	gap: 20px;
	height: 12%
`;

export const HotDiv = styled.div`
	border-radius: 200px;
	background: #e2215b;
	box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
	color: #fff;
	font-size: 26px;
	font-weight: 900;
	padding: 6px 14px;
`;

export const Announcement = styled.button`
	align-items: flex-start;
	min-width: fit-content;
	border-radius: 20px;
	background: rgba(255, 255, 255, 0.2);
	box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.15);
	color: #383838;
	font-size: 20px;
	font-weight: 900;
	padding: 0px 20px;
	border: none;

	&:hover {
		background: #fff;
		transition: 500ms;
		color: #e2215b;
	}

	&:active {
		background: #fff;
		transition: 500ms;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.8) inset;
	}
`;

export const CATButton = styled.button`
	height: 50px;
	padding: 10px 20px;
	border-radius: 30px;
	background: linear-gradient(155deg, #e02361 0%, #3970c2 100%);
	box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2) inset;
	color: #fff;
	text-align: center;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 130%;
	border: none;
	width: 140px;

	&:hover {
		background: #fff;
		color: #3970c2;
		transition: 500ms;
	}

	&:active {
		background: #fff;
		color: #e02361;
		transition: 500ms;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.8) inset;
	}
`;

const noticeCats = [
	"전체",
	"새소식",
	"이벤트",
	"공지사항",
	"자유홍보",
	"신상품",
];

const Notice = () => {
	const [notices, setNotices] = useState([]);
	const [filteredNotices, setFilteredNotices] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/notice")
			.then((res) => res.json())
			.then((data) => {
				setNotices(data.noticeItems);
				setFilteredNotices(data.noticeItems);
			});
	}, []);

	const handleCATClick = (noticeCat) => {
		if (noticeCat === "전체") {
			setFilteredNotices([...notices]);
		} else {
			setFilteredNotices(notices.filter((notice) => notice.CAT === noticeCat));
		}
	};
	return (
		<NoticePage>
			<MainNotice>
				<HotDiv>HOT</HotDiv>
				<Announcement>
					2019년 3월 이전에 입력한 주소는 다시 입력해 주세요
				</Announcement>
				<Modal notices={notices} setFilteredNotices={setFilteredNotices} />
			</MainNotice>
			<StyleUl>
				<CATNav>
					{noticeCats.map((noticeCat, index) => {
						return (
							<CATButton key={index} onClick={() => handleCATClick(noticeCat)}>
								{noticeCat}
							</CATButton>
						);
					})}
				</CATNav>
				{filteredNotices.map((notice) => (
					<NoticeItem key={notice.id} notice={notice} />
				))}
			</StyleUl>
		</NoticePage>
	);
};

export default Notice;
