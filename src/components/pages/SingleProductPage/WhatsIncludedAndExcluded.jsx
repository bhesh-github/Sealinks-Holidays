import React from 'react';
// import { DoneIcon } from "@mui/icons-material/Done";
import { BiHotel } from 'react-icons/bi';
import { GiMeal } from 'react-icons/gi';
import { BsBusFront, BsPersonCheck } from 'react-icons/bs';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { TiTick } from 'react-icons/ti';

import { RxCrossCircled } from 'react-icons/rx';

const WhatsIncludedAndExcluded = ({ whatsIncluded, whatsExcluded }) => {
	const whatsIncludedIcons = {
		ACCOMMODATION: <BiHotel className="c-icon" />,
		MEALS: <GiMeal className="c-icon" />,
		TRANSPORT: <BsBusFront className="c-icon" />,
		GUIDE: <BsPersonCheck className="c-icon" />,
		'INCLUDED ACTIVITIES': <VscVerifiedFilled className="c-icon" />,
	};
	return (
		<div className="whats-included-excluded-comp">
			<div className="whats-included">
				<span className="heading">What's Included</span>
				{whatsIncluded.map((item) => {
					const { id, title, list } = item;
					return (
						<div key={id}>
							<span className="title">
								{whatsIncludedIcons[title]}
								{title}
							</span>
							{list.map((item, idx) => (
								<p className="list" key={idx}>
									<TiTick className="tick-icon" />
									{item}
								</p>
							))}
						</div>
					);
				})}
			</div>
			<div className="whats-excluded">
				<span className="heading">WHAT'S EXCLUDED</span>
				<div className="list-wrapper">
					{whatsExcluded.map((item, idx) => (
						<div className="list" key={idx}>
							<RxCrossCircled className="l-icon" />
							<p className="brief">{item}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhatsIncludedAndExcluded;

WhatsIncludedAndExcluded.defaultProps = {
	whatsIncluded: [
		{
			id: 0,
			title: 'ACCOMMODATION',
			list: ['Hotel (9 nights)'],
		},
		{
			id: 1,
			title: 'MEALS',
			list: ['9 Breakfasts, 1 Lunch '],
		},
		{
			id: 2,
			title: 'TRANSPORT',
			list: ['Plane , Local bus , Private vehicle'],
		},
		{
			id: 3,
			title: 'GUIDE',
			list: ['An expert tour leader'],
		},
		{
			id: 4,
			title: 'INCLUDED ACTIVITIES',
			list: [
				'Buenos Aires - Leader-led orientation walk',
				'Ibera Wetlands - Day tour',
				'Iguazu Falls - Tour of the Brazilian side of the falls',
				'Iguazu Falls - Tour of the Argentinian side of the falls',
				'Iguazu Falls - Guarani community visit',
				"Rio de Janeiro - Corcovado, Christ Redeemer & Farmer's Market Urban Adventure",
			],
		},
	],
	whatsExcluded: [
		'Any international flights to Buenos Aires and from Rio de Janeiro are not included in this price. We always recommend that you arrive 1 day prior to your tour starting date.',
		'Travel insurance is not included in this Argentina & Brazil  tour. Travel insurance is mandatory to buy. We recommend purchasing it from World Nomads.',
	],
};
