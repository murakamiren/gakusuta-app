import { useRouter } from "next/router";
import { useState } from "react";

export const useIntro = () => {
	const router = useRouter();
	const [currentNum, setCurrentNum] = useState<1 | 2 | 3 | 4>(1);
	const [btnText, setBtnText] = useState("次へ");
	const [desc, setDesc] = useState<
		| "スタジオ・ライブハウスが 安くで借りられる"
		| "他のバンドと交流する 機会のあるイベントを開催"
		| "気になる、お気に入りの場所を まとめておくことができる"
	>("スタジオ・ライブハウスが 安くで借りられる");

	const [img, setImg] = useState<"intro-1" | "intro-2" | "intro-3">("intro-1");

	const handleCurrentIntro = () => {
		if (currentNum === 1) {
			setBtnText("次へ");
			setDesc("他のバンドと交流する 機会のあるイベントを開催");
			setImg("intro-2");
			setCurrentNum(2);
		} else if (currentNum === 2) {
			setBtnText("次へ");
			setDesc("気になる、お気に入りの場所を まとめておくことができる");
			setImg("intro-3");
			setCurrentNum(3);
		} else if (currentNum === 3) {
			setBtnText("はじめる");
			router.push("/lastdesc");
		}
	};

	return { btnText, currentNum, handleCurrentIntro, desc, img };
};
