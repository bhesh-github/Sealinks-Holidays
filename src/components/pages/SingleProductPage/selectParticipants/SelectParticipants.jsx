import React from 'react';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import ParticipantsModal from './participantsModal/ParticipantsModal';
import SelectParticipantsBadge from './SelectParticipantsBadge';

const userInput = {
	fullName: null,
	email: null,
	contact: null,
	address: null,
	tourDate: null,
	adult: null,
	children: null,
	infant: null,
	totalAmount: null,
};

const SelectParticipants = ({ participantsButtons }) => {
	const [startDate, setStartDate] = useState(new Date());
	const [overlay, setOverlay] = useState(false);
	const [forType, setFormType] = useState(null);
	const [bookingConformationInputValue, setBookingConformationInputValue] =
		useState(userInput);
	let tourTotalAmount = 50000;

	const dataAssumption = [
		{ id: 0, title: 'Tour Date', type: 'date', value: 'abc' },
		{ id: 1, title: 'Adult', type: 'button', value: 'abc' },
		{ id: 2, title: 'Children', type: 'button', value: 'abc' },
		{ id: 3, title: 'Infant 0-3 yrs', type: 'button', value: 'abc' },
		{ id: 4, title: 'Total Amount', type: 'text', value: tourTotalAmount },
	];

	const changeDate = (value) => {
		setStartDate(value);
	};

	return (
		<>
			<div className="select-participants-wrapper ">
				<div className="select-participants-heading">Tour Rate</div>
				<div className="table-and-button-wrapper row">
					<div className="select-participants-table">
						{dataAssumption.map((item) => (
							<SelectParticipantsBadge
								item={item}
								startDate={startDate}
								changeDate={changeDate}
								key={item.id}
							/>
						))}
					</div>
					<div className="buttons-wrapper">
						<button
							className="participants-button book-now"
							onClick={() => {
								setOverlay(true);
								setFormType('bookNow');
							}}
						>
							Book Now
						</button>
						<button
							className="participants-button more-info"
							onClick={() => {
								setOverlay(true);
								setFormType('moreInfo');
							}}
						>
							More Info
						</button>
					</div>
					<div className="participants-modal">
						<ParticipantsModal
							type={forType}
							overlay={overlay}
							setOverlay={setOverlay}
							setBookingConformationInputValue={
								setBookingConformationInputValue
							}
							bookingConformationInputValue={bookingConformationInputValue}
						/>
					</div>
					<div className="participants-modal">
						<ParticipantsModal
							type={forType}
							overlay={overlay}
							setOverlay={setOverlay}
							setBookingConformationInputValue={
								setBookingConformationInputValue
							}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default SelectParticipants;

SelectParticipants.defaultProps = {
	participantsButtons: ['Book Now', 'More Info'],
};
