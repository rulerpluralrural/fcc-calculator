// eslint-disable-next-line no-unused-vars
import React from "react";
import Display from "./Display";
import Body from "./Body";

export default function Calculator() {
	return (
		<div className="flex flex-col font-mono text-base h-[515px] w-[410px] bg-[#343536] text-white rounded-md border-1 border-[#313038] overflow-hidden">
			<Display />
			<Body />
		</div>
	);
}
