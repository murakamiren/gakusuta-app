import { NextPage } from "next";
import { useRouter } from "next/router";

const ReserveFinish: NextPage = () => {
	const router = useRouter();
	return (
		<main>
			<div className="flex flex-col items-center pt-[205px] px-8">
				<div className="mb-[46px]">
					<img src="/image/check-img.png" alt="check" />
				</div>
				<p className="text-[20px] font-bold mb-[17px]">お支払いが完了しました</p>
				<p className="text-sm text-center mb-[68px]">
					いつも学スタをご利用いただき、 ありがとうございます。 ご予約のお支払いが完了いたしました。
				</p>
				<button className="w-full py-3 rounded-full text-white bg-primary-blue" onClick={() => router.push("/")}>
					トップに戻る
				</button>
			</div>
		</main>
	);
};

export default ReserveFinish;
