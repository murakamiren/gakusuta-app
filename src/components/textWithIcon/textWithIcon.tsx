import classNames from "classnames";
import { FC } from "react";
import { TextWithIconProps } from "./type";

const TextWithIcon: FC<TextWithIconProps> = ({ text, Icon, isFill, isStroke, size, onClick }) => {
	return (
		<div className="flex items-center space-x-1" onClick={onClick}>
			<Icon
				className={classNames(
					isFill ? "fill-primary-blue" : "fill-transparent",
					isStroke ? "stroke-primary-blue" : "stroke-transparent",
					size === "base" && "w-[18px] h-[18px]",
					size === "xl" && "w-[26px] h-[26px]"
				)}
			/>
			<p className={classNames(size === "base" && "text-xs", size === "xl" && "text-base")}>{text}</p>
		</div>
	);
};

export default TextWithIcon;
