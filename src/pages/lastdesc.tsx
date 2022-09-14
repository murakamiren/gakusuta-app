import { NextPage } from "next";
import { useRouter } from "next/router";

const Lastdesc: NextPage = () => {
	const router = useRouter();
	return (
		<main className="bg-primary-blue w-screen h-screen bg-searchBarHeaderPattern -z-10 bg-[length:170%] bg-blend-hard-light bg-[center_top_10px]">
			<div className="relative w-full pt-[60px]">
				<img src="/image/desc.png" alt="desc" />
			</div>
			<div className="px-9">
				<h2 className="text-[24px] font-bold text-center text-white">さあ、みんなで繋がろう。</h2>
				<p className="text-center text-sm px-[20px] mt-3 text-white">
					音楽活動をしている学生が安く、簡単に練習/ライブ活動が できるサービスです。気になるスタジオを見つけたり、
					他のバンドと交流をすることも出来ます。
				</p>
				<button className="w-full text-white bg-primary-red rounded-xl py-3 mt-[30px]" onClick={() => router.push("/")}>
					はじめる
				</button>
			</div>
		</main>
	);
};

export default Lastdesc;
