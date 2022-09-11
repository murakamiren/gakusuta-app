import classNames from "classnames";
import { FC } from "react";
import { ChooseItemCardProps } from "./type";

const ChooseItemCard: FC<ChooseItemCardProps> = ({ bgColor, title }) => {
	return (
		<div className={classNames("w-40 h-32 rounded-lg", bgColor)}>
			<div className="w-full h-full flex flex-col items-center pt-[10px]">
				<div className="w-[78px] h-[78px] rounded-full bg-white flex justify-center items-center">
					<p className="text-sm">イラスト</p>
				</div>
				<p className="w-full ml-4 mt-[10px] text-white text-[14px]">{title}</p>
			</div>
		</div>
	);
};

export default ChooseItemCard;
