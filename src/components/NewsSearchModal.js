import { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 100px;
`;

const ModalBackdrop = styled.div`
	position: fixed;
	background-color: rgba(0, 0, 0, 0.4);
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: last baseline;
`;

const ModalBtn = styled.button`
	background: linear-gradient(345deg, #c13fad 0%, #e81b4c 100%);
	text-decoration: none;
	border: none;
	color: #fff;
	width: 70px;
	height: 70px;
	border-radius: 30px;
	box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.4);
`;

const ModalView = styled.div.attrs(() => ({
	role: "dialog",
}))`
	width: 800px;
	height: 600px;
	border-radius: 20px;
	background: #fff;
	margin-bottom: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	cursor: default; /* 기본 커서: 내부 클릭 이벤트 차단 */

	.desc {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
	}
`;

const AccordionSet = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
`;

const ExitBtn = styled(ModalBtn)`
	background: white;
	color: black;
	width: 50px;
	height: 50px;
	font-size: 20px;
	position: absolute;
	right: 0;
	top: 0;
`;

const SearchInputWrapper = styled.div`
	// 아니 근데 진짜 왜 안 됨
`;

const SearchIcon = styled.i`
	// 무조건 고친다
	padding: 1rem;
`;

const SearchInput = styled.input`
	// 없으니 귀찮군
`;

const handleModalClick = (event) => {
	event.stopPropagation(); // 이벤트 버블링 차단
};

export default function NewsSearchModal({
	news,
	filteredNews,
	setFilteredNews,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectData, setSelectData] = useState("전체");
	const [searchValue, setSearchValue] = useState("");

	const openModalHandler = () => {
		setIsOpen(!isOpen);
	};

	const handleChangeSelect = (event) => {
		setSelectData(event.target.value);
	};

	const handleInputChange = (event) => {
		setSearchValue(event.target.value);
	};


	const handleSearch = () => {
		if (selectData === "전체") {
			setFilteredNews([...news]);
		} else {
			setFilteredNews(news.filter((news) => news.CAT === selectData));
		}
		setIsOpen(false);
	};

	/* const items = [
		{ notice: ["전체", "새소식", "이벤트", "공지사항", "자유홍보", "신상품"] },
		{
			market: [
				"베이스",
				"앰프",
				"어쿠스틱/클래식기타",
				"이펙터",
				"일렉기타",
				"레코딩/PA/키보드",
				"그외",
			],
		},
		{ news: ["전체", "공연/세미나", "대회공모", "오디션", "기타"] },
	]; */

	return (
		<>
			<ModalContainer onClick={openModalHandler}>
				<ModalBtn onClick={openModalHandler}>
					<i className="fa-sharp fa-solid fa-magnifying-glass"></i>
				</ModalBtn>
				{isOpen === false ? null : (
					<ModalBackdrop>
						<ModalView onClick={handleModalClick}>
							<ExitBtn onClick={openModalHandler}>X</ExitBtn>
							<div className="desc">
								<AccordionSet>
									<label htmlFor="category">category</label>
									<select id="cat-select" value={selectData} onChange={handleChangeSelect}>
										<option value="전체">전체</option>
										<option value="공연/세미나">공연/세미나</option>
										<option value="대회공모">대회공모</option>
										<option value="오디션">오디션</option>
										<option value="기타">기타</option>
									</select>
								</AccordionSet>
								<AccordionSet>
									<label htmlFor="field">field</label>
									<select id="field-select">
										<option value="">전체</option>
										<option value="제목">제목</option>
										<option value="본문">본문</option>
										<option value="닉네임">닉네임</option>
									</select>
								</AccordionSet>
								<SearchInputWrapper>
									<SearchInput
										type="text"
										placeholder="Search..."
										value={searchValue}
										onChange={handleInputChange}
									/>
									<button onClick={handleSearch}>
										<SearchIcon className="fa-sharp fa-solid fa-magnifying-glass" />
									</button>
								</SearchInputWrapper>
							</div>
						</ModalView>
					</ModalBackdrop>
				)}
			</ModalContainer>
		</>
	);
}
