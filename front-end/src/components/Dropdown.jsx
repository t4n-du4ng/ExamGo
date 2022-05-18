import React from 'react';

function Dropdown() {
	return (
		<div className="absolute top-16 right-2 bg-white rounded-lg shadow-md">
			<div>
				<div className="flex items-center mt-2 py-1 pl-6 pr-12 cursor-pointer hover:bg-blue-300">
					<svg
						className="mr-4 pl-0.5"
						xmlns="http://www.w3.org/2000/svg"
						width="23"
						height="23"
						fill="none"
						viewBox="0 0 19 19"
					>
						<path
							fill="#000"
							d="M16.031 0H1.781C.801 0 0 .802 0 1.781V17.22C0 18.199.802 19 1.781 19h14.25c.98 0 1.782-.802 1.782-1.781V1.78C17.813.801 17.01 0 16.03 0Z"
						/>
						<path fill="#fff" d="M15.438 16.625H2.374V2.375h13.063v14.25Z" />
						<path
							fill="#000"
							d="M4.75 10.688h8.313v1.187H4.75v-1.188Zm0 2.374h8.313v1.188H4.75v-1.188Zm1.188-7.718a1.782 1.782 0 1 1 3.563 0 1.782 1.782 0 0 1-3.563 0Z"
						/>
						<path
							fill="#000"
							d="M8.906 7.125H6.531c-.98 0-1.781.534-1.781 1.188V9.5h5.938V8.312c0-.653-.802-1.187-1.782-1.187Z"
						/>
					</svg>
					<span className="mt-1">Xem trang cá nhân</span>
				</div>
				<div className="flex items-center py-1 pl-6 pr-12 cursor-pointer hover:bg-blue-300">
					<svg
						className="mr-2 pr-1"
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke="#000"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m16.474 5.408 2.118 2.117-2.118-2.117Zm1.362-1.865L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.854 1.854 0 0 0-2.621-2.62v0Z"
						/>
						<path
							stroke="#000"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"
						/>
					</svg>

					<span className="mt-1">Cập nhật thông tin</span>
				</div>
				<div className="flex items-center py-1 pl-6 pr-12 cursor-pointer hover:bg-blue-300">
					<svg
						className="mr-3"
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						fill="none"
						viewBox="0 0 28 28"
					>
						<path
							fill="#000"
							d="M5.25 6.125v15.75a.875.875 0 1 1-1.75 0V6.125a.875.875 0 0 1 1.75 0Zm9.188 5.96-2.188.712V10.5a.875.875 0 0 0-1.75 0v2.297l-2.188-.711a.852.852 0 0 0-1.093.558.864.864 0 0 0 .558 1.104l2.187.711-1.356 1.86a.875.875 0 0 0 .85 1.377.887.887 0 0 0 .572-.35l1.345-1.858 1.345 1.859a.887.887 0 0 0 1.225.197.875.875 0 0 0 .197-1.225l-1.356-1.86 2.187-.71a.863.863 0 0 0 .558-1.105.852.852 0 0 0-1.094-.558Zm11.593.559a.852.852 0 0 0-1.093-.558l-2.188.71V10.5a.875.875 0 0 0-1.75 0v2.297l-2.188-.711a.851.851 0 0 0-1.093.558.863.863 0 0 0 .558 1.104l2.187.711-1.356 1.86a.875.875 0 0 0 .85 1.377.887.887 0 0 0 .572-.35l1.345-1.858 1.345 1.859a.887.887 0 0 0 1.225.197.875.875 0 0 0 .197-1.225l-1.356-1.86 2.187-.71a.863.863 0 0 0 .558-1.105Z"
						/>
					</svg>

					<span className="mt-1">Đổi mật khẩu</span>
				</div>
			</div>
			<hr />
			<div>
				<div className="flex items-center py-1 pl-6 pr-12 cursor-pointer hover:bg-blue-300">
					<svg
						className="mr-2"
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						fill="none"
						viewBox="0 0 26 25"
					>
						<path
							fill="#000"
							d="M7.8 2.5h10.4c.69 0 1.35.263 1.838.732.488.47.762 1.105.762 1.768v15c0 .663-.274 1.299-.762 1.768a2.654 2.654 0 0 1-1.838.732H7.8c-.69 0-1.35-.263-1.839-.732A2.452 2.452 0 0 1 5.2 20V5c0-.663.274-1.299.761-1.768A2.654 2.654 0 0 1 7.8 2.5Zm0 1.25c-.345 0-.675.132-.92.366-.243.235-.38.552-.38.884v15c0 .331.137.65.38.884.245.234.575.366.92.366h10.4c.345 0 .675-.132.92-.366A1.23 1.23 0 0 0 19.5 20V5c0-.332-.137-.65-.38-.884a1.327 1.327 0 0 0-.92-.366H7.8Zm9.1 4.375a.61.61 0 0 1-.15.4.656.656 0 0 1-.383.215l-.117.01h-6.5a.665.665 0 0 1-.44-.163.608.608 0 0 1-.08-.84.654.654 0 0 1 .403-.237l.117-.01h6.5c.172 0 .338.066.46.183.121.117.19.276.19.442Zm0 4.375a.61.61 0 0 1-.15.4.656.656 0 0 1-.383.215l-.117.01h-6.5a.665.665 0 0 1-.44-.163.608.608 0 0 1-.08-.84.654.654 0 0 1 .403-.237l.117-.01h6.5c.172 0 .338.066.46.183.121.117.19.276.19.442Zm0 4.375a.61.61 0 0 1-.15.4.656.656 0 0 1-.383.215l-.117.01h-6.5a.665.665 0 0 1-.44-.163.608.608 0 0 1-.08-.84.654.654 0 0 1 .403-.237l.117-.01h6.5c.172 0 .338.066.46.183.121.117.19.276.19.442Z"
						/>
					</svg>

					<span className="mt-1 ">Quản lý đề thi</span>
				</div>
				<div className="flex items-center py-1 pl-6 pr-12 cursor-pointer hover:bg-blue-300">
					<svg
						className="mr-3 pl-0.5"
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						fill="none"
						viewBox="0 0 24 23"
					>
						<path
							stroke="#000"
							stroke-width="1.5"
							d="M14.467 2.19 19.5 7.013v13.8h-15V2.188h9.956c.008 0 .011.003.011.002Z"
						/>
						<path
							fill="#000"
							d="M12.75 10.602a.184.184 0 0 0-.188-.18h-1.124a.184.184 0 0 0-.188.18v2.425H8.719a.184.184 0 0 0-.188.18v1.078c0 .099.085.18.188.18h2.531v2.426c0 .099.084.18.188.18h1.124a.185.185 0 0 0 .188-.18v-2.426h2.531a.185.185 0 0 0 .188-.18v-1.078a.184.184 0 0 0-.188-.18H12.75v-2.425Z"
						/>
					</svg>

					<span className="mt-1">Thêm đề thi</span>
				</div>
				<div className="flex items-center py-1 pl-6 pr-12 cursor-pointer hover:bg-blue-300">
					<svg
						className="mr-3 pl-1"
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						fill="none"
						viewBox="0 0 22 24"
					>
						<path
							stroke="#000"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-miterlimit="5.759"
							stroke-width="2"
							d="M2.75 3v16c0 .53.193 1.04.537 1.414.344.375.81.586 1.296.586H19.25"
						/>
						<path
							stroke="#000"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-miterlimit="5.759"
							stroke-width="2"
							d="m6.417 14 3.666-4 3.667 4 5.5-6"
						/>
						<path
							stroke="#000"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M16.5 8h2.75v3"
						/>
					</svg>

					<span className="mt-1">Xem thống kê</span>
				</div>
			</div>
			<div className="bg-blue-700 text-center rounded-b-lg py-2 cursor-pointer">
				<span className="text-white text-2xl">Đăng xuất</span>
			</div>
		</div>
	);
}

export default Dropdown;
