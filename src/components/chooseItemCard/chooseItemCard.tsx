import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";
import { ChooseItemCardProps } from "./type";

const ChooseItemCard: FC<ChooseItemCardProps> = ({ bgColor, title, img }) => {
	return (
		<div className={classNames("w-40 h-32 rounded-lg", bgColor)}>
			<div className="w-full h-full flex flex-col items-center pt-[6px]">
				<div className="w-full h-[90px] flex justify-center items-center overflow-hidden relative">
					<Image src={`/image/${img}`} alt="illustration" layout="fill" />
				</div>
				<p className="w-full ml-4 mt-[4px] font-bold text-white text-[14px]">{title}</p>
			</div>
		</div>
	);
};

export default ChooseItemCard;
