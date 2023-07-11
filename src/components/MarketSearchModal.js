import { useState } from "react";
import {
	ModalContainer,
	ModalBackdrop,
	ModalBtn,
	ModalView,
	AccordionSet,
	ExitBtn,
	SearchInputWrapper,
	SearchIcon,
	SearchInput,
	SearchButton,
	ModalAccordionDef,
	handleModalClick,
} from "./NewsSearchModal";

// "베이스", "레코딩/PA/키보드", "어쿠스틱/클래식기타", "이펙터", "일렉기타", "앰프", "그외"

const CatData = [
	{ cat: "전체", subData: ["전체"] },
	{ cat: "베이스", subData: ["일렉베이스"] },
	{
		cat: "레코딩/PA/키보드",
		subData: ["모니터링/헤드폰/스피커/앰프", "건반/신디/미디/컨트롤러"],
	},
	{ cat: "어쿠스틱/클래식기타", subData: ["어쿠스틱기타", "클래식기타"] },
	{ cat: "이펙터", subData: ["기타이펙터", "베이스이펙터"] },
	{ cat: "일렉기타", subData: ["일렉기타"] },
	{ cat: "앰프", subData: ["기타앰프"] },
];

export default function MarketSeachModal({
	marketItems,
	setFilteredMarketItems,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectMainData, setSelectMainData] = useState("전체");
	const [selectSubData, setSelectSubData] = useState([]);

	const [searchValue, setSearchValue] = useState("");

	const openModalHandler = () => {
		setIsOpen(!isOpen);
	};

	const handleChangeSelect = (event) => {
		const selectedValue = event.target.value;
		setSelectMainData(selectedValue);
		setSelectSubData(
			CatData.filter((data) => data.cat === selectedValue)[0].subData
		);
	};

	const handleInputChange = (event) => {
		setSearchValue(event.target.value);
	};

	const handleChangeSubSelect = () => {};

	const handleSearch = () => {
		// 대분류, 중분류, 판매중(boolean), 검색 영역

		// 대분류 && !중분류

		// 대분류 && 중분류

		// 검색 영역 Input만

		//

		setIsOpen(false);
	};

	/*
	const data = [
  { name: "John", age: 25, city: "New York" },
  { name: "Jane", age: 30, city: "San Francisco" },
  { name: "Mark", age: 35, city: "Chicago" },
  { name: "Emily", age: 28, city: "Los Angeles" },
];

const filteredData = data

// 첫 번째 필터링 조건: 나이가 25보다 큰 경우
  .filter(item => item.age > 25)  

// 두 번째 필터링 조건: 도시가 "New York"인 경우
  .filter(item => item.city === "New York");  

console.log(filteredData);

	*/

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
									<label htmlFor="category">대분류</label>
									<ModalAccordionDef
										id="mainCAT-select"
										value={selectMainData}
										onChange={handleChangeSelect}
									>
										<option value="전체">전체</option>
										<option value="베이스">베이스</option>
										<option value="레코딩/PA/키보드">레코딩/PA/키보드</option>
										<option value="어쿠스틱/클래식기타">
											어쿠스틱/클래식기타
										</option>
										<option value="이펙터">이펙터</option>
										<option value="일렉기타">일렉기타</option>
										<option value="앰프">앰프</option>
										<option value="그외">그외</option>
									</ModalAccordionDef>
									<label>중분류</label>
									<ModalAccordionDef
										id="subCAT-select"
										onChange={handleChangeSubSelect}
									>
										<option value="전체">전체</option>
										{selectSubData.map((subData, index) => {
											return (
												<option key={index} value={subData}>
													{subData}
												</option>
											);
										})}
									</ModalAccordionDef>
								</AccordionSet>
								<AccordionSet>
									<label htmlFor="field">검색영역</label>
									<ModalAccordionDef id="field-select">
										<option value="">전체</option>
										<option value="제목">제목</option>
										<option value="본문">본문</option>
										<option value="닉네임">닉네임</option>
									</ModalAccordionDef>
								</AccordionSet>
								<SearchInputWrapper>
									<label htmlFor="search">검색어</label>
									<SearchInput
										type="text"
										placeholder="Search..."
										value={searchValue}
										onChange={handleInputChange}
									/>
								</SearchInputWrapper>
								<SearchButton onClick={handleSearch}>
									<SearchIcon className="fa-sharp fa-solid fa-magnifying-glass" />
									검색하기
								</SearchButton>
							</div>
						</ModalView>
					</ModalBackdrop>
				)}
			</ModalContainer>
		</>
	);
}
