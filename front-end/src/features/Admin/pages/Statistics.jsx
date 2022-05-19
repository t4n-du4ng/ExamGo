import React from 'react';

function Statistics() {
	return (
		<div className="flex flex-col">
			<div className="shadow-lg rounded-lg overflow-hidden">
				<div className="py-3 px-5 bg-gray-50">Bar chart</div>
				<canvas className="p-10" id="chartBar"></canvas>
			</div>

			<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
		</div>
	);
}

export default Statistics;
