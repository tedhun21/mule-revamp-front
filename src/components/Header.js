import { styled } from "styled-components"
import { Link } from 'react-router-dom'

const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10%;
    width: 90%;
`

const Logo = styled.div`
        color: #FFF;
        text-align: center;
        font-size: 48px;
        font-family: Inter;
        font-weight: 900;
        letter-spacing: -1.92px;
        margin: 40px;
`
const Menu = styled.nav`
    display: flex;
    gap: 50px;
    .nav-notice, .nav-market, .nav-news {
        display: flex;
        width: 100px;
        padding: 10px 10px;
        justify-content: center;
        align-items: center;
        color: #FFF;
        font-size: 28px;
        font-family: Inter;
        font-weight: 800;
        letter-spacing: -1px;
    }
`

const User = styled.div`
    display: flex;

    .user-noti, .user-profile {
        display: flex;
        padding: 30px;
    }`

const Header = () => {
    return (
        <NavBar>
            <Link to="/">
                <Logo>Mule</Logo>
            </Link>
            <Menu>
                <Link to="/notice">
                    <div className="nav-notice">Notice</div>
                </Link>
                <Link to="/market">
                    <div className="nav-market">Market</div>
                </Link>
                <Link to="/news">
                    <div className="nav-news">News</div>
                </Link>
            </Menu>
            <User>
                <div className="user-noti">notification</div>
                <div className="user-profile">profile</div>
            </User>
        </NavBar>
    )
}

export default Header