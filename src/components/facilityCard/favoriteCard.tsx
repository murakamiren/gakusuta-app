import Image from "next/image";
import { FC } from "react";
import Button from "../button/button";
import Divider from "../divider/divider";
import BottomInfo from "./bottomInfo/bottomInfo";

const FavoriteCard: FC = () => {
	return (
		<div className="w-full rounded-lg bg-white p-4">
			<div className="flex space-x-[14px]">
				<div className="w-24 h-[98px] relative">
					<Image src={"/image/studio.png"} alt="studio" layout="fill" className="rounded" />
				</div>
				<div className="flex flex-col justify-between flex-1 items-end">
					<h2 className="text-sm font-semibold text-primary-black">
						本格的な機材と設備がフル装 備。手ぶらで最適なスタジオ。
					</h2>
					<Button text="詳細情報を見る" isDetail />
				</div>
			</div>
			<div className="my-4">
				<Divider />
			</div>
			<div className="mb-2">
				<BottomInfo
					location="大阪府 大阪市淀川区 西中島"
					distance="新大阪駅 徒歩6分"
					rentalTime="~120分"
					capacity="~8名"
					rate="4.4(140件)"
				/>
			</div>
			<div className="flex justify-between items-center">
				<p className="font-semibold mt-2 text-[26px]">
					110<span className="text-[12px]">円</span>~1,320<span className="text-[12px]">円/時間</span>
				</p>
				<Button text="削除する" isDelete />
			</div>
		</div>
	);
};

export default FavoriteCard;
