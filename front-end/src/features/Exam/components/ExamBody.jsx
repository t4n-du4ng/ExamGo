// import { useRouter } from 'next/dist/client/router';
// import Modal from 'react-modal';
// import { useSelector } from 'react-redux';
import ExamForm from './ExamForm';

// Done form: question-answer-rightAnswer - 14-10-2021
// Done form: auto submit when timeout - 19-10-2021

const customStyles = {
	content: {
		textAlign: 'center',
		padding: '30px 60px',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

function ExamBody({ exam }) {
	// const { timeout } = useSelector((state) => state.time);
	// const router = useRouter();
	return (
		<div className="w-full md:w-3/4">
			<div className="">
				<div>
					<span className="text-3xl font-bold text-green-800 ">{exam?.subject} |</span>
					<span className="text-yellow-500 text-2xl font-semibold mt-3">
						| {exam?.name}
					</span>
				</div>
				<div className="flex justify-between w-3/5 full items-center">
					<span className=" text-xl font-semibold mt-3">Lớp: {exam?.grade}</span>
					<span className=" text-lg font-semibold mt-3">
						Thời gian: {exam?.minuteLimit} phút
					</span>
					<span className=" text-lg font-semibold mt-3">
						Người ra đề: {exam?.creator?.name}
					</span>
				</div>
			</div>
			{/* <ExamForm questions={exam?.questions} idExam={exam?._id} /> */}
			{/* <Modal
					isOpen={timeout}
					style={customStyles}
					contentLabel="Modal"
					ariaHideApp={false}
				>
					<h2 className="font-bold text-xl text-red-500">Bài thi của bạn đã được nộp</h2>

					<div className="flex justify-around mt-5">
						<button
							className="bg-green-400 py-2 px-8 mt-4 mr-3 font-bold text-gray-50 text-lg rounded-lg"
							onClick={() => {
								router.push({
									pathname: 'result',
									query: {
										idExam: exam?._id,
									},
								});
							}}
						>
							Xem kết quả
						</button>
					</div>
				</Modal> */}
		</div>
	);
}

export default ExamBody;
