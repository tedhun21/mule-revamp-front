import { styled } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const NavBar = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 10%;
	width: 90%;
`;

const Logo = styled.em`
	color: #fff;
	text-align: center;
	font-size: 50px;
	font-weight: bolder;
	letter-spacing: -4px;
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
	margin-right: 20px;
	width: 176px;
  justify-content: right;

	.user-noti,
	.user-profile,
	.login-btn,
	.logout-btn {
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
	z-index: 1;
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
	gap: 5px;
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
	width: 400px;
	height: 60px;
	border-radius: 50px;
	border: 1px solid #5c5959;
	background: #fff;

	padding: 22px;
	font-size: 20px;
	margin-bottom: 10px;
`;

const LoginBtn = styled.button`
	height: 60px;
	width: 400px;
	border-radius: 20px;
	background: linear-gradient(156deg, #c13fad 0%, #5964bd 100%);
	font-size: 30px;
	color: #fff;
	letter-spacing: 10px;
`;

const SocialButton = styled.div`
	display: flex;
	gap: 40px;
	margin-top: 15px;
`;

const KakaoLoginBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;

	width: 185px;
	height: 45px;
	border-radius: 12px;
	background: #fee500;
	border: none;

	img {
		width: 25px;
		height: 25px;
		margin-right: 30px;
	}
`;

const GoogleLoginBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	color: #fff;
	background: #4285f4;
	border-color: #4285f4;
	border-radius: 5px;

	img {
		width: 35px;
		height: 35px;
		margin: 2px;

		border-radius: 3px 0 0 3px;

		background-color: white;
	}
	span {
		margin: 10px;
	}
`;

const NotiModalBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;

const NotiModalView = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #fff;

	width: 465px;
	height: 390px;
	border-radius: 30px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const NotiTitle = styled.div`
	border-bottom: solid;
	width: 400px;
	margin-bottom: 80px;
	padding: 10px;
	span {
		padding: 10px;
		font-size: 20px;
	}
`;

const NotiContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
`;

const NotiSettingBtn = styled.button`
	width: 175px;
	height: 50px;
	border-radius: 20px;
	border: 3px solid purple;
	font-size: 15px;
	color: purple;
	font-weight: 600;
	background-color: white;

	&:hover {
		background-color: #ffc7ee;
	}
`;

const Header = () => {
	const [isLogin, setIsLogin] = useState(false);

	const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
	const [isOpenNotiModal, setIsOpenNotiModal] = useState(false);

	const [userId, setUserId] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const onLoginModalHandler = () => {
		setIsOpenLoginModal((prev) => !prev);
	};
	const onNotiModalHandler = () => {
		setIsOpenNotiModal((prev) => !prev);
	};

	const onChangeUserIdHandler = (e) => {
		setUserId(e.target.value);
	};
	const onChangeUserPasswordHandler = (e) => {
		setUserPassword(e.target.value);
	};
	const onLogOut = () => {
		setIsLogin(false);
	};

	const onSubmit = () => {
		if (userId && userPassword) {
			axios
				.post("http://localhost:3001/login", { userId, userPassword })
				.then((res) => {
					setIsOpenLoginModal(false);
					setIsLogin(true);
					console.log(res.data);
				});
		}
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
				{isLogin ? (
					<button className="user-noti" onClick={onNotiModalHandler}>
						<i className="fa-solid fa-bell"></i>
					</button>
				) : null}
				{isLogin ? (
					<button className="user-profile">
						<i className="fa-solid fa-user"></i>
					</button>
				) : (
					<button className="login-btn" onClick={onLoginModalHandler}>
						<i className="fa-solid fa-right-to-bracket"></i>
					</button>
				)}
				{isLogin ? (
					<button className="logout-btn" onClick={onLogOut}>
						<i className="fa-solid fa-right-from-bracket"></i>
					</button>
				) : null}
				{isOpenLoginModal ? (
					<LoginModalBackdrop onClick={onLoginModalHandler}>
						<LoginModalView onClick={(e) => e.stopPropagation()}>
							<LoginTitleBox>로그인</LoginTitleBox>
							<div>
								<InputBox
									onChange={onChangeUserIdHandler}
									type="text"
									placeholder="아이디"
								/>
							</div>
							<div>
								<InputBox
									onChange={onChangeUserPasswordHandler}
									type="password"
									placeholder="비밀번호"
								/>
							</div>
							<LoginBtn onClick={onSubmit}>로그인</LoginBtn>
							<SocialButton>
								<KakaoLoginBtn>
									<img src="/images/kt.png" alt="" />
									<span>카카오 로그인</span>
								</KakaoLoginBtn>
								<GoogleLoginBtn>
									<img src="/images/google.png" alt="" />
									<span>Sign In with Google</span>
								</GoogleLoginBtn>
							</SocialButton>
						</LoginModalView>
					</LoginModalBackdrop>
				) : null}
				{isOpenNotiModal ? (
					<NotiModalBackdrop onClick={onNotiModalHandler}>
						<NotiModalView onClick={(e) => e.stopPropagation()}>
							<NotiTitle>
								<span>알림</span>
								<span style={{ color: "purple" }}>0</span>
							</NotiTitle>
							<NotiContent>
								<div style={{ fontSize: "24px" }}>알림이 없습니다.</div>
								<NotiSettingBtn>알림 설정하기</NotiSettingBtn>
							</NotiContent>
						</NotiModalView>
					</NotiModalBackdrop>
				) : null}
			</User>
		</NavBar>
	);
};

export default Header;
