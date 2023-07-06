import { useState } from "react";
import styled from "styled-components";
import Accordion from "./Accordions";

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
		align-items: center;
		justify-content: center;
	}
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

export default function Modal() {
	const [isOpen, setIsOpen] = useState(false);
	const openModalHandler = () => {
		setIsOpen(!isOpen);
	};

	const [searchValue, setSearchValue] = useState("");
	const accordions = [
		{ title: "Accordion 1", content: "Content 1" },
		{ title: "Accordion 2", content: "Content 2" },
		{ title: "Accordion 3", content: "Content 3" },
	];

	const handleInputChange = (event) => {
		setSearchValue(event.target.value);
	};

	const handleSearch = () => {
		console.log(`Searching for: ${searchValue}`);
		const searchResults = [];

		//일단 검색어를 제목에 포함하는 아코디언만 결과로 내놓기
		const filteredAccordions = accordions.filter((accordion) =>
			accordion.title.toLowerCase().includes(searchValue.toLowerCase())
		);

		// 검색 결과
		if (filteredAccordions.length > 0) {
			console.log("Search Results:");
			filteredAccordions.forEach((accordion) => {
				console.log(`- ${accordion.title}`);
				searchResults.push(accordion); //searchResults 배열에 결과 저장
			});
		} else {
			console.log("No results found.");
		}
		console.log("Search Results Array:", searchResults);
	};

	const items = [
		{ title: "A", content: "ㄱ" },
		{ title: "B", content: "ㄴ" },
		{ title: "C", content: "ㄷ" },
		{ title: "D", content: "ㄹ" },
		{ title: "E", content: "ㅁ" },
	];

	return (
		<>
			<ModalContainer onClick={openModalHandler}>
				<ModalBtn onClick={openModalHandler}>
					<i class="fa-sharp fa-solid fa-magnifying-glass"></i>
				</ModalBtn>
				{isOpen === false ? null : (
					<ModalBackdrop>
						<ModalView onClick={handleModalClick}>
							<ExitBtn onClick={openModalHandler}>X</ExitBtn>
							<div className="desc">
								<Accordion items={items} />
								<SearchInputWrapper>
									<SearchInput
										type="text"
										placeholder="Search..."
										value={searchValue}
										onChange={handleInputChange}
									/>
								</SearchInputWrapper>
								<button onClick={handleSearch}>
									{" "}
									<SearchIcon className="fa-sharp fa-solid fa-magnifying-glass" />
								</button>
							</div>
						</ModalView>
					</ModalBackdrop>
				)}
			</ModalContainer>
		</>
	);
}
