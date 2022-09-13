import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";
import { EventBannerProps } from "./type";

const EventBanner: FC<EventBannerProps> = ({ size, img }) => {
	return (
		<div
			className={classNames(
				"rounded-lg bg-white flex justify-center items-center relative overflow-hidden",
				size === "base" && "w-60 h-[90px]",
				size === "xl" && "w-full h-[120px]"
			)}
		>
			<Image src={`/image/${img}`} alt="illustration" layout="fill" className="rounded-lg" />
		</div>
	);
};

export default EventBanner;
