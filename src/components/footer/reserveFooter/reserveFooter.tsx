import { useRouter } from "next/router";
import { FC } from "react";
import Button from "../../button/button";
import { ReverseFooterProps } from "../type";

const ReserveFooter: FC<ReverseFooterProps> = ({ disable }) => {
	const router = useRouter();
	return (
		<footer className="fixed bottom-0 w-screen bg-white rounded-t-2xl">
			<div className="mt-4 mb-[30px] px-4 flex justify-between items-center">
				<p className="text-xs">最低利用時間は1~10時間です</p>
				<Button
					text="予約する"
					disable={disable}
					fontSize="text-base"
					mx="mx-[51px]"
					my="my-[10px]"
					bgColor="bg-primary-blue"
					color="text-white"
					onClick={() => router.push("/reserve/reservefinish")}
				/>
			</div>
		</footer>
	);
};

export default ReserveFooter;
