import { StyledLi, CatDiv, TitleDiv, SubDiv } from './NoticeItem'

const NewsItem = ({ news }) => {
    return (
        <StyledLi>
            <CatDiv>{news.CAT}</CatDiv>
            <TitleDiv>{news.title.substring(0, 28)}...</TitleDiv>
            <SubDiv>
                <div>{news.author}</div>
                <div>{news.createdAt.slice(0,10)} {news.createdAt.slice(11, 16)}</div>
            </SubDiv>
        </StyledLi>
    )
}

export default NewsItem;