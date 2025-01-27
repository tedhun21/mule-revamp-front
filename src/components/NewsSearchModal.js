import { useState } from "react";
import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBtn = styled.button`
  background: linear-gradient(345deg, #c13fad 0%, #e81b4c 100%);
  text-decoration: none;
  border: none;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.4);
  font-size: 20px;
`;

export const ModalView = styled.div.attrs(() => ({
  role: "dialog",
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: default; /* 기본 커서: 내부 클릭 이벤트 차단 */

  width: 600px;
  height: 400px;
  border-radius: 20px;
  background: #fff;

  .desc {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 50px;
    font-size: 16px;

    #onsalecheck {
      margin-left: 35px;
    }
  }
`;

export const AccordionSet = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const ModalHeader = styled.header`
  position: absolute;
  top: 0;

  width: 600px;
  background: linear-gradient(129deg, #c240ae 0%, #775bb9 71.36%, #5966be 100%);
  border-radius: 20px 20px 0px 0px;
  color: white;
  font-weight: 800;
  font-size: 26px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div > * {
    padding: 10px;
  }
`;

export const ExitBtn = styled.button`
  background: none;
  color: white;
  width: 40px;
  height: 40px;
  font-size: 26px;
  border: none;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const SearchInputWrapper = styled.div`
  gap: 20px;
  font-size: 18px;
`;

export const SearchIcon = styled.i`
  padding: 10px 5px;
`;

export const SearchInput = styled.input`
  border-radius: 10px;
  border: 1px solid #000;
  background: #fff;
  margin-left: 20px;
  width: 162px;
  padding: 4px 10px;
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
  padding: 2px 12px;
  background: linear-gradient(129deg, #c240ae 0%, #775bb9 71.36%, #5966be 100%);
  border-radius: 20px;
  font-size: 18px;
`;

export const ModalAccordionDef = styled.select`
  width: 150px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #000;
  background: #fff;
  padding: 5px 10px;
`;

export const handleModalClick = (event) => {
  event.stopPropagation(); // 이벤트 버블링 차단
};

export default function NewsSearchModal({ news, setFilteredNews }) {
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

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      // 둘 다 전체가 들어올때
      if (selectCatData === "전체" && searchArea === "전체") {
        setFilteredNews([...news]);
      }

      // CAT만 데이터가 들어올때
      else if (selectCatData && searchArea === "전체")
        setFilteredNews(news.filter((notice) => notice.CAT === selectCatData));
      // AREA만 데이터가 들어올때
      else if (selectCatData === "전체" && searchArea) {
        if (searchArea === "제목") {
          // title
          setFilteredNews(
            news.filter((notice) => notice.title.includes(searchValue)),
          );
        } else if (searchArea === "본문") {
          // content
          setFilteredNews(
            news.filter((notice) => notice.content.includes(searchValue)),
          );
        } else if (searchArea === "닉네임") {
          //author
          setFilteredNews(
            news.filter((notice) => notice.author === searchValue),
          );
        }
      } else {
        setFilteredNews(
          news
            .filter((news) => news.CAT === selectCatData)
            .filter((news) => {
              if (searchArea === "닉네임") return news.author === searchValue;
              else if (searchArea === "제목")
                return news.title.includes(searchValue);
              else if (searchArea === "본문")
                return news.content.includes(searchValue);
              return false;
            }),
        );
      }
      setIsOpen(false);
      setSelectCatData("전체");
      setSearchArea("전체");
      setSearchValue("");
    }
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
              </ModalHeader>
              <div className="desc">
                <AccordionSet>
                  <label htmlFor="category">카테고리</label>
                  <ModalAccordionDef
                    id="cat-select"
                    value={selectCatData}
                    onChange={handleChangeCatSelect}
                  >
                    <option value="전체">전체</option>
                    <option value="공연/세미나">공연/세미나</option>
                    <option value="대회공모">대회공모</option>
                    <option value="오디션">오디션</option>
                    <option value="기타">기타</option>
                  </ModalAccordionDef>
                </AccordionSet>
                <AccordionSet>
                  <label htmlFor="field">검색영역</label>
                  <ModalAccordionDef
                    id="field-select"
                    value={searchArea}
                    onChange={handleChangeAreaSelect}
                  >
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
                    onKeyDown={handleSearch}
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
