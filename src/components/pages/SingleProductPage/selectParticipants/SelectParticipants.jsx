import React from 'react';
import { useState, createContext, useRef, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import SelectParticipantsActionBtn from './SelectParticipantsActionBtn/SelectParticipantsActionBtn';
import SelectParticipantsBadge from './SelectParticipantsBadge';
const ParticipantsContext = createContext();

const SelectParticipants = () => {
	const [startDate, setStartDate] = useState(new Date());
	// ///////////////
	const [adultSelectedValue, setAdultSelectedVaue] = useState();
	const [childrenSelectedValue, setChildrenSelectedVaue] = useState();
	const [infantSelectedValue, setInfantSelectedVaue] = useState();
	//
	const participatedAdult = useRef(1);
	const participatedChildren = useRef(0);
	const participatedInfant = useRef(0);
	useEffect(() => {
		console.log('render check');
		participatedAdult.current = adultSelectedValue;
		participatedChildren.current = childrenSelectedValue;
		participatedInfant.current = infantSelectedValue;
	});

	//////////////
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
				<div className="table-and-button-wrapper">
					<ParticipantsContext.Provider value={setAdultSelectedVaue}>
						<div className="select-participants-table ">
							{dataAssumption.map((item) => (
								<SelectParticipantsBadge
									item={item}
									startDate={startDate}
									changeDate={changeDate}
									key={item.id}
								/>
							))}
						</div>
					</ParticipantsContext.Provider>
					<div className="select-participants-action-buttons">
						<SelectParticipantsActionBtn
							type="formConformation"
							text="Book Now"
							btnColor="#F79621"
						/>
						<SelectParticipantsActionBtn
							text="More Info"
							btnColor="#d4d4d4"
							type="moreInformation"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default SelectParticipants;
