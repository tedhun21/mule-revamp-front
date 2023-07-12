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
	ModalHeader,
} from "./NewsSearchModal";

export default function NoticeSeachModal({ notices, setFilteredNotices }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectCatData, setSelectCatData] = useState("전체");
	const [searchArea, setSearchArea] = useState("전체");
	const [searchValue, setSearchValue] = useState("");

	const openModalHandler = () => {
		setIsOpen(!isOpen);
	};

	// category selection
	const handleChangeCatSelect = (event) => {
		setSelectCatData(event.target.value);
	};

	// search Area selction
	const handleChangeAreaSelect = (event) => {
		setSearchArea(event.target.value);
	};

	const handleInputChange = (event) => {
		setSearchValue(event.target.value);
	};

	const handleSearch = () => {
		// 둘 다 전체가 들어올때
		if (selectCatData === "전체" && searchArea === "전체") {
			setFilteredNotices([...notices]);
		}

		// CAT만 데이터가 들어올때
		else if (selectCatData && searchArea === "전체")
			setFilteredNotices(
				notices.filter((notice) => notice.CAT === selectCatData)
			);
		// AREA만 데이터가 들어올때
		else if (selectCatData === "전체" && searchArea) {
			if (searchArea === "제목") {
				// title
				setFilteredNotices(
					notices.filter((notice) => notice.title.includes(searchValue))
				);
			} else if (searchArea === "본문") {
				// content
				setFilteredNotices(
					notices.filter((notice) => notice.content.includes(searchValue))
				);
			} else if (searchArea === "닉네임") {
				//author
				setFilteredNotices(
					notices.filter((notice) => notice.author === searchValue)
				);
			}
		} else {
			setFilteredNotices(
				notices
					.filter((notice) => notice.CAT === selectCatData)
					.filter((notice) => {
						if (searchArea === "닉네임") return notice.author === searchValue;
						else if (searchArea === "제목")
							return notice.title.includes(searchValue);
						else if (searchArea === "본문")
							return notice.content.includes(searchValue);
						return false;
					})
			);
		}
		setIsOpen(false);
		setSelectCatData("전체");
		setSearchArea("전체");
		setSearchValue("");
	};

	return (
		<>
			<ModalContainer onClick={openModalHandler}>
				<ModalBtn onClick={openModalHandler}>
					<i className="fa-sharp fa-solid fa-magnifying-glass"></i>
				</ModalBtn>
				{isOpen === false ? null : (
					<ModalBackdrop>
						<ModalView onClick={handleModalClick}>
							<ModalHeader>
								<div>
									<i className="fa-sharp fa-solid fa-magnifying-glass"></i>
									<span>검색</span>
								</div>
								<ExitBtn onClick={openModalHandler}>X</ExitBtn>
							</ModalHeader>{" "}
							<div className="desc">
								<AccordionSet>
									<label htmlFor="category">카테고리</label>
									<ModalAccordionDef
										id="cat-select"
										value={selectCatData}
										onChange={handleChangeCatSelect}
									>
										<option value="전체">전체</option>
										<option value="새소식">새소식</option>
										<option value="이벤트">이벤트</option>
										<option value="공지사항">공지사항</option>
										<option value="자유홍보">자유홍보</option>
										<option value="신상품">신상품</option>
									</ModalAccordionDef>
								</AccordionSet>
								<AccordionSet>
									<label htmlFor="field">검색영역</label>
									<ModalAccordionDef
										id="field-select"
										value={searchArea}
										onChange={handleChangeAreaSelect}
									>
										<option value="전체">전체</option>
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
