import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useHeaderTitle = () => {
	const [headerTitle, setHeaderTitle] = useState<string>("");
	const [isLocationIcon, setIsLocationIcon] = useState<boolean>(false);
	const router = useRouter();
	const currentPath = router.asPath;
	const decodedCurrentPath = decodeURI(currentPath);
	const areaQueryParam = router.query.area;

	useEffect(() => {
		if (decodedCurrentPath === `/search/${areaQueryParam}`) {
			setIsLocationIcon(true);
		} else {
			setIsLocationIcon(false);
		}

		switch (decodedCurrentPath) {
			case "/":
				setHeaderTitle("ホーム");
				break;
			case "/search":
				setHeaderTitle("利用するエリアを入力する");
				break;
			case "/favorite":
				setHeaderTitle("お気に入り");
				break;
			case "/reserve":
				setHeaderTitle("予約済み");
				break;
			case `/search/${areaQueryParam}`:
				typeof areaQueryParam === "string" && setHeaderTitle(areaQueryParam);
				break;
			default:
				setHeaderTitle("デフォルト");
		}
	}, [currentPath, areaQueryParam]);

	const back = () => {
		if (decodedCurrentPath === `/search/${areaQueryParam}`) return router.replace("/search");
		router.back();
	};

	const isParamEmpty = Object.keys(router.query).length === 0;

	const isBackArrowExist = () => {
		if (isParamEmpty && currentPath === "/search") return true;
		return !isParamEmpty;
	};

	return { headerTitle, back, isBackArrowExist, isLocationIcon };
};
