// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { CalculatorContext } from "./Calculator";


export default function Display() {

    const {currentOperand, prevOperand} = useContext(CalculatorContext)

	return (
		<div className="display-container text-3xl">
			<div className="upper flex justify-between items-center h-[50px] w-full bg-[#242323]">
				<p className="text-lg ml-3">Ruralpluralrural</p>
				<svg
					className="mr-3"
					width="40px"
					height="40px"
					viewBox="-0.5 0 25 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M19.505 21.475C19.505 21.765 19.185 21.995 18.785 21.995H5.215C4.825 21.995 4.495 21.765 4.495 21.475V3.525C4.495 3.235 4.815 3.005 5.215 3.005H18.785C19.175 3.005 19.505 3.235 19.505 3.525V21.475Z"
						stroke="#ffffff"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M16.395 8.505H7.61499C7.27499 8.505 7.005 8.235 7.005 7.895V6.11501C7.005 5.77501 7.27499 5.505 7.61499 5.505H16.395C16.735 5.505 17.005 5.77501 17.005 6.11501V7.895C17.005 8.235 16.725 8.505 16.395 8.505Z"
						stroke="#ffffff"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M7.005 10.505H9.005"
						stroke="#ffffff"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M16.005 10.505H17.005"
						stroke="#ffffff"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M7.005 13.505H9.005"
						stroke="#ffffff"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M11.005 13.505H13.005"
						stroke="#ffffff"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M15.005 13.505H17.005"
						stroke="#ffffff"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M7.005 15.505H9.005"
						stroke="#ffffff"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M11.005 15.505H13.005"
						stroke="#ffffff"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M15.005 15.505H17.005"
						stroke="#ffffff"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M7.005 17.505H9.005"
						stroke="#ffffff"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M11.005 17.505H13.005"
						stroke="#ffffff"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M15.005 17.505H17.005"
						stroke="#ffffff"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M7.005 19.505H9.005"
						stroke="#ffffff"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M11.005 19.505H13.005"
						stroke="#ffffff"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M15.005 19.505H17.005"
						stroke="#ffffff"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<div className="h-[100px] w-full border-y-[1px] border-gray-800 bg-gradient-to-b from-[#4B4B4B] to-[#6D6C6C] flex justify-end items-end px-2">
				<span id="result-display" className="text-4xl">
					{prevOperand}
				</span>
			</div>
			<div className="h-[60px] overflow-scroll bg-gradient-to-t from-[#4B4B4B] to-[#6D6C6C] border-b-[1px] border-gray-800 flex justify-end items-end px-2">
				<span id="display" className="text-3xl">
                    {currentOperand}
				</span>
			</div>
		</div>
	);
}
