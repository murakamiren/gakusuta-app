import { FC } from "react";
import Button from "../../button/button";

const AboutSpace: FC = () => {
	return (
		<div className="bg-white rounded-lg px-6">
			<h3 className="text-lg font-bold pt-5">スペースについて</h3>
			<p className="text-sm mt-2">
				本格的な機材と設備がフル装備。手ぶらで最適なスタジオを完備。 優れた清潔感、スムーズな入退室です。
			</p>
			<p className="flex justify-end mt-2">すべて読む</p>
			<h3 className="mt-6 text-lg font-bold">設備・備品等</h3>
			<div className="grid grid-rows-3 grid-flow-col mt-8 gap-y-1">
				<p className="text-sm">個室（壁・扉あり）</p>
				<p className="text-sm">トイレ</p>
				<p className="text-sm">個室（壁・扉あり）</p>
				<p className="text-sm">個室（壁・扉あり）</p>
				<p className="text-sm">個室（壁・扉あり）</p>
				<p className="text-sm">個室（壁・扉あり）</p>
			</div>
			<div className="pt-[16px] pb-[30px] flex justify-center">
				<Button
					text="設備・備品等をすべて見る"
					isWidthFull
					my="my-[12px]"
					borderColor="border-primary-blue"
					color="text-primary-blue"
				/>
			</div>
		</div>
	);
};

export default AboutSpace;
