import React, { useState } from 'react';
import { iconCheck } from '../assets';
import { nanoid } from 'nanoid';
import { done } from '../assets';

const Form = ({ currentMode, items, setItems, setCurrentTab,
	 setInputValue, inputValue, setNotification, setNotificationMessage }) => {
	// useState for Form checkbox
	const [complete, setComplete] = useState(false);

	// CheckBox design
	const incomplete = (
		<div
			className={`rounded-full mr-4 h-[24px] p-[2px] w-[24px] 
            flex items-center check justify-center relative cursor-pointer ${currentMode.check}`}
		>
			<div className={`absolute w-[22px] h-[22px] z-[3] rounded-full ${currentMode.background}`} />
		</div>
	);

	const completed = (
		<div
			className={`rounded-full mr-4 h-[24px] w-[24px] 
            flex items-center complete justify-center relative cursor-pointer ${currentMode.check}`}
		>
			<img src={iconCheck} />
		</div>
	);


	const Refresh = () => {
		setNotification(true);
		setTimeout(() => {
			setNotification(false);
		}, 3000);
		setInputValue('');
		setComplete(false)
	}

	// Submit Function
	const handleSubmit = (event) => {
		const newItem = {
			id: nanoid(),
			text: inputValue,
			checked: complete
		}
		event.preventDefault();
		if (!inputValue) {
			setNotificationMessage('Please enter a new Task!')
			Refresh()
			return;
		}
		else if (items.some((items) => items.text === newItem.text)) {
			setNotificationMessage(`Task: "${newItem.text}" already exists!`)
			Refresh()
			return;
		}
		else {
			// updating items array
			setItems([...items, newItem]);
			setCurrentTab(0)
			setNotificationMessage(`Task: "${newItem.text}" added successfully!`)
			Refresh()
		}
	};

	// Function to toggle checkbox
	function toggleComplete() {
		setComplete((prev) => !prev);
	}

	// function to retrieve data from input
	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	// Submit with Enter key
	const handleKeyPress = (event) => {
		if (event.keyCode === 13) {
			handleSubmit(event);
		}
	};

	return (
		<section
			className={`flex flex-row justify-between mb-[20px] h-[70px] px-6 py-4 w-full items-center 
      ${currentMode.background} ss:w-[520px] rounded-[5px]`}
		>
			{/* Input Form */}
			<form onSubmit={handleSubmit} className="flex flex-1 text-[15px] ss:text-[18px] items-center">
				<div onClick={toggleComplete}> {complete ? completed : incomplete} </div>
				<input
					placeholder="Create a new todo..."
					className={`flex flex-1 text-[15px] ss:text-[18px] items-center
                    ${currentMode.text} ${currentMode.background} font-josefin`}
					value={inputValue}
					onKeyPress={handleKeyPress}
					onChange={handleInputChange}
				/>

				<button type="submit" className="p-0 w-[20px] h-[auto] outline-none">
					<img src={done} className="w-[100%]  h-[100%]" />
				</button>
			</form>
		</section>
	);
};

export default Form;
