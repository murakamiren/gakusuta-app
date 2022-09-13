import { FC } from "react";
import Button from "../../button/button";

const ReserveFooter: FC = () => {
	return (
		<footer className="fixed bottom-0 w-screen bg-white rounded-t-2xl">
			<div className="mt-4 mb-[30px] px-4 flex justify-between items-center">
				<p className="text-xs">最低利用時間は1~10時間です</p>
				<Button text="予約手続きに進む" disable fontSize="text-base" mx="mx-[20px]" my="my-[10px]" />
			</div>
		</footer>
	);
};

export default ReserveFooter;
