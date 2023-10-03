// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Header() {
	return (
		<div className="flex justify-between items-center w-[400px]">
			<div>
				<h1 className="project-title text-2xl">FreeCodeCamp Calculator</h1>
			</div>
			<div>
				<label htmlFor="toggle" className="flex items-center cursor-pointer">
					<div className="relative">
						<input type="checkbox" id="toggle" className="sr-only" />
						<div className="bg-block block bg-gray-600 w-14 h-8 rounded-full"></div>
						<div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
					</div>
				</label>
			</div>
		</div>
	);
}
