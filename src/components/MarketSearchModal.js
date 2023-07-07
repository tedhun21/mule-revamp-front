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

export default function NoticeSeachModal({ news, setFilteredNews }) {
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
										id="mainCAT-select"
										value={selectData}
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
									<ModalAccordionDef
										id="subCAT-select"
										value={selectData}
										onChange={handleChangeSelect}
									>
										<option value="전체">전체</option>
										<option value="일렉베이스" className="베이스">
											일렉베이스
										</option>
										<option
											value="모니터링/헤드폰/스피커/앰프"
											className="레코딩/PA/키보드"
										>
											모니터링/헤드폰/스피커/앰프
										</option>
										<option
											value="건반/신디/미디/컨트롤러"
											className="레코딩/PA/키보드"
										>
											건반/신디/미디/컨트롤러
										</option>
										<option
											value="어쿠스틱기타"
											className="어쿠스틱/클래식기타"
										>
											어쿠스틱기타
										</option>
										<option value="클래식기타" className="어쿠스틱/클래식기타">
											클래식기타
										</option>
										<option value="기타이펙터" className="이펙터">
											기타이펙터
										</option>{" "}
										<option value="베이스이펙터" className="이펙터">
											베이스이펙터
										</option>
										<option value="일렉기타" className="일렉기타">
											일렉기타
										</option>
										<option value="기타앰프" className="앰프">
											기타앰프
										</option>
										<option value="그외">그외</option>
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
