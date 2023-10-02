// eslint-disable-next-line no-unused-vars
import React from "react";

const buttonStyle = "py-3 border-[1px] border-black rounded-[5px]";
const normalButtonStyle = "bg-gray-700 rounded-[5px] border-[1px] border-black p-2 hover:bg-gray-600"

export default function Body() {
	return (
		<div className="btn-container p-3">
			<div className="upper-btn grid grid-cols-5 gap-x-2 mb-3">
				<button
					className={`del-btn col-span-2 bg-red-600 hover:bg-red-700 ${buttonStyle}`}
					data-delete="delete"
					title="Delete One"
				>
					DELETE
				</button>
				<button
					className={`clr-btn col-span-2 bg-yellow-400 hover:bg-yellow-500 text-black ${buttonStyle}`}
					id="clear"
					data-clear="clear"
					title="Clear All"
				>
					CLEAR
				</button>
				<button
					className={`percent-btn ${normalButtonStyle}`}
					data-operator="percent"
					title="Percentage"
				>
					%
				</button>
			</div>
			<div className="lower-btn grid grid-cols-4 gap-3">
				<button className={`${normalButtonStyle}`} id="seven" data-number="7">
					7
				</button>
				<button className={`${normalButtonStyle}`} id="eight" data-number="8">
					8
				</button>
				<button className={`${normalButtonStyle}`}  id="nine" data-number="9">
					9
				</button>
				<button className={`${normalButtonStyle}`}  id="subtract" data-operator="minus" title="Subtract">
					-
				</button>
				<button className={`${normalButtonStyle}`}  id="four" data-number="4">
					4
				</button>
				<button className={`${normalButtonStyle}`}  id="five" data-number="5">
					5
				</button>
				<button className={`${normalButtonStyle}`}  id="six" data-number="6">
					6
				</button>
				<button className={`${normalButtonStyle}`}  id="multiply" data-operator="times" title="Multiply">
					×
				</button>
				<button className={`${normalButtonStyle}`}  id="one" data-number="1">
					1
				</button>
				<button className={`${normalButtonStyle}`}  id="two" data-number="2">
					2
				</button>
				<button className={`${normalButtonStyle}`}  id="three" data-number="3">
					3
				</button>
				<button className={`${normalButtonStyle}`}  id="divide" data-operator="div" title="Divide">
					÷
				</button>
				<button className={`${normalButtonStyle}`}  id="decimal" data-decimal="decimal">
					.
				</button>
				<button className={`${normalButtonStyle}`}  id="0" data-number="0">
					0
				</button>
                <button className={`${normalButtonStyle}`}  id="equals" data-equals="equals" value="equals" title="Equals">
					=
				</button>
				<button className={`${normalButtonStyle}`}  id="add" data-operator="add" title="Add">
					+
				</button>
			</div>
		</div>
	);
}
