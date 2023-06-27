import { useEffect, useState } from "react"
import { styled } from "styled-components"
import NoticeItem from "../components/NoticeItem"
import { MainPage } from "./Home"

const NoticePage = styled(MainPage)``

const StyledList = styled.li`
    list-style: none;
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
            <main>
                <ul>
                    {notices.map((notice) => <NoticeItem key={notice.id} notice={notice}/>)}
                </ul>
            </main>
        </NoticePage>
    )
}



export default Notice;