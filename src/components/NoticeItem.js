import { styled } from 'styled-components';

export const StyledLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const CatDiv = styled.div`
    padding: 10px;
    background: linear-gradient(180deg, #5466BD 0%, #8087AC 100%);
    border-radius: 50px;
    color: #FFF;
    text-align: center;
    font-size: 12px;
    font-weight: 900;
    width: 80px;
`

export const TitleDiv = styled.div`
    color: #000;
    font-size: 24px;
    letter-spacing: -1px;
    width: 500px;
`

export const SubDiv = styled.div`
    color: #383838;
    font-size: 16px;
    width: 300px;
    display: flex;
    gap:10px;
`

const NoticeItem = ({ notice }) => {
    return (
        <StyledLi>
            <CatDiv>{notice.CAT}</CatDiv>
            <TitleDiv>{notice.title.substring(0, 28)}...</TitleDiv>
            <SubDiv>
                <div>{notice.author}</div>
                <div>{notice.createdAt.slice(0,10)} {notice.createdAt.slice(11, 16)}</div>
            </SubDiv>
        </StyledLi>
    )
}

export default NoticeItem;