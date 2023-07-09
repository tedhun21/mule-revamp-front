import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
	width: 100%;
	overflow: hidden;
`;

const CarouselWrapper = styled.div`
	display: flex;
	transition: transform 0.5s ease-in-out;
	width: 96%;
`;


const CarouselItem = styled.figure`
	background: #fff;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	border-radius: 20px;
	padding: 10px;
	margin: 2%;
	box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.4);

	img {
		border-radius: 20px;
		object-fit: cover;
		width: 300px;
		height: 200px;
	}

	figcaption {
		height: 5rem;
		padding-top: 1rem;
	}
`;

const SlideCarousel = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const filteredItems = items.filter((item) => item.picture && item.title);

		setActiveIndex(0);
		if (filteredItems.length === 0) return;

		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
		}, 1600);

		return () => {
			clearInterval(interval);
		};
	}, [items]);

	return (
		<CarouselContainer>
			<CarouselWrapper
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{items.map((item, index) => (
					<CarouselItem key={index}>
						{item.picture && item.title && (
							<>
								<img src={item.picture} alt={item.title} />
								<figcaption>{item.title}</figcaption>
							</>
						)}
					</CarouselItem>
				))}
			</CarouselWrapper>
		</CarouselContainer>
	);
};

export default SlideCarousel;
