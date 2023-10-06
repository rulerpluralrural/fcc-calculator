// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";
import Display from "./Display";
import Body from "./Body";

// const operatorButtons = ["+","-","÷",""]

export const CalculatorContext = createContext(null);

export default function Calculator() {
	const [currentOperand, setCurrentOperand] = useState("0");
	const [result, setResult] = useState("");
	const [clear, setClear] = useState(true);
	const [evaluated, setEvaluated] = useState(false);
	const [changeColor, setChangeColor] = useState(false);

	return (
		<CalculatorContext.Provider
			value={{
				currentOperand,
				setCurrentOperand,
				result,
				setResult,
				clear,
				setClear,
				evaluated,
				setEvaluated,
				changeColor,
				setChangeColor,
			}}
		>
			<div className="flex flex-col font-mono text-base h-[515px] w-[410px] bg-[#343536] text-white rounded-md border-1 border-[#313038] overflow-hidden">
				<Display />
				<Body />
			</div>
		</CalculatorContext.Provider>
	);
}
