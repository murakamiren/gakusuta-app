import Image from "next/image";
import { FC } from "react";
import Button from "../../button/button";
import { CardBaseTopProps } from "./type";

const CardBaseTop: FC<CardBaseTopProps> = ({ onClick }) => {
	return (
		<div className="flex space-x-[14px]">
			<div className="w-24 h-[98px] relative">
				<Image src={"/image/studio.png"} alt="studio" layout="fill" className="rounded" />
			</div>
			<div className="flex flex-col justify-between flex-1 items-end">
				<h2 className="text-sm font-semibold text-primary-black">
					本格的な機材と設備がフル装 備。手ぶらで最適なスタジオ。
				</h2>
				<Button text="詳細情報を見る" isDetail onClick={onClick} />
			</div>
		</div>
	);
};

export default CardBaseTop;
