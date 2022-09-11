import classNames from "classnames";
import { FC } from "react";
import { TextWithIconProps } from "./type";

const TextWithIcon: FC<TextWithIconProps> = ({ text, Icon, isFill, isStroke, size }) => {
	return (
		<div className="flex items-center space-x-1">
			<Icon
				className={classNames(
					isFill ? "fill-primary-blue" : "fill-transparent",
					isStroke ? "stroke-primary-blue" : "stroke-transparent",
					size === "xl" && "w-[26px] h-[26px]"
				)}
			/>
			<p className={classNames(size === "base" && "text-xs", size === "xl" && "text-base")}>{text}</p>
		</div>
	);
};

export default TextWithIcon;
