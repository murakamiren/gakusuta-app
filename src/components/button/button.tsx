import classNames from "classnames";
import { FC } from "react";
import { ButtonProps } from "./type";

const Button: FC<ButtonProps> = ({ onClick, text, isDelete, isDetail }) => {
	return (
		<button
			onClick={onClick}
			className={classNames(
				"rounded-md border",
				isDelete && "border-primary-black",
				isDetail && "border-primary-purple"
			)}
		>
			<p
				className={classNames(
					"text-xs mx-3 my-[6px] font-semibold",
					isDelete && "text-primary-black",
					isDetail && "text-primary-purple"
				)}
			>
				{text}
			</p>
		</button>
	);
};

export default Button;
