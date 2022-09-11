import classNames from "classnames";
import { FC } from "react";
import { DividerProps } from "./type";

const Divider: FC<DividerProps> = ({ isHorizontal }) => {
	return <div className={classNames("bg-primary-gray", isHorizontal ? "h-full w-[0.4px]" : "w-full h-[0.4px]")}></div>;
};

export default Divider;
