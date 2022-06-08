import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading';
import ExamItem from '../components/ExamItem';
import axios from 'axios'
function ExamList() {
	// const location = useLocation();
	// console.log(location);

	const [exams, setExams] = useState([]);
	//     [
	// 	{
	// 		_id: '61e3f41a3b7773d24d08c683',
	// 		name: 'Đề kiểm tra 15 phút Lịch Sử 12',
	// 		openedAt: '2022-01-16T08:34:24.636Z',
	// 		closedAt: '2022-01-16T08:34:24.636Z',
	// 		creator: {
	// 			_id: '61cf495623ef54e066d11ebb',
	// 			name: 'Giáo viên 2',
	// 		},
	// 		attemptLimit: 1,
	// 		minuteLimit: 15,
	// 		questions: [
	// 			'61e3f4183b7773d24d08c66d',
	// 			'61e3f4193b7773d24d08c677',
	// 			'61e3f41a3b7773d24d08c681',
	// 			'61e3f45bf5ee57a712a93c0a',
	// 		],
	// 		subject: 'Lịch sử',
	// 		grade: 12,
	// 		isDeleted: false,
	// 		__v: 0,
	// 		isEditable: false,
	// 		isDone: false,
	// 	},
	// ]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchExam = async () => {
			try {
				const url = `${process.env.REACT_APP_API_URL}/exams/`;

				// const token = localStorage.getItem('REFRESH_TOKEN');
				// const res = await axios.get(url, {
				// 	headers: {
				// 		access_token:
				// 			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWQ1MmNmYTc2YTcxNzJlMDFiMTY2ZTgiLCJpYXQiOjE2NTI4NDc2NDcsImV4cCI6MTY1MzEwNjg0N30.7C1fIm7vVjaHBHRhaB7KaxnKDljXXNSnwEvPVvdJztM',
				// 	},
				// });
				const res = await axios.get(url);

				// localStorage.setItem(`time_${examId}`, res.data.minuteLimit);
				// if (!localStorage.getItem(`startTime_${examId}`))
				// 	localStorage.setItem(
				// 		`startTime_${examId}`,
				// 		moment().format('DD/MM/YYYY HH:mm:ss'),
				// 	);
				if (res) {
					console.log(res);
				}
				// setExam(res.data);
				// setLoading(true);
			} catch (error) {
				console.log('Failed to fetch exam:', error);
			}
		};
		fetchExam();
	}, []);
	return (
		<div>
			<section className="flex py-5 px-5 min-h-screen">
				<div className="flex-1 py-5 md:py-10 p-0 sm:px-5 md:px-20 ">
					<div className="xl:w-4/5 bg-gray-200 bg-opacity-40 shadow-md">
						<div className="flex justify-between items-center sm:px-5 sm:py-3 p-3">
							<h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-green-800">
								Đề thi theo môn
							</h1>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
								/>
							</svg>
						</div>

						{loading ? (
							exams.map((e) => (
								<div
									key={e.id}
									className="flex justify-between border-t-2 cursor-pointer px-4 py-1 hover:bg-gray-200"
								>
									<div
										className="w-full"
										// onClick={() =>
										// 	navigate({
										// 		pathname: 'take/61e3f41a3b7773d24d08c683',
										// 		// search: createSearchParams({
										// 		//     subject: 'civiceducation',
										// 		// }).toString(),
										// 	})
										// }
									>
										{/* <ExamItem
											id={e.id}
											name={e.name}
											minuteLimit={e.maxDuration}
											// creator={e.creator.name}
											// openDate={moment
											// 	.utc(e.openedAt)
											// 	.local()
											// 	.format('DD/MM/YYYY')}
											// isDone={e.isDone}
										/> */}
									</div>

									{/* {e.isEditable && user?.role == 'teacher' && (
										<div className="flex flex-col">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-10 w-10 cursor-pointer mt-3 hover:bg-gray-50 p-2 rounded-full"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												// onClick={() =>
												// 	router.push({
												// 		pathname: 'editExam',
												// 		query: {
												// 			idExam: e._id,
												// 		},
												// 	})
												// }
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
												/>
											</svg>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-10 w-10 cursor-pointer mt-3 hover:bg-gray-50 p-2 rounded-full"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												onClick={() => handleDeleteExam(e._id)}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
												/>
											</svg>
										</div>
									)} */}
								</div>
							))
						) : (
							<>
								<Loading />
							</>
						)}

						{loading && exams?.length == 0 && (
							<h1 className="text-md sm:text-xl lg:text-2xl p-4">
								Chưa có đề thi của môn
							</h1>
						)}
					</div>
				</div>

				<div className="hidden lg:block border-l-2 border-gray-200 pl-10 pr-3 mb-10">
					<h1 className="text-2xl font-bold text-green-800 mb-3">Đề thi theo môn học</h1>
					<div className="grid grid-cols-1 gap-3 place-items-center">
						<div
							className="border border-gray-300 cursor-pointer"
							// onClick={() => {
							// 	setLoading(false);
							// 	router.push({
							// 		pathname: 'exam',
							// 		query: {
							// 			subject: 'Toán',
							// 		},
							// 	});
							// }}
						>
							<img
								className="object-cover w-64 h-16"
								src="/images/math.jpg"
								alt="math"
							/>
							<h3 className="text-center w-full py-1 text-md ">Toán</h3>
						</div>
						<div
							className="border border-gray-300 cursor-pointer"
							// onClick={() => {
							// 	setLoading(false);
							// 	router.push({
							// 		pathname: 'exam',
							// 		query: {
							// 			subject: 'Tiếng anh',
							// 		},
							// 	});
							// }}
						>
							<img
								className="object-cover w-64 h-16"
								src="/images/english.jpg"
								alt="english"
							/>
							<h3 className="text-center w-full py-1 text-md ">Tiếng Anh</h3>
						</div>
						<div
							className="border border-gray-300 cursor-pointer"
							// onClick={() => {
							// 	setLoading(false);
							// 	router.push({
							// 		pathname: 'exam',
							// 		query: {
							// 			subject: 'Vật lý',
							// 		},
							// 	});
							// }}
						>
							<img
								className="object-cover w-64 h-16"
								src="/images/physics.jpg"
								alt="physics"
							/>
							<h3 className="text-center w-full py-1 text-md ">Vật Lý</h3>
						</div>
						<div
							className="border border-gray-300 cursor-pointer"
							// onClick={() => {
							// 	setLoading(false);
							// 	router.push({
							// 		pathname: 'exam',
							// 		query: {
							// 			subject: 'Hóa học',
							// 		},
							// 	});
							// }}
						>
							<img
								className="object-cover w-64 h-16"
								src="/images/chemistry.jpg"
								alt="chemistry"
							/>
							<h3 className="text-center w-full py-1 text-md ">Hóa Học</h3>
						</div>
						<div
							className="border border-gray-300 cursor-pointer"
							// onClick={() => {
							// 	setLoading(false);
							// 	router.push({
							// 		pathname: 'exam',
							// 		query: {
							// 			subject: 'Sinh học',
							// 		},
							// 	});
							// }}
						>
							<img
								className="object-cover w-64 h-16"
								src="/images/biology.jpg"
								alt="biology"
							/>
							<h3 className="text-center w-full py-1 text-md ">Sinh Học</h3>
						</div>
						<div
							className="border border-gray-300 cursor-pointer"
							// onClick={() => {
							// 	setLoading(false);
							// 	router.push({
							// 		pathname: 'exam',
							// 		query: {
							// 			subject: 'Lịch sử',
							// 		},
							// 	});
							// }}
						>
							<img
								className="object-cover w-64 h-16"
								src="/images/history.jpg"
								alt="history"
							/>
							<h3 className="text-center w-full py-1 text-md ">Lịch Sử</h3>
						</div>
						<div
							className="border border-gray-300 cursor-pointer"
							// onClick={() => {
							// 	setLoading(false);
							// 	router.push({
							// 		pathname: 'exam',
							// 		query: {
							// 			subject: 'Địa lý',
							// 		},
							// 	});
							// }}
						>
							<img
								className="object-cover w-64 h-16"
								src="/images/geography.jpg"
								alt="geography"
							/>
							<h3 className="text-center w-full py-1 text-md">Địa Lý</h3>
						</div>

						<div
							className="border border-gray-300 cursor-pointer"
							// onClick={() => {
							// 	setLoading(false);
							// 	router.push({
							// 		pathname: 'exam',
							// 		query: {
							// 			subject: 'Giáo dục công dân',
							// 		},
							// 	});
							// }}
						>
							<img
								className="object-cover w-64 h-16"
								src="/images/civiceducation.jpg"
								alt="civic education"
							/>
							<h3 className="text-center w-full py-1 text-md ">Giáo Dục Công Dân</h3>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ExamList;
