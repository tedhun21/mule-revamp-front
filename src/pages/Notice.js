import { useEffect, useState } from "react"
import { styled } from "styled-components"
import NoticeItem from "../components/NoticeItem"
import { MainPage } from "./Home"

const NoticePage = styled(MainPage)``

const StyleUl = styled.ul`
    display: flex;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;   
`

const Notice = () => {
    const [notices, setNotices] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/notice")
        .then((res) => res.json())
        .then((data) => setNotices(data.notices))
    }, [])

    

    console.log(notices)
    return (
        <NoticePage>
            <StyleUl>
                {notices.map((notice) => <NoticeItem key={notice.id} notice={notice}/>)}
            </StyleUl>
        </NoticePage>
    )
}



export default Notice;