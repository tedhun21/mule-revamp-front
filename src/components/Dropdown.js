import { styled } from "styled-components";

const DropdownContainer = styled.section`
	width: 300px;
	height: 280px;
	position: absolute;
	background-color: rgba(255, 255, 255, 0.95);
	top: 50%;
	right: 50%;
	border-radius: 30px 0px 30px 30px;
	box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.15);

	img {
		width: 50px;
		margin: 20px;
	}

	hr {
		width: 90%;
		margin: 0% 5%;
	}
`;

const DropdownHeader = styled.header`
	display: flex;
	align-items: center;

	div {
		margin: -5px;
		color: #585858;
		font-size: 17px;

		span {
			color: black;
		}
	}
`;

const DropdownContent = styled.main`
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 10px;
	font-size: 16px;

	div:last-child {
		div:last-child {
			color: #383838;
			font-size: 15px;
		}
	}
`;

const Dropdown = ({ user }) => {
	console.log(user);
	return (
		<DropdownContainer onClick={(e) => e.stopPropagation()}>
			<DropdownHeader>
				<img src="/images/img.png" alt="test" />
				<div>
					안녕하세요, <span>{user.userId}</span> 님
				</div>
			</DropdownHeader>
			<hr />
			<DropdownContent>
				<div>활동 점수 : 점</div>
				<div>잔여 포인트: P</div>
				<div>
					<div>관심 분야</div>
					<div>어쩌구, 저쩌구, 123, abc</div>
				</div>
			</DropdownContent>
		</DropdownContainer>
	);
};

export default Dropdown;

/*
            
    <img>   안녕하세요, { userId } 님

            활동 점수 : { score } 점
            잔여 포인트: { point } P
            관심 분야
            어쩌구, 저쩌구, 123, abc

userData: [
    {
      id: 1,
      userId: "kimcoding",
      password: "1234",
    },
  ],

*/
