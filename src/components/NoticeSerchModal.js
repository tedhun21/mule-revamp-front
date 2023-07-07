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

export default function NoticeSeachModal({
	notices,
	setFilteredNotices,
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
			setFilteredNotices([...notices]);
		} else {
			setFilteredNotices(notices.filter((notice) => notice.CAT === selectData));
		}
		setIsOpen(false);
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
							<ExitBtn onClick={openModalHandler}>X</ExitBtn>
							<div className="desc">
								<AccordionSet>
									<label htmlFor="category">카테고리</label>
									<ModalAccordionDef
										id="cat-select"
										value={selectData}
										onChange={handleChangeSelect}
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
