import Image from "next/image";
import { FC } from "react";
import Button from "../button/button";
import Divider from "../divider/divider";
import BottomInfo from "./bottomInfo/bottomInfo";
import CardBaseTop from "./cardBase/cardBaseTop";

const FavoriteCard: FC = () => {
	return (
		<div className="w-full rounded-lg bg-white p-4">
			<CardBaseTop />
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
