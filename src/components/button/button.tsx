import classNames from "classnames";
import { FC } from "react";
import { ButtonProps } from "./type";

const Button: FC<ButtonProps> = ({ onClick, text, isDelete, isDetail, color, bgColor, mx, my, fontSize }) => {
	return (
		<button
			onClick={onClick}
			className={classNames(
				"rounded-md",
				isDelete && "border-primary-black border",
				isDetail && "border-primary-purple border",
				bgColor && bgColor
			)}
		>
			<p
				className={classNames(
					"font-semibold",
					isDelete && "text-primary-black mx-3 my-[6px] text-xs",
					isDetail && "text-primary-purple mx-3 my-[6px] text-xs",
					color && color,
					mx && mx,
					my && my,
					fontSize && fontSize
				)}
			>
				{text}
			</p>
		</button>
	);
};

export default Button;
