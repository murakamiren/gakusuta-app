import classNames from "classnames";
import { FC } from "react";
import { EventBannerProps } from "./type";

const EventBanner: FC<EventBannerProps> = ({ size }) => {
	return (
		<div
			className={classNames(
				"rounded-lg bg-white flex justify-center items-center",
				size === "base" && "w-60 h-[90px]",
				size === "xl" && "w-full h-[120px]"
			)}
		>
			<p>event</p>
		</div>
	);
};

export default EventBanner;
