import { styled } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  width: 90%;
`;

const Logo = styled.div`
  color: #fff;
  text-align: center;
  font-size: 48px;
  font-family: Inter;
  font-weight: 900;
  letter-spacing: -1.92px;
  margin: 40px;
`;
const Menu = styled.nav`
  display: flex;
  gap: 50px;
  .nav-notice,
  .nav-market,
  .nav-news {
    display: flex;
    width: 100px;
    padding: 10px 10px;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 28px;
    font-family: Inter;
    font-weight: 800;
    letter-spacing: -1px;
  }
`;

const User = styled.nav`
  display: flex;
  gap: 10px;

  .user-noti,
  .user-profile {
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    width: 52px;
    height: 52px;
  }

  .fa-solid {
    font-size: 20px;
    color: #fff;
  }
`;

const LoginModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const LoginModalView = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 640px;
  height: 530px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  gap: 10px;
`;

const LoginTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 540px;
  height: 100px;
  border-bottom: 1px solid #bcbcbc;
  font-size: 40px;
  margin-bottom: 30px;
  letter-spacing: 15px;
`;

const InputBox = styled.input`
  width: 480px;
  height: 60px;
  border-radius: 50px;
  border: 1px solid #5c5959;
  background: #fff;

  padding: 22px;
  font-size: 20px;
  margin-bottom: 20px;
`;

const LoginBtn = styled.button`
  height: 60px;
  width: 500px;
  border-radius: 20px;
  background: linear-gradient(156deg, #c13fad 0%, #5964bd 100%);
  font-size: 30px;
  color: #fff;
  letter-spacing: 10px;
`;

const SocialButton = styled.div``;

const KakaoLoginBtn = styled.button`
  width: 185px;
  height: 45px;
  border-radius: 12px;
  background: #fee500;
  border: none;
`;
const GoogleLoginBtn = styled.button`
  color: #fff;
  background: #4285f4;
  border-color: #4285f4;
`;

const Header = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const onLoginModalHandler = () => {
    setIsOpenLoginModal((prev) => !prev);
  };
  return (
    <NavBar>
      <Link to="/">
        <Logo>Mule</Logo>
      </Link>
      <Menu>
        <NavLink
          to="/notice"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <div className="nav-notice">Notice</div>
        </NavLink>
        <Link to="/market">
          <div className="nav-market">Market</div>
        </Link>
        <Link to="/news">
          <div className="nav-news">News</div>
        </Link>
      </Menu>
      <User>
        <button className="user-noti">
          <i className="fa-solid fa-bell"></i>
        </button>
        <button className="user-profile" onClick={onLoginModalHandler}>
          <i className="fa-solid fa-user"></i>
        </button>
        {isOpenLoginModal ? (
          <LoginModalBackdrop onClick={onLoginModalHandler}>
            <LoginModalView onClick={(e) => e.stopPropagation()}>
              <LoginTitleBox>로그인</LoginTitleBox>
              <div>
                <InputBox id="id" type="text" placeholder="아이디" />
              </div>
              <div>
                <InputBox id="password" type="text" placeholder="비밀번호" />
              </div>
              <LoginBtn>로그인</LoginBtn>
              <SocialButton>
                <KakaoLoginBtn>
                  <img
                    src="../../public/image/kakaoSymbol.jpg"
                    style={{ marginRight: "35px" }}
                  />
                  카카오 로그인
                </KakaoLoginBtn>
                <GoogleLoginBtn>
                  <img></img>Sign In with Google
                </GoogleLoginBtn>
              </SocialButton>
            </LoginModalView>
          </LoginModalBackdrop>
        ) : null}
      </User>
    </NavBar>
  );
};

export default Header;
