import { FC } from "react";
import TextWithIcon from "../../textWithIcon/textWithIcon";
import ThunderIcon from "../../../assets/thunder.svg";
import TimeIcon from "../../../assets/time.svg";
import Button from "../../button/button";

const AboutPlan: FC = () => {
	return (
		<div className="w-[234px] rounded-lg bg-white px-6 pb-5">
			<h3 className="font-normal pt-4">《8月限定》3時間以上利用で5%OFF! ¥592~プラン!</h3>
			<p className="font-semibold mt-[2px] text-[26px]">
				110円~<span className="text-[12px]">/時間</span>
			</p>
			<div className="flex flex-col gap-y-1 mt-[10px]">
				<TextWithIcon text="今すぐ予約" Icon={ThunderIcon} size="base" isFill />
				<TextWithIcon text="最低利用時間3時間〜" Icon={TimeIcon} size="base" isStroke />
			</div>
			<div className="mt-8">
				<Button
					text="このプランで予約する"
					isWidthFull
					my="my-[6px]"
					fontSize="text-sm"
					color="text-white"
					bgColor="bg-primary-blue"
				/>
			</div>
		</div>
	);
};

export default AboutPlan;
