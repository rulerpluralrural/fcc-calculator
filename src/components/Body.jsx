// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { CalculatorContext } from "./Calculator";

const buttonStyle = "py-3 border-[1px] border-black rounded-[5px]";
const normalButtonStyle =
	"bg-gray-700 rounded-[5px] border-[1px] border-black p-2 hover:bg-gray-600";
const numberButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const endsWithOperator = /[*+-/]$/;
const isOperator = /[*/+-]/;

export default function Body() {
	const {
		currentOperand,
		setCurrentOperand,
		result,
		setResult,
		clear,
		setClear,
		formula,
		setFormula
	} = useContext(CalculatorContext);

	function handleNum(num) {
		return () => {
			if (currentOperand === "Error") return;
			if (num === 0 && currentOperand === "0") return;
			if (clear) {
				setCurrentOperand(num.toString());
				setClear(false);
			} else {
				setCurrentOperand(currentOperand + num.toString())
				setFormula(currentOperand + num.toString())
			}
		};
	}

	function handleOperator(operator) {
		return () => {
			if (currentOperand === "Error") return;
			if (operator !== "-" && currentOperand === "") return;
			if (endsWithOperator.test(currentOperand)) return;
			setResult(currentOperand + operator);
			setFormula(currentOperand + operator)
			setCurrentOperand(operator)
		};
	}

	function handleDecimal(val) {
		return () => {
			if (currentOperand === "Error") return;
			if (val === "." && currentOperand.includes(".")) return;
			if (currentOperand === "0" && result === "") {
				setCurrentOperand("0" + val);
				setClear(false)
			} else {
				setCurrentOperand(currentOperand + val)
			}
		};
	}

	function handleEvaluate() {
		if (currentOperand === "Error") return;
		try {
			setCurrentOperand(eval(currentOperand));
			setResult(currentOperand + "=" + eval(currentOperand));
		} catch (error) {
			setCurrentOperand("Error");
		}
	}

	function handleClear() {
		setCurrentOperand("0");
		setResult("");
		setClear(true);
	}

	function handleDelete() {
		if (currentOperand === "Error") return;
		setCurrentOperand(currentOperand.slice(0, -1));
	}

	return (
		<div className="btn-container p-3">
			<div className="upper-btn grid grid-cols-5 gap-x-2 mb-3">
				<button
					className={`clr-btn col-span-2 bg-red-600 hover:bg-red-700 text-white ${buttonStyle}`}
					id="clear"
					onClick={handleClear}
				>
					CLEAR
				</button>
				<button
					className={`del-btn col-span-2 bg-yellow-300 hover:bg-yellow-400 text-black ${buttonStyle}`}
					onClick={handleDelete}
				>
					DELETE
				</button>
				<button
					className={`percent-btn ${normalButtonStyle}`}
					onClick={handleOperator("%")}
				>
					mod
				</button>
			</div>
			<div className="lower-btn grid grid-cols-4 gap-3">
				<div className="grid col-span-3 grid-cols-3 gap-3 row-span-3">
					{numberButtons.map((num, index) => {
						return (
							<button
								className={normalButtonStyle}
								key={index}
								onClick={handleNum(num)}
							>
								{num}
							</button>
						);
					})}
				</div>
				<button
					className={`${normalButtonStyle}`}
					id="subtract"
					onClick={handleOperator("-")}
				>
					-
				</button>
				<button
					className={`${normalButtonStyle}`}
					id="multiply"
					onClick={handleOperator("*")}
				>
					×
				</button>
				<button
					className={`${normalButtonStyle}`}
					id="divide"
					onClick={handleOperator("/")}
				>
					÷
				</button>
				<button
					className={`${normalButtonStyle}`}
					id="decimal"
					onClick={handleDecimal(".")}
				>
					.
				</button>
				<button
					className={`${normalButtonStyle}`}
					id="zero"
					onClick={handleNum(0)}
				>
					0
				</button>
				<button
					className={`${normalButtonStyle}`}
					id="add"
					onClick={handleOperator("+")}
				>
					+
				</button>
				<button
					className={`${normalButtonStyle}`}
					id="equals"
					onClick={handleEvaluate}
				>
					=
				</button>
			</div>
		</div>
	);
}
