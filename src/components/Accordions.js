import React, { useState } from "react";
import styled from "styled-components";

const AccordionWrapper = styled.div`
	// 아니 피그마 확장자 왜 안 열려
	padding: 1rem;
`;

const AccordionHeader = styled.button`
	// 아니 진짜 안 열림
`;

const AccordionIcon = styled.i`
	// 오 주여
`;

const AccordionContent = styled.div`
	// 이게 실화인가? 현실인가?
`;


const Accordion = ({ items }) => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleAccordion = (index) => {
		setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	console.log(items);

	return (
		<AccordionWrapper>
			{items.map((item, index) => (
				<div key={index}>
					<AccordionHeader onClick={() => toggleAccordion(index)}>
						{item.title}
						<AccordionIcon
							className={`fa-solid fa-angle-down${
								openIndex === index ? " fa-rotate-180" : ""
							}`}
						/>
					</AccordionHeader>
					{openIndex === index && (
						<AccordionContent>{item.content}</AccordionContent>
					)}
				</div>
			))}
		</AccordionWrapper>
	);
};

export default Accordion;
