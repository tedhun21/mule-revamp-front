import { useEffect, useState } from "react"
import { styled } from "styled-components"
import NoticeItem from "../components/NoticeItem"
import { MainPage } from "./Home"

const NoticePage = styled(MainPage)`
`

const StyleUl = styled.ul`
    display: flex;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;  
    border-radius: 30px 0px 0px 0px;
    background: rgba(255, 255, 255, 0.70);
`

const CATNav = styled.nav`
    display: flex;
    gap: 10px;
`

const HotDiv = styled.div`
    border-radius: 200px;
    background: #E2215B;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    color: #FFF;
    font-size: 26px;
    font-weight: 900;
`

const Announcement = styled.div`
    align-items: flex-start;
    min-width: fit-content;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.20);
    box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.15);
    color: #383838;
    font-size: 20px;
    font-weight: 900;
`

const CATButton = styled.button`
    height: 50px;
    padding: 10px 20px;
    border-radius: 30px;
    background: linear-gradient(155deg, #E02361 0%, #3970C2 100%);
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.2) inset;
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    border: none;
    width: 120px;

    &:hover {
        background: #FFF;
        color: #3970C2;
        transition: 500ms;
    }

    &:active {
        background: #FFF;
        color: #E02361;
        transition: 500ms;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.8) inset;
    }
`

const noticeCats = ["전체", "새소식", "이벤트", "공지사항", "자유홍보", "신상품"]

const Notice = () => {
    const [notices, setNotices] = useState([])
    const [filteredNotices, setFilteredNotices] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/notice")
        .then((res) => res.json())
        .then((data) => {
            setNotices(data.notices);
            setFilteredNotices(data.notices);
        })
    }, [])

    const handleCATClick = (noticeCat) => {
        if(noticeCat === "전체"){
            setFilteredNotices([...notices])
        } else {
            setFilteredNotices(notices.filter((notice)=> notice.CAT === noticeCat))
        }
    }
    
    return (
        <NoticePage>
            <div style={{"display":"flex", "padding":"10px", "gap": "10px"}} >
                <HotDiv>HOT</HotDiv>
                <Announcement>오디션은 공개 오디션만 등록 가능합니다.</Announcement>
            </div>
            <StyleUl>
                <CATNav>
                    {noticeCats.map((noticeCat,index)=> {
                        return <CATButton key={index} onClick={() => handleCATClick(noticeCat)}>{noticeCat}</CATButton>
                    })}
                </CATNav>
                {filteredNotices.map((notice) => <NoticeItem key={notice.id} notice={notice}/>)}
            </StyleUl>
        </NoticePage>
    )
}

export default Notice;