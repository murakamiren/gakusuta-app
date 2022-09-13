import { FC } from "react";
import { MyPageCardProps } from "./type";
import RightArrowIcon from "../../assets/rightArrow.svg";
import classNames from "classnames";

const MyPageCard: FC<MyPageCardProps> = ({ LeftIcon, title, isLeftIconFill }) => {
	return (
		<div className="w-full flex justify-between items-center h-14 px-5 bg-white">
			<div className="flex space-x-[10px]">
				<LeftIcon className={classNames("w-6 h-6", isLeftIconFill ? "fill-primary-blue" : "stroke-primary-blue")} />
				<p className="text-sm font-bold">{title}</p>
			</div>
			<RightArrowIcon />
		</div>
	);
};

export default MyPageCard;
