import { FC } from "react";
import RightArrowIcon from "../../../assets/rightArrow.svg";
import Divider from "../../divider/divider";

const NoteCard: FC = () => {
	return (
		<div className="px-6 pb-[26px] w-full bg-white rounded-lg">
			<h3 className="pt-5 font-bold text-lg">注意事項</h3>
			<div className="flex justify-between items-center">
				<p className="text-sm">※ご予約の際は必ずお読みください。</p>
				<RightArrowIcon />
			</div>
			<div className="mt-4">
				<Divider />
			</div>
			<h3 className="pt-4 font-bold text-lg">キャンセルについて</h3>
			<div className="flex justify-between items-center">
				<p className="text-sm">※ご予約の際は必ずお読みください。</p>
				<RightArrowIcon />
			</div>
		</div>
	);
};

export default NoteCard;
