import classNames from "classnames";
import { FC } from "react";
import { TextWithIconProps } from "./type";

const TextWithIcon: FC<TextWithIconProps> = ({ text, Icon, isFill, isStroke }) => {
	return (
		<div className="flex items-center space-x-1">
			<Icon
				className={classNames(
					isFill ? "fill-primary-blue" : "fill-transparent",
					isStroke ? "stroke-primary-blue" : "stroke-transparent"
				)}
			/>
			<p className="text-xs">{text}</p>
		</div>
	);
};

export default TextWithIcon;
