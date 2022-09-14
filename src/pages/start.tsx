import { NextPage } from "next";
import Logo from "../assets/logo.svg";
import { useStart } from "../hook/useStart";

const Start: NextPage = () => {
	const { pushLogin, pushSignup } = useStart();
	return (
		<main className="bg-primary-blue bg-searchBarHeaderPattern -z-10 bg-[length:170%] bg-blend-hard-light bg-[center_top_10px] w-screen h-screen">
			<div className="pt-[214px] flex flex-col items-center px-6 w-full">
				<div className="w-[228px] h-[155px]">
					<Logo className="w-full" />
				</div>
				<p className="text-base font-bold text-white mt-8 text-center">
					音楽活動をしている学生が安く、
					<br />
					練習・ライブ場所を予約できるサービス
				</p>
				<div className="mt-[165px] flex flex-col space-y-[30px] w-full">
					<button
						className="text-primary-blue py-3 w-full bg-white rounded-full font-bold"
						onClick={() => pushSignup()}
					>
						アカウント登録
					</button>
					<button className="text-white font-bold" onClick={() => pushLogin()}>
						ログイン
					</button>
				</div>
			</div>
		</main>
	);
};

export default Start;
