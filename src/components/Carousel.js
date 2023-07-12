import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	overflow: hidden;
	z-index: 0;
`;

const CarouselWrapper = styled.div`
	display: flex;
	transition: transform 0.5s ease-in-out;
	z-index: 0;
`;

const CarouselItem = styled.figure`
	background: #fff;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	border-radius: 20px;
	padding: 10px;
	margin: 10px;
	box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.4);
	z-index: 0;

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
				style={{ transform: `translateX(-${activeIndex * 10}%)` }}
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
