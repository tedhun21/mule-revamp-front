import { styled } from "styled-components"
import { MainPage } from "./Home"
import { Announcement, StyleUl, CATNav, HotDiv, CATButton, MainNotice} from "./Notice"
import { useEffect, useState } from "react"
import NewsItem from "../components/NewsItem"

const NewsPage = styled(MainPage)``

const newsCats = ["전체", "공연/세미나", "대회공모", "오디션", "기타"]

const News = () => {
    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([])

    useEffect(()=> {
        fetch("http://localhost:3001/news")
        .then((res) => res.json())
        .then((data) => {
            setNews(data.newsItems);
            setFilteredNews(data.newsItems);
        })
    }, [])

    const handleCATClick = (newsCat) => {
        if(newsCat==="전체"){
            setFilteredNews([...news])
        } else {
            setFilteredNews(news.filter((news)=> news.CAT === newsCat))
        }
    }
    return (
        <NewsPage>
            <MainNotice>
                <HotDiv>HOT</HotDiv>
                <Announcement>오디션은 공개 오디션만 등록 가능합니다</Announcement>
            </MainNotice>
        <StyleUl>
            <CATNav>
            {newsCats.map((newsCat,index)=> {
                return <CATButton key={index} onClick={() => handleCATClick(newsCat)}>{newsCat}</CATButton>
            })}
            </CATNav>
            {filteredNews.map((news) => <NewsItem key={news.id} news={news}/>)}
        </StyleUl>
</NewsPage>)
}



export default News;