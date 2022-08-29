import { useState } from "react";
import { ReactComponent as Chevron } from "../assets/svg/chevron.svg";

import "./AccordionList.scss";

type Faq = {
	question: string;
	answer: string;
};

const faqs: Faq[] = [
	{
		question: "How can I collaborate with you?",
		answer: "You can reach me out by email to tell me what's topic you interest to collaborate with. We will have some discussion to share and gather our thoughts then write it all in one nice blog!",
	},
	{
		question: "Will you give me a shoutout in a collaboration blog?",
		answer: "Of course. I will insert links of your social media and email if you'd like. Feel free to request for another form of shoutout too!",
	},
	{
		question: "What is the schedule of your blog posting?",
		answer: "I would say, it is not pretty certain, but I'm trying to upload as frequent as possible",
	},
	{
		question: "What is the scope of topic that I can request>",
		answer: "I'm insterested in STEM field, so any request related to those topics is fine for me! In fact I am more than happy to make a blog from request, so try to reach to me now!",
	},
];

export default function AccordionList() {
	const [selected, setSelected] = useState<number>(0);

	const select = (index: number): void => {
		setSelected(index);
	};

	return (
		<div className="accordion">
			{faqs.map((faq, index) => (
				<div
					key={index}
					className={`accordion__item ${
						selected === index ? "accordion__item--selected" : ""
					}`}
					onClick={() => select(index)}
				>
					<div className="accordion__header">
						<div className="accordion__question">
							{faq.question}
						</div>
						<div className="accordion__chevron">
							<Chevron />
						</div>
					</div>
					<p className="accordion__body">{faq.answer}</p>
				</div>
			))}
		</div>
	);
}
