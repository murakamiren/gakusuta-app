import classNames from "classnames";
import { FC } from "react";
import { FacilityCardProps } from "./type";
import FavoriteIcon from "../../assets/favorite.svg";
import BottomInfo from "./bottomInfo/bottomInfo";
import Divider from "../divider/divider";
import Feature from "../feature/feature";
import Image from "next/image";

const FacilityCard: FC<FacilityCardProps> = ({ size, isFavorite }) => {
	return (
		<div
			className={classNames(
				"rounded-lg bg-white",
				size === "base" && "w-[266px] h-[395px]",
				size === "xl" && "w-full h-[440px]"
			)}
		>
			<div className="w-full h-full px-[14px] pt-[10px] pb-5 flex flex-col justify-start">
				<div
					className={classNames(
						"w-full bg-primary-purple rounded-xl relative",
						size === "base" && "h-[145px]",
						size === "xl" && "h-[180px]"
					)}
				>
					<div className="w-full h-full overflow-hidden relative">
						<Image src="/image/studio.png" alt="studio" layout="fill" className="rounded" />
					</div>
					<div className="w-8 h-8 rounded-full absolute top-2 right-2 flex justify-center items-center bg-white">
						<FavoriteIcon className={classNames(isFavorite ? "fill-primary-blue" : "fill-primary-gray")} />
					</div>
				</div>
				<h3 className={classNames("font-bold mt-3", size === "base" && "text-[14px]", size === "xl" && "text-base")}>
					本格的な機材と設備がフル装備。手ぶらで最適なスタジオ。
				</h3>
				<p className="font-bold mt-2 text-base">
					110<span className="text-[8px]">円</span>~1,320<span className="text-[8px]">円/時間</span>
				</p>
				<div className="mt-2">
					<BottomInfo
						location="大阪府 大阪市淀川区 西中島"
						distance="新大阪駅 徒歩6分"
						rentalTime="~120分"
						capacity="~8名"
						rate="4.4(140件)"
					/>
				</div>
				<div className="mt-4">
					<Divider />
				</div>
				<div className="mt-[14px] flex flex-nowrap overflow-x-scroll hidden-scrollbar">
					<div className="space-x-2 flex">
						<Feature text="今すぐ予約可能" />
						<Feature text="除菌スプレーあり" />
						<Feature text="直前割" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FacilityCard;
