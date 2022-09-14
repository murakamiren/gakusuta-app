import classNames from "classnames";
import { NextPage } from "next";
import Image from "next/image";
import { useIntro } from "../hook/useIntro";

const Intro: NextPage = () => {
	const { btnText, currentNum, handleCurrentIntro, desc, img } = useIntro();
	return (
		<main className="w-screen h-screen bg-[#8857EE] pt-[54px]">
			<div>
				<img src="/image/dot.png" alt="dot" />
				<img src="/image/circle-dot.png" alt="circle-dot" className="absolute right-[48px]" />
				<img src="/image/wave.png" alt="wave" className="absolute bottom-[300px]" />
				<img src="/image/t-dot.png" alt="t-dot" className="absolute bottom-[150px] right-[10px]" />
			</div>
			<div className="flex justify-center mt-[14px]">
				<div className="w-[330px] h-[460px] relative">
					<Image src={`/image/${img}.png`} alt="intro" layout="fill" />
				</div>
			</div>
			<div className="px-6">
				<p className="text-[22px] font-bold text-white text-center mt-[18px]">{desc}</p>
				<div className="flex justify-center items-center space-x-3 mt-8">
					<div
						className={classNames(
							"rounded-full",
							currentNum === 1 ? "w-3 h-3 bg-primary-blue" : "w-[6px] h-[6px] bg-[#BDA1F9]"
						)}
					></div>
					<div
						className={classNames(
							"rounded-full",
							currentNum === 2 ? "w-3 h-3 bg-primary-blue" : "w-[6px] h-[6px] bg-[#BDA1F9]"
						)}
					></div>
					<div
						className={classNames(
							"rounded-full",
							currentNum === 3 ? "w-3 h-3 bg-primary-blue" : "w-[6px] h-[6px] bg-[#BDA1F9]"
						)}
					></div>
				</div>
				<button className="w-full text-primary-blue bg-white rounded-xl py-3 mt-6" onClick={() => handleCurrentIntro()}>
					{btnText}
				</button>
			</div>
		</main>
	);
};

export default Intro;
