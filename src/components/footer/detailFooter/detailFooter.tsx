import { FC } from "react";
import Button from "../../button/button";
import { DetailFooterProps } from "../type";
import { useDetailFooter } from "./hook";

const DetailFooter: FC<DetailFooterProps> = ({ facilityId }) => {
	const { pushReserve } = useDetailFooter();
	return (
		<footer className="fixed bottom-0 w-screen bg-white">
			<div className="flex justify-between items-center px-5 mt-4 mb-7">
				<p className="font-semibold mt-2 text-[26px]">
					110<span className="text-[12px]">円</span>~1,320<span className="text-[12px]">円/時間</span>
				</p>
				<Button
					text="空室確認・予約"
					mx="mx-[27px]"
					my="my-[10px]"
					bgColor="bg-primary-blue"
					color="text-white"
					fontSize="text-base"
					onClick={() => pushReserve(facilityId)}
				/>
			</div>
		</footer>
	);
};

export default DetailFooter;
